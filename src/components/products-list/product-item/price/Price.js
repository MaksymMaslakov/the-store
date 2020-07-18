import React, {Fragment} from "react";

import {
  Badge
} from "react-bootstrap";
import './Price.scss'

function Price(props){
  const { product: {price, sale_percent }, isSale } = props;
  let priceWithSale;

  if(isSale){
    priceWithSale = (price - price*(sale_percent/100)).toFixed(2)
  }

  return (
    <Fragment>
      <span className="price" style={{ textDecoration: isSale ? 'line-through' : 'none' }}>
        { price }
      </span>
      {
        isSale &&
          <Fragment>
            <Badge variant="danger" className="sale-badge">
              {
                `-${ sale_percent }%`
              }
            </Badge>
            <span>
              {
                ` / ${priceWithSale}`
              }
            </span>
          </Fragment>
      }
      <span>
        $
      </span>
    </Fragment>
  );
}

export default Price;
