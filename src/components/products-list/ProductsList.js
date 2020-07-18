import React from 'react';

import ProductItem from "./product-item";
import {
  Container,
  // CardColumns
} from 'react-bootstrap'

import './ProductsList.scss';

function ProductsList(props) {
  return (
    <Container id="product-list" className="d-flex flex-wrap">
      {
        props.products.map( product => {
          return <ProductItem
            product={ product }
            key={ product.id }
          />
        })
      }
    </Container>
  );
}

export default ProductsList;
