import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addEntry } from "../../actions";
import DetailFormular from "./DetailFormular";
import { Link, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Formular extends React.Component {
  firstEntry() {
    if (JSON.parse(localStorage.getItem("entriesExist"))) {
      return false;
    } else {
      return true;
    }
  }

  renderCurrentDay() {
    const today = new Date();
    return (
      "Titel: z.B. 'Meine Eingabe vom " +
      today.getDate() +
      "." +
      today.getMonth() +
      ".'"
    );
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return <div>Fehler</div>;
    }
  }

  renderInput({ input, label, meta }) {
    const id = `field ${meta.error && meta.touched ? "invalid" : ""}`;
    return (
      <div className="form-floating input-group has-validation" id={id}>
        <input
          {...input}
          className="form-control"
          id="floatingInput validationCustomUsername validationCustom01"
          required
        />
        <div className="invalid-feedback">Das Feld darf nicht leer sein.</div>
        <label className="floatingInput">{label}</label>
      </div>
    );
  }

  renderDateInput({ input, label, meta }) {
    return (
      <div className="form-floating">
        <input {...input} className="form-control" id="floatingInput" />
        <label className="floatingInput">Datum: [JJJJ-MM-TT]</label>
      </div>
    );
  }

  renderCheckbox({ input, label, meta }) {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          {...input}
          id="flexCheckDefault"
        />
        <label className="form-check-label">{label}</label>
      </div>
    );
  }

  renderOverlay() {
    return;
  }

  renderDate() {
    const today = new Date();

    return today.getFullYear() + "-" + today.getMonth + "-" + today.getDay;
  }

  onSubmit = (formValues) => {
    // this.props.addEntry(formValues);

    if (this.firstEntry()) {
      localStorage.setItem(
        "eintraege",
        JSON.stringify({
          entries: [{ eintrag_1: formValues }],
        })
      );
      localStorage.setItem(
        "entriesExist",
        JSON.stringify({
          entriesExist: true,
        })
      );
    } else {
      const tmpEntries = JSON.parse(localStorage.getItem("eintraege") || "[]");

      const id = `eintrag_${tmpEntries.entries.length + 1}`;

      tmpEntries.entries.push({ [id]: formValues });

      localStorage.removeItem("eintraege");

      const entries = tmpEntries.entries;

      localStorage.setItem(
        "eintraege",
        JSON.stringify({
          entries,
        })
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-1">Tägliche Eingabe</h1>

        <form
          className="row g-3 needs-validation"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="col-md-4">
            <h3 className="display-6">Allgemeines</h3>
            <Field
              name="title"
              component={this.renderInput}
              label={this.renderCurrentDay()}
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Beschreibung:"
            />
            <Field name="date" component={this.renderDateInput} />
          </div>
          <div className="container">
            <h3 className="display-6">Mobilität</h3>
            <Field
              onChange={this.renderOverlay}
              name="checkBicycle"
              component={this.renderCheckbox}
              label="Ich bin heute Fahrrad gefahren."
            />
            <Field
              name="checkPublicTransport"
              component={this.renderCheckbox}
              label="Ich bin heute mit den öffentlichen Verkehrsmitteln gefahren"
            />
            <Field
              name="checkCar"
              component={this.renderCheckbox}
              label="Ich bin heute mit dem Auto gefahren."
            />
            <Field
              name="checkFlight"
              component={this.renderCheckbox}
              label="Ich bin heute mit dem Flugzeug geflogen."
            />
          </div>
          <div className="container">
            <h3 className="display-6">Ernährung</h3>
            <Field
              name="checkMeat"
              component={this.renderCheckbox}
              label="Ich habe heute Fleisch gegessen."
            />
            <Field
              name="checkMilkProducts"
              component={this.renderCheckbox}
              label="Ich habe heute Milchprodukte zu mir genommen."
            />
            <Field
              name="checkFries"
              component={this.renderCheckbox}
              label="Ich habe heute Pommes gegessen."
            />
            <Field
              name="checkChocolate"
              component={this.renderCheckbox}
              label="Ich habe heute Schokolade gegessen."
            />
          </div>
          <div className="container">
            <h3 className="display-6">Konsum</h3>
            <Field
              name="checkPurchase"
              component={this.renderCheckbox}
              label="Ich war heute einkaufen."
            />
          </div>
          <button className="btn btn-primary">Abschicken</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Bitte gib einen Titel ein.";
  }

  if (!formValues.description) {
    errors.description = "Bitte gib eine Beschreibung ein.";
  }

  if (!formValues.date) {
    errors.date = "Bitte gib ein Datum ein.";
  }
};

const formWrapped = reduxForm({
  form: "dailyForm",
  validate,
})(Formular);

export default connect(null, { addEntry })(formWrapped);
