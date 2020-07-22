import React, { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import Price from '../price'
import SaleTimer from "../sale-timer";

import './ProductInfo.scss'

import TheStoreContext from "../../../the-store-context";

function ProductInfo(props) {
  const storeService = useContext(TheStoreContext);

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
        <Button variant="outline-danger"
                onClick={ () => storeService.deleteProductById(id)}
        >
          Delete
        </Button>
        <Link
          to={ `/products/edit/${id}` }
          className="btn btn-outline-primary"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ProductInfo;
