const updateProductForm = (state, action) => {
  if(state === undefined){
    return {
      productForm: {
        title: '',
        description: '',
        photo: '',
        price: '',
        sale_percent: '',
        end_sale_period: '',
        user_id: null,
        id: null,
      },
      isFetching: false,
      isPosting: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_REQUEST') {
    return {
      ...state.productForm,
      productForm: {
        title: '',
        description: '',
        photo: '',
        price: '',
        sale_percent: '',
        end_sale_period: '',
        user_id: null,
        id: null,
      },
      isFetching: true,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_SUCCESS') {
    return {
      ...state.productForm,
      productForm: {
        ...action.payload.product,
        id: action.payload.id
      },
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_PRODUCT_FORM_FAILURE') {
    return {
      ...state.productForm,
      productForm: {
        title: '',
        description: '',
        photo: '',
        price: '',
        sale_percent: '',
        end_sale_period: '',
        user_id: null,
        id: null,
      },
      isFetching: false,
      error: action.payload
    };
  }

  if(action.type === 'UPDATE_PRODUCT_FORM'){
    return {
      ...state.productForm,
      productForm: {
        ...action.payload.product
      }
    };
  }

  if(action.type === 'CLEAR_PRODUCT_FORM'){
    return {
      productForm: {
        title: '',
        description: '',
        photo: '',
        price: '',
        sale_percent: '',
        end_sale_period: '',
        user_id: null,
        id: null,
      },
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
      productForm: {
        ...action.payload.product
      },
      isPosting: false,
      error: null
    }
  }

  if(action.type === 'POST_PRODUCT_FORM_FAILURE'){
    return {
      ...state.productForm,
      isPosting: false,
      error: action.payload
    }
  }

  return state.productForm;
};

export default updateProductForm;
