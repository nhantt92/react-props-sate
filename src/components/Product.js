import React, { Component } from 'react';

class Product extends Component {
  // constructor(props) {
  //   super(props);
  //   //this.onAddToCart = this.onAddToCart.bind(this);
  // }
  onAddToCart() {
    alert(this.props.children + '-' + this.props.price);
  }
  onAddToCart2 = () => {
    alert(this.props.children + '-' + this.props.price);
  }
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={ this.props.image } alt="" />
            <div className="caption">
              <h3>
                { this.props.children }
              </h3>
              <p>
                { this.props.price }
              </p>
              <p>
                <a className= "btn btn-success" onClick = { this.onAddToCart2 }> Mua Ngay</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Product;
