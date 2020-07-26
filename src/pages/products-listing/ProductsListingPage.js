import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'

import ProductsList from "../../components/products-list";
import ErrorIndicator from "../../components/error-indicator";
import ErrorBoundary from "../../components/error-boundary";

import { fetchProducts } from "../../redux/actions";
import TheStoreContext from "../../components/the-store-context";


function ProductsListingPage(props) {
  const storeService = useContext(TheStoreContext)
  const { isFetching, error, productsList } = props.products
  useEffect( () => {
    props.fetchProducts(storeService, props.user.id)
  }, [])
  return (
    <section id="products-listing">
      <ErrorBoundary error={error}>
        { !!error
          ? <ErrorIndicator/>
          : <ProductsList products={ productsList }/>
        }
        { isFetching ? <Spinner as="span" animation="border" size="sm" role="status"  aria-hidden="true"/> : null }
        </ErrorBoundary>
    </section>
  );
}

const mapStateToProps = ({ user, products }) => {
  return {
    products,
    user: user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: fetchProducts(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListingPage);
