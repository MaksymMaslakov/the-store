const updateProducts = (state, action) => {
  if(state === undefined){
    return {
      productsList: [],
      isDeleting: false,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCTS_REQUEST') {
    return {
      ...state.products,
      productsList: [],
      isFetching: true,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCTS_SUCCESS') {
    return {
      ...state.products,
      productsList: action.payload,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCTS_FAILURE') {
    return {
      ...state.products,
      productsList: [],
      isFetching: false,
      error: action.payload
    };
  }

  if(action.type === 'DELETE_PRODUCT_REQUEST'){
    return {
      ...state.products,
      isDeleting: true,
      error: null
    }
  }

  if(action.type === 'DELETE_PRODUCT_SUCCESS'){
    return {
      ...state.products,
      productsList: state.products.productsList.filter( (product) => product.id !== action.payload.product.id ),
      isDeleting: false,
      error: null
    }
  }

  if(action.type === 'DELETE_PRODUCT_FAILURE'){
    return {
      ...state.products,
      isDeleting: false,
      error: action.payload
    }
  }

  return state.products;
};

export default updateProducts;
