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
import LoginPage from "./pages/LoginPage";
import Chat from "./pages/Chat";
import Change from "./pages/Change";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/beginner" component={Beginner} />
          <Route exact path="/system" component={System} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <LoggedInRoute exact path="/" component={LoginPage} redirectTo="/home" />
          <LoggedInRoute exact path="/room" component={Room} />
          <LoggedInRoute exact path="/loginpage" component={LoginPage} />
          <LoggedInRoute exact path="/chat/:selectUid" component={Chat} />
          <LoggedInRoute exact path="/change" component={Change} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

 
export default App;