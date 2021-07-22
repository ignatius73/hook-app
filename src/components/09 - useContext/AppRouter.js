import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/about" component={ AboutScreen} />
                        <Route exact path="/login" component={ LoginScreen} />
                        <Route exact path="/" component={ HomeScreen} />
                        {/* Path por defecto */}
                        <Redirect to="/" />
                    </Switch>
                </div>

            </Router>
        </div>
    )
}
