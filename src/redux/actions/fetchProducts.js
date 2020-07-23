const productsRequested = () =>{
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
};

const productsDownloaded = (productsList) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: productsList
  }
};

const productsError = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  }
};

const fetchProducts = (dispatch) => (storeService, user_id) => {
  dispatch(productsRequested());
  storeService.getAllProducts(user_id)
    .then( (products) => dispatch(productsDownloaded(products)))
    .catch( (error) => dispatch(productsError({
      code: error.code,
      message: error.message
    })));
};

export default fetchProducts;
