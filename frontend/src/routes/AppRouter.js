import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import SignupPage from "../components/SignupPage";
import BackTop from "../components/BackTop";
import NavBar from "../components/NavBar";
import Signin from "../components/Signin";
import ForgotPassword from "../components/ForgotPassword";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <BackTop />
      <NavBar />
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/signup" component={SignupPage} exact={true} />
          <Route path="/signin" component={Signin} exact={true} />
          <Route path="/forgot" component={ForgotPassword} exact={true} />
          <Route path="/blog" component={Blog} exact={true} />
          {/* <Route path="/signup" component={SignupFormPage} exact={true} />
          <Route path="/signin" component={LoginForm} /> */}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
