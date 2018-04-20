import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onAddProduct = this.onAddProduct.bind(this);
  // }
  onClick() {
    console.log('App component!');
  }
  onAddProduct = () => {
    console.log(this.refs.name.value);
  }
  render() {
    var products = [
      {
        id: 1,
        name: 'Apple Iphone 6 Plus 16GB',
        price: 15000000,
        image: 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone-7-plus/apple-iphone-7-plus-red-gallery-img-1.jpg',
        status: true
      },
      {
        id: 2,
        name: 'Apple Iphone 5 S',
        price: 15000000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/60546/iphone-5s-16gb-7-400x460.png',
        status: true
      },
      {
        id: 3,
        name: 'Apple Iphone 4 S',
        price: 15000000,
        image: 'https://drop.ndtv.com/TECH/product_database/images/530201374810PM_635_iPhone_4s.png',
        status: true
      },
    ];
    let elments = products.map((product, index) => {
      let result = '';
      if (product.status)
        result = <Product
          key={product.id}
          price={product.price}
          image={product.image}
        >
          {product.name}
        </Product>
      return result;
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Title</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Thêm Sản Phẩm</h3>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label>Tên Sản Phẩm</label>
                      <input type="text" className="form-control" ref = "name" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick = { this.onAddProduct }>Lưu</button>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elments}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-warning" onClick={this.onClick}>
                  Click Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
