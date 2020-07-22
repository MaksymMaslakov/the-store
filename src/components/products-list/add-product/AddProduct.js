import React from 'react';
import { Link } from 'react-router-dom'
// import { withRouter } from "react-router-dom"

import './AddProduct.scss'
import {Col} from "react-bootstrap";

function AddProduct(props) {
  return(
    <Col id="add-product-item"
         className="col-6 col-md-4 col-lg-3 product-item">
      <div className="add-product d-flex justify-content-center ">
        <span className="align-self-center">Add Product</span>
      </div>
      {/*have to be link*/}
      <Link to={'/products/create'} className="add-product-hover-link d-flex justify-content-center align-content-center">
        <span className="align-self-center">+</span>
      </Link>
    </Col>
  )

}

export default AddProduct;
