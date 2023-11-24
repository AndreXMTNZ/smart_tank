// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
      apiKey: "AIzaSyAvYvXyC_-koSuCAL_72hHRK95v1OaRic4",
      authDomain: "iotitca-970c1.firebaseapp.com",
      databaseURL: "https://iotitca-970c1-default-rtdb.firebaseio.com",
      projectId: "iotitca-970c1",
      storageBucket: "iotitca-970c1.appspot.com",
      messagingSenderId: "420769570077",
      appId: "1:420769570077:web:7b7b3414d07a96efb655f4"
};

// Initialize Firebase
export const db = firebase.firestore()
export const app = initializeApp(firebaseConfig);