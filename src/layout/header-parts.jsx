import React from "react";
import styled from "styled-components";
import LogoSvg from "img/logo.svg";
import { SvgWrapper } from "src/widgets/styled-parts";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0px 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #40a9ff0f;

  @media only screen and (max-device-width: 736px) {
    padding: 5px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: 100%;
  align-items: 100%;
`;

const Xbaike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;

  ::after {
    content: "X-Baike";
    font-weight: 700;
    font-style: italic;
  }
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <SvgWrapper>
        <LogoSvg />
      </SvgWrapper>
      <Xbaike />
    </LogoWrapper>
  );
};
