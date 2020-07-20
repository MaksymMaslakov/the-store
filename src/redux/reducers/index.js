import updateProductForm from "./updateProductForm";
import updateProducts from "./updateProducts";
import updateUser from "./updateUser";

const reducer = (state, action) => {

  return {
    user: updateUser(state, action),
    products: updateProducts(state, action),
    productForm: updateProductForm(state, action)
  }
};

export default reducer;
