import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

const WrapperStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 5px;

  @media (max-width: 1200px) {
    padding: 0 25px;
  }
`;

export default Wrapper;
