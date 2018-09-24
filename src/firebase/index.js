import firebase from 'firebase/app'
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyTtct2n3cVLgo7oYTUb6DKD32V51P7Zg",
  authDomain: "star-wars-spa-6010d.firebaseapp.com",
  databaseURL: "https://star-wars-spa-6010d.firebaseio.com",
  projectId: "star-wars-spa-6010d",
  storageBucket: "star-wars-spa-6010d.appspot.com",
  messagingSenderId: "548353912387"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth };