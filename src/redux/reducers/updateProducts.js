const updateProducts = (state, action) => {
  if(state === undefined){
    return {
      productsList: [],
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCTS_REQUEST') {
    return {
      productsList: [],
      isFetching: true,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCTS_SUCCESS') {
    return {
      productsList: action.payload,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCTS_FAILURE') {
    return {
      productsList: [],
      isFetching: false,
      error: action.payload
    };
  }

  return state.products;
};

export default updateProducts;
