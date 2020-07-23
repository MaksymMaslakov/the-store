const putProductRequested = () =>{
  return {
    type: 'POST_PRODUCT_FORM_REQUEST'
  }
};

const productLoaded = (productForm) => {
  return {
    type: 'POST_PRODUCT_FORM_SUCCESS',
    payload: productForm
  }
};

const putProductError = (error) => {
  return {
    type: 'POST_PRODUCT_FORM_FAILURE',
    payload: error
  }
};

const putProductForm = (dispatch) => (storeService) => async (product) => {
  dispatch(putProductRequested());

  storeService.updateProduct(product)
    .then( () => dispatch(productLoaded(product)))
    .catch( (error) => dispatch(putProductError({
      code: error.code,
      message: error.message
    })));
};

export default putProductForm;
