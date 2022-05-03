import { jsx } from "@emotion/react";
import React from "react";
import { Field, reduxForm } from "redux-form";

class VergangeneEingaben extends React.Component {
  renderAccordionItem() {
    const tmpEntries = JSON.parse(localStorage.getItem("eintraege") || "[]");
    let output;

    for (let i = 0; i < tmpEntries.entries.length; i++) {
      output += this.createAccordionItem(i);
    }

    return output;
  }

  createAccordionItem(i) {
    const tmpEntryKey = `tmpEntries.eintrag_${i}`;
    const tmpEntries = JSON.parse(localStorage.getItem("eintraege") || "[]");
    const tmpEntry = tmpEntries.entries[i];

    console.log(tmpEntry.eintrag_1.date);

    return (
      <div className="accordion-item">
        <h2>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Deine Eingabe vom {tmpEntry.eintrag_1.date}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Hier siehst Du eine Liste von all deinen Eingaben:</h2>

        <div className="accordion accordion-flush">
          {this.renderAccordionItem()}
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "dailyForm",
})(VergangeneEingaben);
