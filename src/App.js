import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./pages/newUser";
import LoginComponent from "./pages/loginComponent";
import CalendarComp from "./pages/Calendar";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Signup} />
        <Route exact path="/loginComponent" component={LoginComponent} />
        <Route exact path="/calendar" component={CalendarComp} />
      </div>
    </Router>
  );
}

export default App;
