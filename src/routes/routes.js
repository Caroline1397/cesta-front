import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from '../pages/Home';
import {PrivateRoute} from '../routes/privateroutes';

export default function Routes() {
    return (
        <BrowserRouter>
         <Route exact path="/" component={Login} />
         <Route path="/cadastro" component={Cadastro} />
         <PrivateRoute path="/home" component={Home} />
        </BrowserRouter>
    );
}


