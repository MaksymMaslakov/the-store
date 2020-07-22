import React, {useContext, useEffect} from 'react';
import { connect } from "react-redux";

import ProductForm from "../../components/product-form";
import ErrorBoundary from "../../components/error-boundary";
import {
  clearProductForm,
  saveProductFormOnBackEnd,
} from "../../redux/actions";
import TheStoreContext from "../../components/the-store-context";

function ProductCreatePage(props) {
  const storeService = useContext(TheStoreContext);
  useEffect( () => {
    props.clearForm()
  }, [])

  return (
    <section id="product-create">
      <ErrorBoundary>
        <ProductForm
          productForm={props.productForm}
          saveHandler={props.saveHandler(storeService, 'POST')}/>
      </ErrorBoundary>
    </section>
  );
}

const mapStateToProps = ({ productForm }) => {
  return {
    productForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearForm: () => dispatch(clearProductForm()),
    saveHandler: saveProductFormOnBackEnd(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreatePage);
