import React, { Fragment, useContext } from "react";
import { connect } from "react-redux"
import {Button, Spinner} from "react-bootstrap";
import { Link } from "react-router-dom";
import TheStoreContext from "../../../the-store-context";
import { deleteProduct } from "../../../../redux/actions"

import Price from '../price'
import SaleTimer from "../sale-timer";

import './ProductInfo.scss'

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
                onClick={ () => props.deleteProduct(storeService, props.product)}
        >{ props.isDeleting &&
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        }
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
const mapStateToProps = ({products}) => {
  return {
    isDeleting: products.isDeleting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: deleteProduct(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
