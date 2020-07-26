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
    const imageFile = newProduct.photo;

    return await firebase.storage().ref(`/images/${imageFile.name}`)
      .put(imageFile)
      .then( async(snapshot) => {
        return await firebase.storage().ref('images').child(imageFile.name).getDownloadURL()
      })
      .then( async (fireBaseUrl) => {
        return await firebase.database()
          .ref('products')
          .push({...newProduct, photo: fireBaseUrl})
          .then( product => {
            console.log('Service: POST product:', product)
            return product
          })
      })
  }

  updateProduct = async ( newProduct ) => {
    const imageFile = newProduct.photo;
    if(typeof imageFile !== 'string'){
      return await firebase.storage().ref(`/images/${imageFile.name}`)
        .put(imageFile)
        .then( async(snapshot) => {
          return await firebase.storage().ref('images').child(imageFile.name).getDownloadURL()
        })
        .then( async (fireBaseUrl) => {
          return await firebase.database()
            .ref('products')
            .child(newProduct.id)
            .update({...newProduct, photo: fireBaseUrl})
            .then( product => {
              console.log('Service: POST product:', product)
              return product
            })
        })
    }
    else{
      return await firebase.database()
        .ref('products')
        .child(newProduct.id)
        .update(newProduct)
        .then(product => {
          console.log('Service: PUT product:', product)
          return product
        })
    }
  }

  deleteProductById = async (product) => {
    console.log('Service: DELETE')
    return await Promise.all(
      [
        firebase.database()
          .ref('products')
          .child(product.id)
          .remove(),
        firebase.storage()
          .refFromURL(product.photo)
          .delete()
      ])

    // TODO: remove img from storage
    // sudo apt-get install compizconfig-settings-manager
  }
}

export default StoreService;
