import React from "react";
import { Field, reduxForm } from "redux-form";

class VergangeneEingaben extends React.Component {
  render() {
    return <div>VergangeneEingaben</div>;
  }
}

export default reduxForm({
  form: "dailyForm",
})(VergangeneEingaben);
