const updateProductForm = (product) => {
  return {
    type: 'UPDATE_PRODUCT_FORM',
    payload: {product}
  }
}

export default updateProductForm;
