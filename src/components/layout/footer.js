import React from "react";
import styled from "styled-components";
// layout
import { colors } from "./constants";
// assets
import Waves from "../../assets/images/waves";

const Footer = () => {
  return (
    <FooterStyled>
      <Waves
        colorOne={colors.footerOne}
        colorTwo={colors.footerTwo}
        colorThree={colors.footerThree}
        colorFour={colors.footerFour}
        colorFive={colors.footerFive}
        colorSix={colors.footerSix}
      />
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  height: 600px;
  overflow: hidden;
  width: 100%;
  z-index: 0;
`;

export default Footer;
