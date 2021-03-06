import React from "react";

import "./sign-in-up.styles.scss";
import SignIn from "../../copponents/sign-in/sign-in.component";
import SignUp from "../../copponents/sign-up/sign-up.component";

const SignInUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUpPage;
