import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Post from "./components/Post";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
//import Timeline from "./components/Timeline";
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
          <div className="container">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="nav-link">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/timeline" className="nav-link">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              <h1 className="mtop text-danger">Error 404, Not Found!</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

/*
<nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#sign-up" className="nav-link">
                SignUp
              </a>
            </li>
            <li className="nav-item">
              <a href="#login" className="nav-link">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#profile" className="nav-link">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="#timeline" className="nav-link">
                Timeline
              </a>
            </li>
          </ul>
        </div>
      </nav> */
