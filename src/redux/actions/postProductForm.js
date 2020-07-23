const postProductRequested = () =>{
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

const saveProductError = (error) => {
  return {
    type: 'POST_PRODUCT_FORM_FAILURE',
    payload: error
  }
};

const postProductForm = (dispatch) => (storeService) => async (product) => {
  dispatch(postProductRequested());

  storeService.createProduct(product)
    .then( (res) => dispatch(productLoaded({ ...product, id: res.key })))
    .catch( (error) => dispatch(saveProductError({
      code: error.code,
      message: error.message
    })));
};

export default postProductForm;
