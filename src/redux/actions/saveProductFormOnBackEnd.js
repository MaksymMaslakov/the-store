const saveProductRequested = () =>{
  return {
    type: 'FETCH_PRODUCT_FORM_REQUEST'
  }
};

const productLoaded = () => {
  return {
    type: 'FETCH_PRODUCT_FORM_SUCCESS'
  }
};

const saveProductError = (error) => {
  return {
    type: 'FETCH_PRODUCT_FORM_FAILURE',
    payload: error
  }
};

const saveProductFormOnBackEnd = (dispatch, storeService) => async (product, method) => {
  dispatch(saveProductRequested());
  return await storeService.saveProduct(product, method)
    .then( () => dispatch(productLoaded()))
    .catch( (error) => dispatch(saveProductError(error)));
};

export default saveProductFormOnBackEnd;
