import React from "react";
import { compose, withHandlers } from "recompose";
import { withStyles } from "@material-ui/core/styles";

import { guest, getAllFormInput } from "../../_helpers/index";
import { signInUser } from "../../actions/userAction";

import AuthPending from "./AuthPending";
import SignInForm from "./SignInForm";

const styles = theme => {
  return {
    LocalSignIn: {
      color: "white",
      marginBottom: 8 * 3,
      fontSize: "2.125rem",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.176471
    }
  };
};

const enhance = compose(
  withStyles(styles),
  withHandlers({
    handleSignIn: props => evt => {
      evt.preventDefault();
      const userInput = getAllFormInput(evt.currentTarget);
      signInUser(userInput)(props.dispatch);
    },
    handleGuestMode: props => evt => {
      evt.preventDefault();
      signInUser(guest)(props.dispatch);
    }
  })
);

const SwitchComponent = enhance(
  ({ pendingSignIn, signedIn, handleSignIn, handleGuestMode }) => {
    switch (true) {
      case pendingSignIn:
        return <AuthPending />;
      case signedIn:
        return (
          <div className="SignInPage d-flex flex-column justify-content-center align-items-center w-100">
            Signed In!
          </div>
        );

      default:
        return (
          <SignInForm
            onSignInClick={handleSignIn}
            onGuestModeClick={handleGuestMode}
          />
        );
    }
  }
);

const LocalSignIn = enhance(props => (
  <div className="LocalSignIn">
    <h1 className={props.classes.LocalSignIn}>ShallEat Account</h1>
    <SwitchComponent {...props} />
  </div>
));
export default LocalSignIn;
