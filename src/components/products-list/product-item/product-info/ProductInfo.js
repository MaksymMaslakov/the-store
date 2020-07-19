import React, { Fragment } from "react";

import Price from '../price'
import SaleTimer from "../sale-timer";

import './ProductInfo.scss'
import { Button } from "react-bootstrap";
function ProductInfo(props) {
  const {
    id,
    title,
    description,
    sale_percent,
    end_sale_period
  } = props.product;

  const isSale = !!sale_percent
    && !!end_sale_period
    && ((Date.parse(end_sale_period) - Date.now())) > 0;

  return(
    <div className="product-info">
      <h4 className="product-title">{ title }</h4>
      <Fragment>
        {!!description &&
        <p className="product-description">{ description }</p>
        }
      </Fragment>
      <div className="text-center">
        <Price product={ props.product } isSale={isSale}/>
      </div>
      {isSale &&
        <div className="text-center">
          <small className="text-muted m-0">
            <SaleTimer endtime={end_sale_period}/>
          </small>
        </div>
      }
      <div className="d-flex justify-content-around">
        <Button variant="outline-danger" onClick={ () => console.log(`Delete ${id} product`)}>Delete</Button>
        <Button variant="outline-primary" onClick={ () => console.log(`Edit ${id} product`)}>Edit</Button>
      </div>
    </div>
  );
}

export default ProductInfo;
