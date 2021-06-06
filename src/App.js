import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Sidebar from "./sidebar";
import { BrowserRouter as Router, Redirect, Route, Switch, useParams } from "react-router-dom";
import Post from "./Post Page";
import AboutMe from "./About Me Page";
import NewPosts from "./New Post Page";
import  Login from "./login page";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Header/>
                    <Main/>
                    <Sidebar/>

                </div>
                <Switch>

                    <Route path="/post/:id" component={Post}></Route>
                    <Route path="/AboutMe" component={AboutMe}></Route>
                    <Route path="/NewPosts" component={NewPosts}></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route path="/" component={Main}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
