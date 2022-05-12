import { Output } from "@mui/icons-material";
import { checkboxClasses } from "@mui/material";
import React from "react";

class StatistikUebersicht extends React.Component {
  state = {
    eingaben: JSON.parse(localStorage.getItem("eintraege") || "[]"),
  };

  renderOverallStats() {
    return (
      <div>
        <div>
          <h2>
            Du hast schon {this.state.eingaben.entries.length} Eingaben gemacht.
          </h2>
        </div>
      </div>
    );
  }

  renderNumberCheckboxes() {
    let checkBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // [bicycle, publicTraffic, Car, Flight, Meat, Milk, Pommes, Schoki, Konsum]

    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i] = this.helpRenderCheckboxes(i);
    }

    return (
      <div>
        <div>
          Du bist insgesamt {checkBoxes[0]} mal mit dem Fahrrad gefahren.
        </div>
        <div>Du bist insgesamt {checkBoxes[1]} mal mit dem ÖPNV gefahren.</div>
        <div>Du bist insgesamt {checkBoxes[2]} mal mit dem Auto gefahren.</div>
        <div>
          Du bist insgesamt {checkBoxes[3]} mal mit dem Flugzeug geflogen.
        </div>
        <div>Du hast insgesamt {checkBoxes[4]} mal Fleisch gegessen.</div>
        <div>
          Du hast insgesamt {checkBoxes[5]} milchprodukte zu dir genommen.
        </div>
        <div>Du hast insgesamt {checkBoxes[6]} mal Pommes gegessen.</div>
        <div>Du hast insgesamt {checkBoxes[7]} mal Schokolade gegessen.</div>
        <div>Du warst insgesamt {checkBoxes[8]} mal shoppen.</div>
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
    return <div>Dein Streak liegt bei {streak} Einträgen.</div>;
  }

  render() {
    const isLoginTrue = JSON.parse(localStorage.getItem("login"));

    if (isLoginTrue) {
      if (this.state.eingaben.length === 0) {
        return (
          <div>
            Leider gibt es noch keine Daten, die ausgewertet werden können.
          </div>
        );
      } else {
        return (
          <div>
            <div>{this.renderOverallStats()}</div>
            <div>{this.renderNumberCheckboxes()}</div>
            <div>{this.renderStreak()}</div>
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
