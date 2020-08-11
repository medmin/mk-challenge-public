import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "src/constants";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  return (
    <Container>
      {Object.keys(ROUTES).map((routeName, idx) => (
        <Link to={ROUTES[routeName]} key={`${routeName}-${idx}`}>
          {routeName}
        </Link>
      ))}
    </Container>
  );
}
