import React, { Component } from "react";
let photoArray = [
  "https://picsum.photos/id/1018/60",
  "https://picsum.photos/id/1003/60",
  "https://picsum.photos/id/1002/60",
  "https://picsum.photos/id/1015/60",
  "https://picsum.photos/id/1019/60",
];
export default class CustomersList extends Component {
  state = {
    pageTitle: "Orders:",
    orderCount: 5,
    customers: [
      {
        id: 0,
        name: "Amin",
        number: "50000000",
        Adress: { Street: "Flower", Number: "18" },
        photo: photoArray[0],
      },
      {
        id: 1,
        name: "Selim",
        number: null,
        Adress: { Street: "Sunshine", Number: "01" },
        photo: photoArray[1],
      },
      {
        id: 2,
        name: "Youssef",
        number: "52000000",
        Adress: { Street: "Palm", Number: "11" },
        photo: photoArray[2],
      },
      {
        id: 3,
        name: "Yahya",
        number: "52030000",
        Adress: { Street: "Sunflower", Number: "33" },
        photo: photoArray[3],
      },
      {
        id: 4,
        name: "Kamel",
        number: "90000000",
        Adress: { Street: "Sunflower", Number: "33" },
        photo: photoArray[4],
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
          {this.state.pageTitle}
          <span className="m-2">{this.state.orderCount}</span>
          <button className="btn" onClick={this.onRefreshClick}>
            Reset
          </button>
          <button className="btn m-2" onClick={this.onOrderClick}>
            Add to order count{" "}
          </button>
        </h4>
        <table className="table">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Customer Name</th>
            <th>Number</th>
            <th>Street</th>
            <th>Number</th>
          </tr>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  //Executes when the refresh button is clicked.
  onRefreshClick = () => {
    console.log("User clicked refresh.");
    this.setState({ orderCount: 0 });
  };
  //Adds 1 to the order when Order button is clicked.
  onOrderClick = () => {
    console.log("User ordered");
    this.setState((prevState) => ({ orderCount: prevState.orderCount + 1 }));
  };
  //Render phone number if available
  getPhoneToRender = (number) => {
    return number == null ? "No phone" : number;
  };

  //Renders the customer rows in the tbody
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer photo"></img>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.number)}</td>
          <td>{cust.Adress.Street}</td>
          <td>{cust.Adress.Number}</td>
        </tr>
      );
    });
  };
  // onChangePhotoClick = (cust, index) => {
  //console.log("User has clicked Change Photo.");

  // let custArr = [...this.state.customers]; // Create a copy of the customers array
  //const photoArrayLength = photoArray.length;
  // custArr[index].photo = photoArray[(index + 1) % photoArrayLength];
  // this.setState({ customers: custArr }); // Update the state with the modified array
  // };
}
