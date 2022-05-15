import React from "react";

class StatistikUebersicht extends React.Component {
  state = {
    eingaben: JSON.parse(localStorage.getItem("eintraege") || "[]"),
  };

  renderOverallStats() {
    return (
      <div>
        <div>
          <h2 className="display-6">
            Du hast schon <strong>{this.state.eingaben.entries.length}</strong>{" "}
            Eingaben gemacht.
          </h2>
        </div>
      </div>
    );
  }

  renderNumberCheckboxes() {
    let checkBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // [bicycle, publicTraffic, Car, Flight, Meat, Milk, Fries, Chocolate, Purchase]

    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i] = this.helpRenderCheckboxes(i);
    }

    return (
      <div>
        <ul>
          <li>
            Insgesamt <strong>{checkBoxes[0]}</strong> mal bist du mit dem
            Fahrrad gefahren.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[1]}</strong> mal bist du mit dem ÖPNV
            gefahren.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[2]}</strong> mal bist du mit dem Auto
            gefahren.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[3]}</strong> mal bist du mit dem
            Flugzeug geflogen.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[4]}</strong> mal hast du Fleisch
            gegessen.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[5]}</strong> milchprodukte hast du zu
            dir genommen.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[6]}</strong> mal hast du Pommes
            gegessen.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[7]}</strong> mal hast du Schokolade
            gegessen.
          </li>
          <li>
            Insgesamt <strong>{checkBoxes[8]}</strong> mal warst du shoppen.
          </li>
        </ul>
      </div>
    );
  }

  helpRenderCheckboxes(i) {
    const select = [
      "checkBicycle",
      "checkPublicTransport",
      "checkCar",
      "checkFlight",
      "checkMeat",
      "checkMilkProducts",
      "checkFries",
      "checkChocolate",
      "checkPurchase",
    ];

    let numberHits = 0;

    if (i === 0) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (this.state.eingaben.entries[j].realEintrag.checkBicycle === true) {
          numberHits += 1;
        }
      }
    } else if (i === 1) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (
          this.state.eingaben.entries[j].realEintrag.checkPublicTransport ===
          true
        ) {
          numberHits += 1;
        }
      }
    } else if (i === 2) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (this.state.eingaben.entries[j].realEintrag.checkCar === true) {
          numberHits += 1;
        }
      }
    } else if (i === 3) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (this.state.eingaben.entries[j].realEintrag.checkFlight === true) {
          numberHits += 1;
        }
      }
    } else if (i === 4) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (this.state.eingaben.entries[j].realEintrag.checkMeat === true) {
          numberHits += 1;
        }
      }
    } else if (i === 5) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (
          this.state.eingaben.entries[j].realEintrag.checkMilkProducts === true
        ) {
          numberHits += 1;
        }
      }
    } else if (i === 6) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (this.state.eingaben.entries[j].realEintrag.checkFries === true) {
          numberHits += 1;
        }
      }
    } else if (i === 7) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (
          this.state.eingaben.entries[j].realEintrag.checkChocolate === true
        ) {
          numberHits += 1;
        }
      }
    } else if (i === 8) {
      for (let j = 0; j < this.state.eingaben.entries.length; j++) {
        if (this.state.eingaben.entries[j].realEintrag.checkPurchase === true) {
          numberHits += 1;
        }
      }
    }

    return numberHits;
  }

  renderStreak() {
    const streak = this.state.eingaben.streak[0];
    return (
      <div className="display-6">
        Dein Streak liegt bei <strong>{streak}</strong> Einträgen.
      </div>
    );
  }

  render() {
    const isLoginTrue = JSON.parse(localStorage.getItem("login"));

    if (isLoginTrue) {
      if (this.state.eingaben.length === 0) {
        return (
          <div className="alert alert-warning" role="alert">
            Leider gibt es noch keine Daten, die ausgewertet werden können.
          </div>
        );
      } else {
        return (
          <div className="container-fluid">
            <div>{this.renderOverallStats()}</div>
            <div>{this.renderNumberCheckboxes()}</div>
            <div>{this.renderStreak()}</div>
            <div></div>
          </div>
        );
      }
    } else {
      return (
        <div className="alert alert-warning" role="alert">
          Bitte melde Dich an, um diese Seite nutzen zu können.
        </div>
      );
    }
  }
}

export default StatistikUebersicht;
