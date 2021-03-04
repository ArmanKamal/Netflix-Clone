import React, { useState, useContext } from "react";
import { Form } from "../components";
import { useHistory } from "react-router-dom";
import FooterContainer from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Register() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const isInvalid = firstName === "" || password === "" || email === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5 + 1),
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setfirstName("");
        setpassword("");
        setemail("");
        seterror(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={email}
              type="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/login">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
