import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const apiKey = process.env.REACT_APP_API_KEY
const authDomain = process.env.REACT_APP_AUTH_DOMAIN
const databaseURL = process.env.REACT_APP_DATABASE_URL
const projectId = process.env.REACT_APP_PROJECT_ID
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_APP_ID
const measurementId = process.env.REACT_APP_MEASUREMENT_ID

const firebaseConfig: any = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

console.log(firebase.apps.length)

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

class Authenticate {

  async registerWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    const details: any = await firebase.auth().signInWithPopup(provider)
    sessionStorage.setItem("itskillscenterToken", JSON.stringify(details?.credential?.accessToken))
    return details?.additionalUserInfo?.profile
  }

  async signInWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const details: any = await firebase.auth().signInWithPopup(googleProvider)
    sessionStorage.setItem("itskillscenterToken", JSON.stringify(details?.credential?.accessToken))
    return details?.additionalUserInfo?.profile
  }

  async facebookSignout() {
    await firebase.auth().signOut()
    sessionStorage.removeItem('itskillscenterToken')
 }
}

const authenticate = new Authenticate();

export default authenticate;

