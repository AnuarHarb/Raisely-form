import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Meterial UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
// layout
import { colors } from "./layout/constants";
// Services
import isEmailUnique from "../services/emailValidation";
import signup from "../services/signup";

const SignupForm = ({ setFormStatus, setMessage, setToken }) => {
  // Inputs Values
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Errors state
  const [emailError, setEmailError] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [formError, setFormError] = useState(false);

  // Reset Errors on input value change
  useEffect(() => {
    setEmailError(false);
  }, [email]);

  useEffect(() => {
    setPasswordError(false);
  }, [password, confirmPassword]);

  useEffect(() => {
    setFormError(false);
    if (name && lastName && email && password && confirmPassword) {
      if (!emailError && !passwordError) {
        setValidForm(true);
        return;
      }
    }
    setValidForm(false);
  }, [
    name,
    lastName,
    email,
    password,
    confirmPassword,
    emailError,
    passwordError,
  ]);

  // Validations
  const validateEmail = async () => {
    // validate email structure
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError(true);
      setEmailMessage("Invalid email format");
      return;
    }
    // Validate uniqueemail
    const response = await isEmailUnique(email);
    if (response.data.status === "EXISTS") {
      setEmailError(true);
      setEmailMessage("Email already in use");
      return;
    }
    setEmailMessage("");
  };

  const validatePasswords = (passwordInput) => {
    if (passwordInput === "first" && confirmPassword === "") {
      return;
    } else if (password !== confirmPassword) {
      setPasswordError(true);
    }
  };

  const submitForm = async () => {
    try {
      const response = await signup({
        firstName: name,
        lastName,
        email,
        password,
      });

      if (response.errors) {
        setFormError(true);
        return;
      }

      setFormStatus("filled");
      setMessage(response.message);
      setToken(response.token);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <FormStyled>
      <TextField
        id="name"
        helperText=""
        label="Name"
        onChange={(event) => setName(event.target.value)}
        size="small"
        variant="outlined"
        value={name}
      />
      <TextField
        id="lastName"
        label="Last Name"
        onChange={(event) => setLastName(event.target.value)}
        variant="outlined"
        size="small"
      />
      <TextField
        id="email"
        label="Email"
        onChange={(event) => setEmail(event.target.value)}
        onBlur={(event) => validateEmail()}
        variant="outlined"
        error={emailError}
        helperText={emailMessage}
        size="small"
      />
      <div></div>
      <TextField
        id="password"
        label="Password"
        onChange={(event) => setPassword(event.target.value)}
        onBlur={(event) => validatePasswords("first")}
        variant="outlined"
        error={passwordError}
        helperText={passwordError ? "Password don´t match" : ""}
        type="password"
        size="small"
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        onChange={(event) => setConfirmPassword(event.target.value)}
        onBlur={(event) => validatePasswords("second")}
        variant="outlined"
        error={passwordError}
        type="password"
        size="small"
      />
      <div className="send-button">
        <Button
          onClick={() => submitForm()}
          size="large"
          disabled={!validForm}
          style={{
            backgroundColor: !validForm ? "lightgray" : colors.primaryColor,
            color: "white",
            margin: "0 10px",
          }}
          variant="contained"
        >
          Send
        </Button>
        <a href="https://github.com/AnuarHarb/Raisely-form" target="_blank">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </div>
      <p className="error">
        {formError ? "Somthing went wrong, try again later" : ""}
      </p>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  .send-button {
    grid-column: 1/3;
    text-align: center;
  }

  .error {
    color: red;
  }
`;

export default SignupForm;
