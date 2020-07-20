import React from "react";

import ProductForm from "../../components/product-form";

function ProductEditPage() {
  const product = {}
  return (
    <section id="product-edit">
      <ProductForm product={product} submitFunction={ () => {}}/>
    </section>
  )
}

export default ProductEditPage;
