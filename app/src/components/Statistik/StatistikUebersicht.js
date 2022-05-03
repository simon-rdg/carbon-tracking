import React from "react";

class StatistikUebersicht extends React.Component {
  state = {
    eingaben: JSON.parse(localStorage.getItem("eintraege") || "[]"),
    mengeEingaben: null,
  };

  renderOverallStats() {
    const mengeEingaben = this.state.eingaben.entries.length;

    this.setState({ mengeEingaben: this.mengeEingaben });

    return (
      <div>
        <div>
          <h2>Du hast schon {mengeEingaben} Eingaben gemacht.</h2>
        </div>
      </div>
    );
  }

  renderNumberCheckboxes() {
    let checkBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // bicycle, ÖPNV, Car, Flight, Meat, Milk, Pommes, Schoki, Konsum

    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i] = this.helpRenderCheckboxes(i);
    }

    console.log(checkBoxes);
  }

  helpRenderCheckboxes(i) {
    // gibt zurück die Anzahl aller Eingaben an,
    // in denen die jeweilige Checkbox angeklickt wurde.

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

    for (let j = 0; j < this.state.mengeEingaben; j++) {
      if (`this.state.eingaben.entries.${j}.eingaben_${i + 1}.${select[i]}`) {
        numberHits += 1;
      }
      console.log(
        `this.state.eingaben.entries.${j}.eingaben_${i + 1}.${select[i]}`
      );
    }

    return numberHits;
  }

  render() {
    return (
      <div>
        <div>{this.renderOverallStats()}</div>
        <div>{this.renderNumberCheckboxes()}</div>
      </div>
    );
  }
}

export default StatistikUebersicht;
