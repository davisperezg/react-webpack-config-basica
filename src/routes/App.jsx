import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  CheckOut,
  Information,
  Payment,
  Success,
  NotFound,
} from "../containers";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/checkout/information" component={Information} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route exact path="/checkout/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
