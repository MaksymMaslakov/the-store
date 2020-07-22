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

const fetchProducts = (dispatch) => (storeService) => {
  dispatch(productsRequested());
  storeService.getAllProducts()
    .then( (products) => dispatch(productsDownloaded(products)))
    .catch( (error) => dispatch(productsError(error)));
};

export default fetchProducts;
