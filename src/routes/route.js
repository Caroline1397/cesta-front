import React from "react";
import { Route, Redirect } from 'react-router-dom';

import {
    isAuthenticated,
    userLocal,
    isTokenExpired,
    logout,
  } from '../services/auth';
  

  export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    Administrador = false,
    ...rest
  }) {
    console.log('expirado', isTokenExpired());
  
    if (!isAuthenticated() && isPrivate) {
      return <Redirect to="/login" />;
    }
  
    if (isTokenExpired()) {
      logout();
      return <Redirect to="/login" />;
    }
  
    if (isAuthenticated() && !isPrivate) {
      return <Redirect to="/administrar" />;
    }
    if (isAuthenticated() && isPrivate && Administrador && !userLocal().isAdmin) {
      return <Redirect to="/administrar" />;
    }
    return (
      <>
        {isPrivate}
        <Route {...rest} component={Component} />
      </>
    );
  }
   
  
  

