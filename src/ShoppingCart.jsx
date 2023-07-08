import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  //executes when the component is mounted
  constructor(props) {
    console.log("constructor - ShoppingCart");
    super(props); //calling super class's constructor
    //init state
    this.state = {
      products: [],
    };
  }

  render() {
    console.log("render - ShoppingCart");

    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy now!</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  //Executes after constructor and render method (including lifecycle of child compotents,if any)of current component
  componentDidMount = async () => {
    //Fetch data from the JSON Server
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    //Converts to JS Object
    var prods = await response.json();
    //Sets the prods array to the prodcuts state.
    this.setState({ products: prods });
  };
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  componentDidCatch(error, info) {
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }
  //executes when user clicks the + button
  handleIncrement = (product, maxValue) => {
    //gets index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].Quantity < maxValue) {
      //increment by 1
      allProducts[index].Quantity++;

      //if there's an active error message, remove it.
      document.getElementById(allProducts[index].id).className = "invisible";
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    //gets index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].Quantity > 0) {
      allProducts[index].Quantity--;
      document.getElementById(allProducts[index].id).className = "invisible";
    } else {
      document.getElementById(allProducts[index].id).className =
        "text-danger m-1";
    }

    this.setState({ products: allProducts });
  };

  //Executes when the user clicks on delete (X) button in the product component
  handleDelete = (product) => {
    console.log("clicked x");
    //gets index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure you want to delete this product?")) {
      //deletes product
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
