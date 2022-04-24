import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";

class JSON_Auth extends React.Component {
  onSignInClick = () => {
    signIn();
  };

  onSignOutClick = () => {
    // this.auth.signOut();
  };

  renderAuthButton() {
    console.log(this.props);

    if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>Abmelden</button>;
    } else {
      return <button onClick={this.onSignInClick}>Anmelden</button>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(JSON_Auth);
// export default JSON_Auth;
