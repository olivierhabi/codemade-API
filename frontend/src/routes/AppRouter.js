import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          {/* <Route path="/signup" component={SignupFormPage} exact={true} />
          <Route path="/signin" component={LoginForm} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
