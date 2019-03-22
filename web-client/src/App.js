/*App.js is going to be a router dispatcher*/
import React from "react"
import { Route } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import UserPage from "./components/pages/UserPage"
import SignUpPage from "./components/pages/SignUpPage"
import './App.css';
const App = () => (
    <div>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/user"} exact component={UserPage} />
        <Route path={"/signup"} exact component={SignUpPage} />
    </div>
);

export default App;