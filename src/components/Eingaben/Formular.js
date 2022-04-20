import React from "react";
import { Field, reduxForm } from "redux-form";
import DetailFormular from "./DetailFormular";

class Formular extends React.Component {
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
      return <div>{error}</div>;
    }
  }

  renderInput({ input, label, meta }) {
    return (
      <div className="form-floating">
        <input {...input} className="form-control" id="floatingInput" />
        <label className="floatingInput">{label}</label>
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

  onSubmit(formValues) {}

  render() {
    return (
      <div className="container">
        <h1 className="display-1">Tägliche Eingabe</h1>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="container">
            <h3 className="display-6">Benennung</h3>
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
          </div>
          <div className="container">
            <h3 className="display-6">Mobilität</h3>
            <Field
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
};

export default reduxForm({
  form: "dailyForm",
  validate,
})(Formular);
