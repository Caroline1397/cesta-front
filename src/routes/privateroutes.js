import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Administrar from '../pages/Administrar';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/administrar" component={Administrar} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
