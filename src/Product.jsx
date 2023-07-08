import React, { Component } from "react";
export default class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span className="pull-right hand-icon">
                <i
                  className="fa fa-times"
                  onClick={() => this.props.onDelete(this.props.product)}
                ></i>
              </span>
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.Price}</div>
          </div>
          {/* Card body ends here */}
          <div className="card-footer">
            <div className="float-start">
              <span>{this.state.product.Quantity}</span>
              <div className="btn-group m-1">
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.onIncrement(this.state.product, 10)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.onDecrement(this.state.product)}
                >
                  -
                </button>
              </div>
              <h7 className="invisible" id={this.props.product.id}>
                You can't buy less than zero items!
              </h7>
            </div>
            {/*float start ends here */}
            <div className="float-end  m-1">{this.props.children}</div>
          </div>
          {/* card-footer ends here */}
        </div>
      </div>
    );
  }
  componentWillUnmount() {}
}
