import React from 'react';

import './AddProduct.scss'
import {Col} from "react-bootstrap";

function AddProduct(props) {
  return(
    <Col id="add-product-item" className="col-6 col-md-4 col-lg-3 product-item">
      <div className="add-product d-flex justify-content-center ">
        <span className="align-self-center">Add Product</span>
      </div>
      {/*have to be link*/}
      <div className="add-product-hover-link d-flex justify-content-center align-content-center">
        <span className="align-self-center">+</span>
      </div>
    </Col>
  )

}

export default AddProduct;
