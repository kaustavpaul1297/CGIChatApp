import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD3iefHhfBLoW4GO9urHYAHDdjN9tV6sOQ",
    authDomain: "cgichat.firebaseapp.com",
    projectId: "cgichat",
    storageBucket: "cgichat.appspot.com",
    messagingSenderId: "63741881021",
    appId: "1:63741881021:web:eb06216c9b0a956c1e65d4",
  })
  .auth();
