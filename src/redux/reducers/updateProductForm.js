const updateProductForm = (state, action) => {
  if(state === undefined){
    return {
      title: '',
      description: '',
      photo: '',
      price: '',
      sale_percent: '',
      end_sale_period: '',
      isFetching: false,
      isPosting: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_REQUEST') {
    return {
      title: '',
      description: '',
      photo: '',
      price: '',
      sale_percent: '',
      end_sale_period: '',
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
      photo: '',
      price: '',
      sale_percent: '',
      end_sale_period: '',
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
      photo: '',
      price: '',
      sale_percent: '',
      end_sale_period: '',
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
