import BASE_URL from '../constants'

class StoreService {
  async getAllProducts () {
    const res = await fetch(`${BASE_URL}/api/v1/products`);
    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  async getProductById (id) {
    const res = await fetch(`${BASE_URL}/api/v1/products/${id}`);
    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }

  async saveProduct ( product, method ) {
    const pathAddition =  method === 'PUT' ? `/${product.id}` : '';
    const res = await fetch(`${BASE_URL}/api/v1/products${ pathAddition }`, {
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

  async deleteProductById (id) {
    const res = await fetch(`${BASE_URL}/api/v1/products/${id}`);
    if(!res.ok){
      throw new Error(`Could not fetch, received ${res.status}`)
    }

    return await res.json()
  }
}
