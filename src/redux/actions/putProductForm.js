const putProductRequested = () =>{
  return {
    type: 'POST_PRODUCT_FORM_REQUEST'
  }
};

const productLoaded = (product) => {
  return {
    type: 'POST_PRODUCT_FORM_SUCCESS',
    payload: {product}
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

  return await storeService.updateProduct(product)
    .then( () => dispatch(productLoaded(product)))
    .catch( (error) => dispatch(putProductError({
      code: error.code,
      message: error.message
    })));
};

export default putProductForm;
