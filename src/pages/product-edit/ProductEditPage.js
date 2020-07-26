import React, {useContext, useEffect} from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import ProductForm from "../../components/product-form";
import {
  fetchProductById,
  putProductForm,
} from "../../redux/actions";
import TheStoreContext from "../../components/the-store-context";

function ProductEditPage(props) {
  const storeService = useContext(TheStoreContext);
  useEffect( () => {
    props.fetchProduct(storeService, props.match.params.id)
  }, [])

  return (
    <section id="product-edit">
      <ProductForm
        isUpdate={true}
        saveHandler={props.saveHandler(storeService)}/>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: fetchProductById(dispatch),
    saveHandler: putProductForm(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(
                  withRouter(ProductEditPage));
