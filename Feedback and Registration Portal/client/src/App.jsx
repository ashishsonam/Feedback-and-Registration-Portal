import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feedback from "./Feedback/Feedback";
import Home from "./Home";
import Registration from "./Registration/Registration";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import "./App.css";
import Approve from "./ApproveRegistrations/Approve";
import StudentDetails from "./ApproveRegistrations/StudentDetails";
import ShowFeedback from "./ShowFeedback/ShowFeedback";
import FeedbackDetails from "./ShowFeedback/ShowFeedbackDetails";
import AddCourses from "./AddCourses/AddCourses";
import AddFaculty from "./AddFaculty/AddFaculty";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          <Route path="/feedback">
            <Navbar />
            <Feedback />
          </Route>
          <Route path="/registration">
            <Navbar />
            <Registration />
          </Route>
          <Route path="/approve">
            <Navbar />
            <Approve />
          </Route>
          <Route path="/studentDetails">
            <Navbar />
            <StudentDetails />
          </Route>
          <Route path="/showFeedback">
            <Navbar />
            <ShowFeedback />
          </Route>
          <Route path="/showFeedbackDetails">
            <Navbar />
            <FeedbackDetails />
          </Route>
          <Route path="/addCourses">
            <Navbar />
            <AddCourses />
          </Route>
          <Route path="/addFaculty">
            <Navbar />
            <AddFaculty />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
