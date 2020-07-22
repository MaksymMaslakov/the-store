import React, {useContext, useEffect} from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import ProductForm from "../../components/product-form";
import {
  fetchProductById,
  saveProductFormOnBackEnd,
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
        productForm={props.productForm}
        saveHandler={props.saveHandler(storeService, 'PUT')}/>
    </section>
  )
}

const mapStateToProps = ({ productForm }) => {
  return {
    productForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: fetchProductById(dispatch),
    saveHandler: saveProductFormOnBackEnd(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
                  withRouter(ProductEditPage));
