import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/*Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/*Email ends */}
        {/*oasswird starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/*password ends */}
        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
  //Execute when user tries to login
  onLoginClick = async () => {
    console.log(this.state);
    //Gets login info from database IF the email and password written by the user match with the ones on the database.
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      console.log("success");
      this.setState({
        message: <span className="text-success">Success!</span>,
      });
    } else {
      console.log("Failed login");
      this.setState({
        message: (
          <span className="text-danger">
            Failed to log in! please try again with a different Email and/or
            password.
          </span>
        ),
      });
    }
  };
}
