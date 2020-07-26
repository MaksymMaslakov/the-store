const deleteProductRequested = () =>{
  return {
    type: "DELETE_PRODUCT_REQUEST",
  }
};

const deleteProductSuccess = (product) => {
  return {
    type: "DELETE_PRODUCT_SUCCESS",
    payload: {product}
  }
};

const deleteProductError = (error) => {
  return {
    type: 'DELETE_PRODUCT_FAILURE',
    payload: error
  }
};

const deleteProduct = (dispatch) => (service, product) => {
  dispatch(deleteProductRequested())

  service.deleteProductById(product)
    .then(() => dispatch(deleteProductSuccess(product)))
    .catch((error) => dispatch(deleteProductError({
      code: error.code,
      message: error.message
    })))
}
export default deleteProduct;
