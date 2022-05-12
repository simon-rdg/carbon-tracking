import { jsx } from "@emotion/react";
import React from "react";
import { Field, reduxForm } from "redux-form";
import Accordion from "react-bootstrap/Accordion";
import { DateRangeOutlined } from "@mui/icons-material";

class VergangeneEingaben extends React.Component {
  state = {
    eingaben: JSON.parse(localStorage.getItem("eintraege") || "[]"),
  };

  renderItemInput(date) {
    // Codesample 2 (?)
    for (let i = 0; i < this.state.eingaben.entries.length; i++) {
      if (this.state.eingaben.entries[i].date === date) {
        return (
          <div>
            <h4>{this.state.eingaben.entries[i].realEintrag.title}</h4>
            <p>{this.state.eingaben.entries[i].realEintrag.description}</p>
            <div>
              <ul>{this.renderCheckboxEntries(i)}</ul>
            </div>
          </div>
        );
      }
    }
  }

  renderCheckboxEntries(j) {
    let checkBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < checkBoxes.length; i++) {
      if (this.state.eingaben.entries[j].realEintrag.checkBicycle === true) {
        checkBoxes[0] = 1;
      }
      if (
        this.state.eingaben.entries[j].realEintrag.checkPublicTransport === true
      ) {
        checkBoxes[1] = 1;
      }
      if (this.state.eingaben.entries[j].realEintrag.checkCar === true) {
        checkBoxes[2] = 1;
      }

      if (this.state.eingaben.entries[j].realEintrag.checkFlight === true) {
        checkBoxes[3] = 1;
      }
      if (this.state.eingaben.entries[j].realEintrag.checkMeat === true) {
        checkBoxes[4] = 1;
      }
      if (
        this.state.eingaben.entries[j].realEintrag.checkMilkProducts === true
      ) {
        checkBoxes[5] = 1;
      }
      if (this.state.eingaben.entries[j].realEintrag.checkFries === true) {
        checkBoxes[6] = 1;
      }
      if (this.state.eingaben.entries[j].realEintrag.checkChocolate === true) {
        checkBoxes[7] = 1;
      }
      if (this.state.eingaben.entries[j].realEintrag.checkPurchase === true) {
        checkBoxes[8] = 1;
      }
    }

    const message = [
      "Du bist Fahrrad gefahren",
      "Du bist mit dem ÖPNV gefahren",
      "Du bist mit dem Auto gefahren",
      "Du bist mit dem Flugzeug geflogen",
      "Du hast Fleisch gegessen",
      "Du hast Milchprodukte zu dir genommen",
      "Du hast Pommes gegessen",
      "Du hast Schokolade gegessen",
      "Du warst einkaufen",
    ];
    let HitCheckBoxes = [];
    let count = 0;
    for (let k = 0; k < checkBoxes.length; k++) {
      if (checkBoxes[k] === 1) {
        HitCheckBoxes[count] = [message[k]];
        count += 1;
      }
    }

    let keys = [];
    for (let i = 0; i < 9; i++) {
      keys[i] = i;
    }

    return HitCheckBoxes.map((checkBox) => (
      <li key={keys.pop()}>{checkBox}</li>
    ));
  }

  renderAccordionItemNew() {
    let keys1 = [];
    for (let i = 0; i < this.state.eingaben.entries.length; i++) {
      keys1[i] = i;
    }

    let keys2 = [];
    for (let i = 0; i < this.state.eingaben.entries.length; i++) {
      keys2[i] = i;
    }

    let dates = [];
    for (let i = 0; i < this.state.eingaben.entries.length; i++) {
      dates[i] = this.state.eingaben.entries[i].date;
    }

    const output = dates.map((date) => (
      <Accordion.Item key={keys1.pop()} eventKey={keys2.pop()}>
        <Accordion.Header>Dein Eintrag vom {date}</Accordion.Header>
        <Accordion.Body>{this.renderItemInput(date)}</Accordion.Body>
      </Accordion.Item>
    ));

    return output;
  }

  render() {
    return (
      <div>
        <h1>Hier siehst Du eine Liste von all deinen Eingaben:</h1>
        <br></br>
        <div>
          <Accordion defaultActiveKey="0">
            {this.renderAccordionItemNew()}
          </Accordion>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "dailyForm",
})(VergangeneEingaben);
