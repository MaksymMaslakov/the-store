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
  const { isFetching, error: isError, productsList } = props.products

  useEffect( () => {
    props.fetchProducts(storeService)
  }, [])

  return (
    <section id="products-listing">
      <ErrorBoundary>
        { isFetching ? <Spinner as="span" animation="border" size="sm" role="status"  aria-hidden="true"/> : null }
        { isError ? <ErrorIndicator/> : null }
        <ProductsList
          products={ productsList }
        />
      </ErrorBoundary>
    </section>
  );
}

const mapStateToProps = ({ products }) => {
  return {
    products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: fetchProducts(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListingPage);
