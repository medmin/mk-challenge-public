import React, { Suspense, lazy } from "react";
import { GlobalStyles } from "./global-styles";

const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));

export function Layout(props) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Suspense fallback={<div />}>
        <Header />
      </Suspense>
      {props.children}
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </React.Fragment>
  );
}
