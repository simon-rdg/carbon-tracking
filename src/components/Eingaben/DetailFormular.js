import React from "react";
import { Field, reduxForm } from "redux-form";

class DetailFormular extends React.Component {
  render() {
    return <div>DetailFormular</div>;
  }
}

export default reduxForm({
  form: "dailyForm",
})(DetailFormular);
