const productRequested = () =>{
  return {
    type: 'FETCH_PRODUCT_FORM_REQUEST'
  }
};

const productDownloaded = (product, id) => {
  return {
    type: 'FETCH_PRODUCT_FORM_SUCCESS',
    payload: {product, id}
  }
};

const productError = (error) => {
  return {
    type: 'FETCH_PRODUCT_FORM_FAILURE',
    payload: error
  }
};

const fetchProductById = (dispatch) => async (storeService, id) => {
  dispatch(productRequested());
  return await storeService.getProductById(id)
    .then( (product) => dispatch(productDownloaded(product,id)))
    .catch( (error) => dispatch(productError({
      code: error.code,
      message: error.message
    })));
};

export default fetchProductById;
