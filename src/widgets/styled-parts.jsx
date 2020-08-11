import styled from "styled-components";

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  width: ${(props) => props.size || "40px"};
  height: ${(props) => props.size || "40px"};

  :hover {
    cursor: pointer;
  }

  svg {
    width: ${(props) => props.svgSize || "100%"};
    height: ${(props) => props.svgSize || "100%"};
  }

  svg path {
    fill: ${(props) => props.svgFill};
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
`;
