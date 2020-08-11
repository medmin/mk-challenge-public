import React from "react";
import { Flex, SvgWrapper } from "src/widgets/styled-parts";
import styled from "styled-components";
import { TOOLTIP_POSITIONS } from "./css-vars";

export const FooterWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  border-top: 1px solid lightgrey;

  flex-wrap: wrap;
`;

const FooterItemWrapper = styled(Flex)`
  height: 100%;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: #597ef7;
    font-weight: 700;
  }
`;

const ItemLabel = styled(Flex)`
  font-size: 18px;

  @media only screen and (max-device-width: 736px) {
    display: none;
  }
`;

export function FooterItem(props) {
  return (
    <FooterItemWrapper
      onClick={props.onClick}
      aria-label={props.ariaLabel}
      data-balloon-pos={TOOLTIP_POSITIONS.UP}
    >
      <SvgWrapper svgSize="60%">{props.icon}</SvgWrapper>
      <ItemLabel>{props.label}</ItemLabel>
    </FooterItemWrapper>
  );
}
