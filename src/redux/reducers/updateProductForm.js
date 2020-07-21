const updateProductForm = (state, action) => {
  if(state === undefined){
    return {
      title: '',
      description: '',
      photo: null,
      price: undefined,
      sale_percent: 0,
      end_sale_period: null,
      isFetching: false,
      isPosting: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_REQUEST') {
    return {
      title: '',
      description: '',
      photo: null,
      price: undefined,
      sale_percent: 0,
      end_sale_period: null,
      isFetching: true,
      isPosting: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_SUCCESS') {
    return {
      ...state.productForm,
      ...action.payload,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_FAILURE') {
    return {
      title: '',
      description: '',
      photo: null,
      price: undefined,
      sale_percent: undefined,
      end_sale_period: null,
      isFetching: false,
      isPosting: false,
      error: action.payload
    };
  }

  if(action.type === 'UPDATE_PRODUCT_FORM'){
    return {
      ...state.productForm,
      ...action.payload
    };
  }

  if(action.type === 'CLEAR_PRODUCT_FORM'){
    return {
      title: '',
      description: '',
      photo: null,
      price: undefined,
      sale_percent: undefined,
      end_sale_period: null,
      isFetching: false,
      isPosting: false,
      error: null
    };
  }

  if(action.type === 'POST_PRODUCT_FORM_REQUEST'){
    return {
      ...state.productForm,
      isPosting: true,
      error: null
    }
  }

  if(action.type === 'POST_PRODUCT_FORM_SUCCESS'){
    return {
      ...state.productForm,
      isPosting: false,
      error: null
    }
  }

  if(action.type === 'POST_PRODUCT_FORM_SUCCESS'){
    return {
      ...state.productForm,
      isPosting: false,
      error: action.payload
    }
  }

  return state.productForm;
};

export default updateProductForm;
