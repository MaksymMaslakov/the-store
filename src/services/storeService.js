import { omit } from 'lodash'
import firebase from "firebase/app";

class StoreService {
  signInOrUp = async ( email, password, action = 'SIGN_UP') => {
    if(action === 'SIGN_UP'){
      return await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( res => res.user )
    }else{
      return await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( res => res.user )
    }
  }

  logout = async () => await firebase.auth().signOut()

  getAllProducts = async (user_id) =>{
    // TODO: Should return products by user_id
    return await firebase.database()
      .ref('products')
      .orderByChild('user_id')
      .equalTo(user_id)
      .once('value')
      .then( snapshot => {
        const productsList = (snapshot.val() || {});
        return  Object.keys(productsList)
          .map( (key) => {
            const product = productsList[key]
            return {
              ...product,
              id: key
            }
        })
      })
  }

  getProductById = async (id) => {
    console.log('Service: GET product by id:  ID = ',id)
    return await firebase.database()
      .ref('products')
      .child(id)
      .once("value")
      .then(product => {
        console.log('Service: GET product by id:',product.val())
        return product.val()
      })
  }

  createProduct = async ( newProduct ) => {
    return  await firebase.database()
      .ref('products')
      .push(newProduct)
      .then(product => {
        console.log('Service: POST product:', product)
        return product
      })
      .catch(error => ({
        code: error.code,
        message: error.message
      }));

  }

  updateProduct = async ( newProduct ) => {
    return await firebase.database()
      .ref('products')
      .child(newProduct.id)
      .update(newProduct)
      .then(product => {
        console.log('Service: PUT product:', product)
        return product
      })
  }

  deleteProductById = async (id) => {
    console.log('Service: DELETE')
    return await firebase.database()
      .ref('products')
      .child(id)
      .remove()
  }
}

export default StoreService;
