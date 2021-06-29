import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import MainNav from "./components/navigation/MainNav";
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Account from "./components/account/Account";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";

function App() {
  library.add(faUser, faShoppingCart, faHeart);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainNav />
        <Route exact path="/" component={Home}/>
        <Route path="/account" component={Account}/>
        <Route path="/category" component={Category}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:productId" component={Product}/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
