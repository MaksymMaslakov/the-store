import React from 'react';

import Price from './price'
import SaleTimer from "./sale-timer";
import {
  Card,
  Button,
  Col
} from "react-bootstrap";
import './ProductItem.scss';

function ProductItem(props) {

  const {
    id,
    title,
    photo,
    description,
    sale_percent,
    end_sale_period
  } = props.product;

  const isSale = !!sale_percent
    && !!end_sale_period
    && ((Date.parse(end_sale_period) - Date.now())) > 0

  return (
    <Col xs={12} md={6} lg={4} className='py-3'>
      <Card>
        <Card.Img variant="top" src={ photo } />
        <Card.Body>
          <Card.Title className="title-product">
            { title }
          </Card.Title>
          {!!description &&
            <Card.Text className="description-product">
              {description}
              <span className="desc-end d-block">{' '}</span>
            </Card.Text>
          }
          <Card.Text  className={`text-center my-0 mx-auto ${!isSale && 'mb-3'}`}>
            <Price product={ props.product } isSale={isSale}/>
          </Card.Text>
          {isSale &&
            <Card.Text className="text-center">
              <small className="text-muted m-0">
                <SaleTimer endtime={end_sale_period}/>
              </small>
            </Card.Text>
          }
          <div className="d-flex justify-content-around">
            <Button variant="outline-danger" onClick={ () => console.log(`Delete ${id} product`)}>Delete</Button>
            <Button variant="outline-primary" onClick={ () => console.log(`Edit ${id} product`)}>Edit</Button>
          </div>
        </Card.Body>
        {/*<Card.Footer >*/}
        {/*  */}
        {/*</Card.Footer>*/}
      </Card>
    </Col>
  );
}

export default ProductItem;
