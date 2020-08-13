import React from "react";
import styled from "styled-components";
// components
import Wrapper from "./layout/wrapper";
import Header from "./layout/header";
import Footer from "./layout/footer";
import RolDescription from "./rolDescription";
import RolApplication from "./rolApplication";

function Signup() {
  return (
    <SignupStyled>
      <Header />
      <Wrapper>
        <RolDescription name="Front-end Engineer" />
        <RolApplication />
      </Wrapper>
      <Footer />
    </SignupStyled>
  );
}

const SignupStyled = styled.section`
  p {
    font-family: "ObjektivMk2W03-Light";
    font-size: 15px;
    line-height: 24px;
    .bold {
      font-family: "ObjektivMk2W03-Medium";
    }
  }
`;

export default Signup;
