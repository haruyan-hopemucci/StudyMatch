import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthService";
import LoggedInRoute from "./components/LoggedInRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Room from "./pages/Room";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Beginner from "./pages/Beginner";
import System from "./pages/System";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import LoginPage from "./pages/LoginPage";
import Chat from "./pages/Chat";

// routing (react-router-dom)
// URLのエンドポイント(/xxxx)によって表示するページを変える
//npm i react-router-dom

// http://loaclhost:3000         の時Room
// http://loaclhost:3000/login   の時Login
// http://loaclhost:3000/signup  の時Signup

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/beginner" component={Beginner} />
          <Route exact path="/system" component={System} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <LoggedInRoute exact path="/room" component={Room} />
          <LoggedInRoute exact path="/loginpage" component={LoginPage} />
          <LoggedInRoute exact path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
