import React from "react";
import styled from "styled-components";
// components
import SignupForm from "./signupForm";
// layout
import { colors } from "./layout/constants";

const RolApplication = () => {
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
      <h4>Step 1</h4>
      <p>Fill out the first fancy form</p>
      <SignupForm />
      <h4>Step 2</h4>
      <p>
        Fill out the application form (there’s a few other questions in there)
      </p>
      <p>
        We are accepting applications on a rolling basis until we find the right
        person.
      </p>
      <a
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

  h4 {
    font-family: "ObjektivMk2W03-Medium";
    font-sie: 1em;
  }
`;

export default RolApplication;
