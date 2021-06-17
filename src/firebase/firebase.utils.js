import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDayfinqkzqgHkV8n7YNgRNaPPHVyCc8xo",
    authDomain: "ecom-project-cfd63.firebaseapp.com",
    projectId: "ecom-project-cfd63",
    storageBucket: "ecom-project-cfd63.appspot.com",
    messagingSenderId: "933228427459",
    appId: "1:933228427459:web:139fb300c0538444f70a76",
    measurementId: "G-MV2GYERR6V"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      });
    } catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey, 
  objectsToAdd
  ) => {
  const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
     const newDocRef = collectionRef.doc();
     batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const convertCollectionsSnapshopToMap = (collections) => {
    const transformedCollection = collections.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id, 
        title,
        items
      }
    });

    
    return transformedCollection.reduce((accumlator, collection) => {
      accumlator[collection.title.toLowerCase()] = collection;
      return accumlator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;