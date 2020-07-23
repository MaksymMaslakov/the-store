import React from 'react';

import ProductInfo from "./product-info/ProductInfo";
import { Col } from "react-bootstrap";
import './ProductItem.scss';

function ProductItem(props) {

  const {
    photo,
    description
  } = props.product;



  return (
    <Col className="col-6 col-md-4 col-lg-3 product-item">
      <div>
        <img className="item-product-img" src={ photo } alt={ description } />
      </div>
      <ProductInfo className="product-info" product={props.product} />
    </Col>
  );
}

export default ProductItem;
