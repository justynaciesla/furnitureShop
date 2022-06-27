import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/home";
import Products from "../views/products";
import Cart from "../views/cart";
import SingleProduct from "../views/singleProduct";
import Contact from "../views/contact";
import Login from "../views/login";
import Signup from "../views/signup";
import Checkout from "../views/checkout";
import MainTemplate from "../templates/MainTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.singleProduct} component={SingleProduct} />
          <Route path={routes.products} component={Products} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.contact} component={Contact} />
          <Route path={routes.cart} component={Cart} />
          <Route path={routes.signup} component={Signup} />
          <Route path={routes.checkout} component={Checkout} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
