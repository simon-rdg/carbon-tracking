import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Formular extends React.Component {
  state = {
    eingaben: JSON.parse(localStorage.getItem("eintraege") || "[]"),
    done: false,
  };

  firstEntry() {
    if (JSON.parse(localStorage.getItem("entriesExist"))) {
      return false;
    } else {
      return true;
    }
  }

  returnCurrentDaySmall() {
    const today = new Date();
    return [today.getDate(), today.getMonth(), today.getFullYear()];
  }

  renderInput({ input, label }) {
    return (
      <div className="form-floating input-group">
        <input
          {...input}
          className="form-control"
          id="floatingInput"
          required
        />

        <label className="floatingInput">{label}</label>
      </div>
    );
  }

  renderCheckbox({ input, label }) {
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

  onSubmit = (formValues) => {
    const datum = new Date();
    const today =
      "" +
      datum.getDate() +
      "." +
      (datum.getMonth() + 1) +
      "." +
      datum.getFullYear();

    if (this.firstEntry()) {
      localStorage.setItem(
        "eintraege",
        JSON.stringify({
          entries: [{ realEintrag: formValues, date: today }],
          streak: [1, this.returnCurrentDaySmall()],
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

      const z = tmpEntries.entries.length;

      if (tmpEntries.entries[z - 1].date === today) {
        window.alert("Es kann nur ein Eintrag pro Tag verfasst werden.");
        this.setState({ done: true });

        return;
      }

      tmpEntries.entries.push({ realEintrag: formValues, date: today });
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
    this.setState({ done: true });
    window.alert("Dein Formular wurde gespeichert.");
  };

  renderAlreadyDoneMessage() {
    const tmpEntries = JSON.parse(localStorage.getItem("eintraege") || "[]");
    const datum = new Date();
    const today =
      "" +
      datum.getDate() +
      "." +
      (datum.getMonth() + 1) +
      "." +
      datum.getFullYear();

    if (tmpEntries.length !== 0) {
      const z = tmpEntries.entries.length;

      if (tmpEntries.entries[z - 1].date === today) {
        return (
          <div className="alert alert-warning" role="alert">
            Du hast heute schon einen Eintrag getätigt.
          </div>
        );
      }
    }
  }

  redirectDone() {
    if (this.state.done === true) {
      return <Redirect to="eingaben" />;
    }
  }

  render() {
    const today = new Date();

    return (
      <div className="container" style={{ marginBottom: "20px" }}>
        {this.renderAlreadyDoneMessage()}

        <h1 className="display-1">Tägliche Eingabe</h1>

        <form
          className="row g-3 needs-validation"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="col-md-4">
            <h3 className="display-6">Allgemeines</h3>
            <Field name="title" component={this.renderInput} label="Titel:" />
            <Field
              name="description"
              component={this.renderInput}
              label="Beschreibung:"
            />
            <h6>
              {" "}
              Meine Eingabe vom {today.getDate()}.{today.getMonth() + 1}.
              {today.getFullYear()}
            </h6>
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
        {this.redirectDone()}
      </div>
    );
  }
}

const formWrapped = reduxForm({
  form: "dailyForm",
})(Formular);

export default connect()(formWrapped);
