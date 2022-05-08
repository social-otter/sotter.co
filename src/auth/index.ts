// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  GithubAuthProvider,
  User
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerMicrosoft = new OAuthProvider('microsoft.com');
const providerGithub = new GithubAuthProvider();

providerMicrosoft.setCustomParameters({
  prompt: "consent",
  tenant: process.env.REACT_APP_MICROSOFT_TENANT_ID!
});


export interface IUserResult {
  succeed?: boolean;
  user?: User;
  error?: any;
}


export const getAllUsers = async () => {
  const usersCollection = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCollection);
  const myList = usersSnapshot.docs.map(doc => doc.data());
  return myList
}


export const signInWithGoogle = async () => {
  const userResult: IUserResult = {};
  await signInWithPopup(auth, providerGoogle)
    .then((result) => {
      console.log('Firebase Result', result)

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log('Credential', credential);
      // if (credential) {
      // const token = credential.accessToken;
      // console.log('Result', JSON.stringify(result));
      // }
      // The signed-in user info.
      userResult.succeed = true;
      userResult.user = result.user;
      // ...
    }).catch((error) => {
      userResult.succeed = false;
      userResult.error = error;

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  return userResult;
}


export const signInWithMicrosoft = async () => {
  const userResult: IUserResult = {};

  await signInWithPopup(auth, providerMicrosoft)
    .then((result) => {
      console.log('Firebase Result', result)

      const credential = OAuthProvider.credentialFromResult(result);
      // if (credential) {
      //   console.log(credential);
      //   // const accessToken = credential.accessToken;
      //   // const idToken = credential.idToken;
      //   const user = result.user;
      //   console.log('User', user);
      // }
      userResult.succeed = true;
      userResult.user = result.user;
      // ...
    }).catch((error) => {
      userResult.succeed = false;
      userResult.error = error;

      console.error(error);
    });

  return userResult;
}


export const signInWithGithub = async () => {
  const userResult: IUserResult = {};

  await signInWithPopup(auth, providerGithub)
    .then((result) => {
      console.log('Firebase Result', result)

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);

      // if (credential) {
      //   console.log(credential);
      //   // const accessToken = credential.accessToken;
      //   // const idToken = credential.idToken;
      //   const token = credential.accessToken;
      //   // The signed-in user info.
      //   const user = result.user;
      //   console.log('User', user);
      // }
      userResult.succeed = true;
      userResult.user = result.user;
      // ...
    }).catch((error) => {
      userResult.succeed = false;
      userResult.error = error;

      console.error(error);
    });
  
  return userResult;
}


// onAuthStateChanged(auth, (user) => {
//   console.log('onAuthStateChanged', user)

//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
