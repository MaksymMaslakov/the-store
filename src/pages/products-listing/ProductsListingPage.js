import React from 'react';

import ProductsList from "../../components/products-list";

import img from '../../some-img.jpg'

const productsList = [
  {
    id: 1,
    title: 'product name',
    photo: img,
    description: 'salessalessalessalessaless lessalessalessalessalessaless lessalessalessalessalessalessalessalessal ssalessalessalessalessalessalessalessalessaless lessalessalessalessalessalessalessalessalessalessale.',
    price: 99.99,
    sale_percent: 50,
    end_sale_period: new Date(2020, 6, 15,10, 39)
  },
  {
    id: 2,
    title: 'product name',
    photo: img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 99.99,
    sale_percent: 50,
    end_sale_period: new Date(2020, 10, 16,10, 39)
  },
  {
    id: 3,
    title: 'product name',
    photo: img,
    description: '',
    price: 99.99,
    sale_percent: 50,
    end_sale_period: new Date(2020, 8, 16,10, 39)
  },
  {
    id: 4,
    title: 'product name',
    photo: img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 99.99,
    sale_percent: 50,
    end_sale_period: new Date(2020, 8, 16,10, 39)
  },
  {
    id: 5,
    title: 'product name',
    photo: img,
    description: '',
    price: 99.99,
    sale_percent: 50,
    end_sale_period: new Date(2020, 8, 16,10, 39)
  },
  {
    id: 6,
    title: 'product name',
    photo: img,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    price: 99.99,
    sale_percent: 50,
    end_sale_period: new Date(2020, 8, 16,10, 39)
  }
]


function ProductsListingPage() {
  return (
    <section
      id="products-listing"
    >

      <ProductsList
        products={productsList}
      />

    </section>
  );
}

export default ProductsListingPage;
