const productRequested = () =>{
  return {
    type: 'FETCH_PRODUCT_FORM_REQUEST'
  }
};

const productDownloaded = (productForm) => {
  return {
    type: 'FETCH_PRODUCT_FORM_SUCCESS',
    payload: productForm
  }
};

const productError = (error) => {
  return {
    type: 'FETCH_PRODUCT_FORM_FAILURE',
    payload: error
  }
};

const fetchProductById = (dispatch, storeService) => async (id) => {
  dispatch(productRequested());
  return await storeService.getProductById(id)
    .then( (productForm) => dispatch(productDownloaded(productForm)))
    .catch( (error) => dispatch(productError(error)));
};

export default fetchProductById;
