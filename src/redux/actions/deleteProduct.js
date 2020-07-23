const deleteProductRequested = () =>{
  return {
    type: "DELETE_PRODUCT_REQUEST",
  }
};

const deleteProductSuccess = (id) => {
  return {
    type: "DELETE_PRODUCT_SUCCESS",
    payload: {id}
  }
};

const deleteProductError = (error) => {
  return {
    type: 'DELETE_PRODUCT_FAILURE',
    payload: error
  }
};

const deleteProduct = (dispatch) => (service, id) => {
  dispatch(deleteProductRequested())

  service.deleteProductById(id)
    .then(() => dispatch(deleteProductSuccess(id)))
    .catch((error) => dispatch(deleteProductError({
      code: error.code,
      message: error.message
    })))
}
export default deleteProduct;
