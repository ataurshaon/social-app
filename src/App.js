import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Error from './components/Error/Error'
import Profile from './components/Profile/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  // const isLoggedIn = true; //for redirection after login

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/login"> //Redirection after login
            {isLoggedIn ? <Redirect to="/profile" /> : <Home />}
            </Route> */}
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/profile" component={Profile} />

          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
