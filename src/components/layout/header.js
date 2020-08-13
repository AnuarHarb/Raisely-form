import React from "react";
import styled from "styled-components";
// assets
import logo from "../../assets/logos/raisely.png";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-wrapper">
        <img src={logo} alt="raisely logo" />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: flex-start;

  .header-wrapper {
    margin: 0 25px;
  }

  img {
    height: 28px;
  }
`;

export default Header;
