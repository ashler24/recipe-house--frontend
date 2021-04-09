import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Header from './layout/header';
import Login from './login/login';
import ShowRecipe from './recipe/showRecipe';

const Main = () => (
    <>
        <Header />
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/getRecipe">
                <ShowRecipe />
            </Route>
            <Route to="/" exact>
                <Home />
            </Route>
        </Switch>
    </>
);


export default Main;