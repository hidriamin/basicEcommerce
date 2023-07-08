import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatchPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact Component={Login} />
            <Route path="/cart" exact Component={ShoppingCart} />
            <Route path="/customers" exact Component={CustomersList} />
            <Route path="/dashboard" exact Component={Dashboard} />
            <Route path="*" Component={NoMatchPage} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
