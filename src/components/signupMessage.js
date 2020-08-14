import React from "react";
import styled from "styled-components";
// layout
import { colors } from "./layout/constants";

const SignupMessage = ({ message, token }) => {
  return (
    <MessageStyled>
      <p className="bold">{message} You have completed step 1.</p>
      <p>This is your application token:</p>
      <p className="bold purple">{token}</p>
    </MessageStyled>
  );
};

const MessageStyled = styled.section`
  .bold {
    font-family: "ObjektivMk2W03-Medium";
  }

  .purple {
    color: ${colors.primaryColor};
    word-wrap: break-word;
  }
`;

export default SignupMessage;
