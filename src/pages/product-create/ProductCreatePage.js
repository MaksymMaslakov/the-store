import React, {useContext, useEffect} from 'react';
import { connect } from "react-redux";

import ProductForm from "../../components/product-form";
import ErrorBoundary from "../../components/error-boundary";
import {
  clearProductForm,
  postProductForm,
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
          saveHandler={props.saveHandler(storeService)}/>
      </ErrorBoundary>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearForm: () => dispatch(clearProductForm()),
    saveHandler: postProductForm(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ProductCreatePage);
