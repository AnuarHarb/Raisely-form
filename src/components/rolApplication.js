import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
// components
import SignupForm from "./signupForm";
import SignupMessage from "./signupMessage";
// layout
import { colors } from "./layout/constants";

const RolApplication = () => {
  const [formStatus, setFormStatus] = useState("empty");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  return (
    <ApplicationStyled>
      <h3 className="section-title">How to apply:</h3>
      <p>
        You’ve got this far! We really want to hear from you.{" "}
        <span className="bold">
          We do applications a little differently here, so we don’t want your
          resume and cover letter.
        </span>
      </p>
      <p>Here’s how to apply:</p>
      <h4 className="step-title">Step 1</h4>
      {formStatus === "empty" ? (
        <>
          <p>Fill out the first fancy form</p>
          <SignupForm
            setFormStatus={setFormStatus}
            setMessage={setMessage}
            setToken={setToken}
          />
        </>
      ) : (
        <SignupMessage message={message} token={token} />
      )}
      <h4 className="step-title">Step 2</h4>
      <p>
        Fill out the application form (there’s a few other questions in there)
      </p>
      <p>
        We are accepting applications on a rolling basis until we find the right
        person.
      </p>
      <a
        className="apply-button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeejYN_p2b--nWGwkKEqLBzafWLlvtWL1Q66ICufVLKlzDTfQ/viewform"
        target="_blank"
      >
        Apply Now
      </a>
    </ApplicationStyled>
  );
};

const ApplicationStyled = styled.section`
  max-width: 600px;

  .section-title {
    color: ${colors.primaryDark};
    font-family: "ObjektivMk2W03-Bold";
    font-size: 1.5em;
    margin: 24px 0 0 0;
  }

  .step-title {
    font-family: "ObjektivMk2W03-Medium";
    font-sie: 1em;
  }

  .apply-button {
    color: white;
    background: ${colors.primaryColor};
    border-radius: 24px;
    border-bottom-left-radius: 3px;
    box-shadow: inset 0 0 0 2px #6138d8, 0 0 20px rgba(124, 56, 216, 0.4);
    display: inline-block;
    font-family: "ObjektivMk2W03-Medium";
    font-size: 14px;
    margin: 10px 0;
    padding: 15px;
    text-decoration: none;

    :hover {
      background: linear-gradient(
        25deg,
        ${colors.primaryColor},
        ${colors.primaryLight}
      );
    }
  }
`;

export default RolApplication;
