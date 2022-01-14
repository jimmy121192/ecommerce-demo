import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2TpTIZ1ryCuScSLWysi_8mpPnADZdUKY",
  authDomain: "spotlight-2021.firebaseapp.com",
  projectId: "spotlight-2021",
  storageBucket: "spotlight-2021.appspot.com",
  messagingSenderId: "854540354762",
  appId: "1:854540354762:web:6b7f7c7a809a30025ca033",
  measurementId: "G-322XF3YZGG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){ //New user
      const { displayName, email, photoURL } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          photoURL,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.error('Error creating user', error.message);
      }
    }
    return userRef;
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth()
export const firestore = firebase.firestore();


export const signInWithGoogle = async (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

export default firebase;