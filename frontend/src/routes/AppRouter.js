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
import CreateCourse from "../components/CreateCourse";
import CreateModule from "../components/CreateModule";
import CreateVideo from "../components/CreateVideo";
import TermsAndCondition from "../components/TermsAndCondition";
import ViewCourses from "../components/ViewCourses";
import SingleCourse from "../components/SingleCourse";
import VideoPage from "../components/VideoPage";
import LogoutPage from "../components/LogoutPage";
import Authenticated from "../components/Authenticated";

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
          <Authenticated>
            <Route path="/blog" component={Blog} exact={true} />
            <Route path="/course" component={CreateCourse} exact={true} />
            <Route path="/module" component={CreateModule} exact={true} />
            <Route path="/video" component={CreateVideo} exact={true} />
            <Route path="/terms" component={TermsAndCondition} exact={true} />
            <Route path="/courses" component={ViewCourses} exact={true} />
            <Route path="/course1" component={SingleCourse} exact={true} />
            <Route path="/video1" component={VideoPage} exact={true} />
          </Authenticated>
          <Route path="/logout" component={LogoutPage} exact={true} />
          {/* <Route path="/signup" component={SignupFormPage} exact={true} />
          <Route path="/signin" component={LoginForm} /> */}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
