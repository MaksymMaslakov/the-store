import { BASE_URL } from '../constants'

class StoreService {
  getAllProducts = async () =>{
    const res = await fetch(`${BASE_URL}/api/v1/products.json`);
    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/api/v1/products/${id}..json`);
    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  saveProduct = async ( product, method ) => {
    const pathAddition =  method === 'PUT' ? `/${product.id}` : '';
    const res = await fetch(`${BASE_URL}/api/v1/products${ pathAddition }.json`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  deleteProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/api/v1/products/${id}`);
    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  getUser = async  () => {
    return {
      name: 'Peter',
      picture: ''
    }
  }
}

export default StoreService;
