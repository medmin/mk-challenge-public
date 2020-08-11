import React, { Suspense, lazy, useEffect } from "react";
import { Layout } from "src/layout/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "src/constants";
import { connect } from "react-redux";
import * as appActions from "src/redux/app/app-actions";

const HomePage = lazy(() => import("src/homepage"));
const NotFound = lazy(() => import("./not-found"));

function AppComponent(props) {
  useEffect(() => {
    props.onPageLoading(history);
  }, []);

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading.....</div>}>
          <Switch>
            <Route exact path={ROUTES.HOMEPAGE} component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onPageLoading: () => dispatch(appActions.onPageLoading()),
  };
}

export const App = connect(null, mapDispatchToProps)(AppComponent);
