import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Home from './paginas/home';
import Homee from './paginas/homee'


function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Homee}/>
        
       
    </Switch>
  );
}

export default Routes;
