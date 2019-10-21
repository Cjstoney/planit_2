import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './pages/newUser'
import LoginComponent from './pages/loginComponent';
import Calendar from './components/calendar/Calendar'



function App() {
  return (
    <Router >
      <div className="App">
        <Route exact path='/' component={Signup} />
        <Route exact path='/loginComponent' component={LoginComponent} />
        <Route exact path='/calendar' component={Calendar} />
      
      
    </div>
    </Router>
  );
}

export default App;
