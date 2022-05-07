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

  renderCurrentDaySmall() {
    const today = new Date();
    return [today.getDate(), today.getMonth(), today.getFullYear()];
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

  checkStreak(old) {
    const today = new Date();

    if (old[2] === today.getFullYear()) {
      if (old[1] === today.getMonth()) {
        if (old[0] === today.getDate()) {
          // Dann handelt es sich um einen weiteren Eintrag am gleichen Tag
          return 187;
        } else if (old[0] === today.getDate() - 1) {
          // Dann war die letzte Eingabe einen Tag zuvor;
          // deckt aber nicht alle Möglichkeiten ab,
          // wenn z.B. letzter Tag eines Monats auf den ersten des nächsten folgt.

          return true;
        }
      } else if (old[1] === 3 || 5 || 8 || 10) {
        // Dann war der letzte Eintrag in einem Monat mit 30 Tagen
        // [April, Juni, September, November]

        if (old[0] === 30) {
          // Dann war die letzte Eingabe am letzten Tag des jeweiligen Monats
          if (today.getDate() !== 1) {
            // Dann ist die neue Eingabe nicht an einem ersten Tag im Monat
            return false;
          } else if (old[1] === 3) {
            // Dann war die letzte Eingabe am 30. April des selben Jahres
            if (today.getMonth() === 4) {
              // Dann ist die neue Eingabe am 01. Mai und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 5) {
            // Dann war die letzte Eingabe am 30. Juni des selben Jahres
            if (today.getMonth() === 6) {
              // Dann ist die neue Eingabe am 01. Juli und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 8) {
            // Dann war die letzte Eingabe am 30. September des selben Jahres
            if (today.getMonth() === 9) {
              // Dann ist die neue Eingabe am 01. Oktober und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 10) {
            // Dann war die letzte Eingabe am 30. November des selben Jahres
            if (today.getMonth() === 11) {
              // Dann ist die neue Eingabe am 01. Dezember und damit einen Tag später.
              return true;
            }
          }
        }
      } else if (old[1] === 0 || 2 || 4 || 6 || 7 || 9) {
        // Dann war der letzte Eintrag in einem Monat mit 31 Tagen
        // [Januar, März, Mai, Juli, August, Oktober, Dezember]

        if (old[0] === 31) {
          // Dann war der letzte Eintrag am letzten Tag des jeweiligen Monats
          if (today.getDate() !== 1) {
            // Dann ist die neue Eingabe nicht an einem ersten Tag im Monat
            return false;
          } else if (old[1] === 0) {
            // Dann war die letzte Eingabe am 31. Januar desselben Jahres.
            if (today.getMonth() === 2) {
              // Dann ist die neue Eingabe am 01. Februar und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 2) {
            // Dann war die letzte Eingabe am 31. März desselben Jahres.
            if (today.getMonth() === 3) {
              // Dann ist die neue Eingabe am 01. April und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 4) {
            // Dann war die letzte Eingabe am 31. Mai desselben Jahres.
            if (today.getMonth() === 5) {
              // Dann ist die neue Eingabe am 01. Juni und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 6) {
            // Dann war die letzte Eingabe am 31. Juli desselben Jahres.
            if (today.getMonth() === 7) {
              // Dann ist die neue Eingabe am 01. August und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 7) {
            // Dann war die letzte Eingabe am 31. August desselben Jahres.
            if (today.getMonth() === 8) {
              // Dann ist die neue Eingabe am 01. September und damit einen Tag später.
              return true;
            }
          } else if (old[1] === 9) {
            // Dann war die letzte Eingabe am 31. Oktober desselben Jahres.
            if (today.getMonth() === 10) {
              // Dann ist die neue Eingabe am 01. November und damit einen Tag später.
              return true;
            }
          }
        }
      } else if (old[1] === 1) {
        // Dann war der letzte Eintrag im Februar

        if (today.getFullYear() % 4 === 0) {
          // Dann handelt es sich um ein Schaltjahr.
          if (
            old[0] === 29 &&
            today.getDate() === 1 &&
            today.getMonth() === 2
          ) {
            // Dann war die letzte Eingabe am 29. Februar und die neue Eingabe ist am 01. März und damit einen Tag später.
            return true;
          }
        } else {
          // Dann handelt es sich um kein Schaltjahr.
          if (
            old[0] === 28 &&
            today.getDate() === 1 &&
            today.getMonth() === 2
          ) {
            // Dann war die letzte Eingabe am 28. Februar und die neue Eingabe ist am 01. März und damit einen Tag später.
            return true;
          }
        }

        if (today.getDate() === 1 && today.getMonth() === 2) {
          // Dann ist die neue Eingabe am 01. März und damit einen Tag später.
          return true;
        }
      }
    } else if (old[2] === today.getFullYear() - 1) {
      // Dann war die letzte Eingabe im letzten Jahr
      if (
        old[1] === 11 &&
        old[0] === 31 &&
        today.getMonth === 0 &&
        today.getDate() === 1
      ) {
        // Dann war die letzte Eingabe am 31. Dezember des letzten Jahres und die neue Eingabe am 01. Januar des neuen Jahres und damit einen Tag später.
        return true;
      }
    } else {
      return false;
    }
  }

  renderOverlay() {
    return;
  }

  renderDate() {
    const today = new Date();

    return today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();
  }

  onSubmit = (formValues) => {
    // this.props.addEntry(formValues);

    if (this.firstEntry()) {
      localStorage.setItem(
        "eintraege",
        JSON.stringify({
          entries: [{ realEintrag: formValues }],
          streak: [1, this.renderCurrentDaySmall()],
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

      const id = "realEintrag"; // `eintrag_${tmpEntries.entries.length + 1}`

      tmpEntries.entries.push({ [id]: formValues });
      let streak = [tmpEntries.streak[0], tmpEntries.streak[1]];

      const isStreak = this.checkStreak(streak[1]);

      if (isStreak === true) {
        streak[0] += 1;
      } else if (isStreak === false) {
        streak[0] = 0;
      }

      streak[1] = this.renderCurrentDaySmall();

      localStorage.removeItem("eintraege");

      const entries = tmpEntries.entries;

      localStorage.setItem(
        "eintraege",
        JSON.stringify({
          entries,
          streak,
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
