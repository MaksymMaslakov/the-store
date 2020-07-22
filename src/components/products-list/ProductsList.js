import React from 'react';

import ProductItem from "./product-item";
import AddProduct from "./add-product";
import {
  Container,
  Row
} from 'react-bootstrap'

import './ProductsList.scss';

function ProductsList(props) {
  return (
    <Container fluid id="product-list">
      <Row noGutters>
        <AddProduct/>
        {
          (props.products || []).map( product => {
            return <ProductItem
              product={ product }
              key={ product.id }
            />
          })
        }
      </Row>
    </Container>
  );
}

export default ProductsList;
