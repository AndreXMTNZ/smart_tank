// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBjt30z8-n-PbZD4D-sy9BFPaEw3hcAoxQ",
  authDomain: "smart-tank-iot.firebaseapp.com",
  databaseURL: "https://smart-tank-iot-default-rtdb.firebaseio.com",
  projectId: "smart-tank-iot",
  storageBucket: "smart-tank-iot.appspot.com",
  messagingSenderId: "627065868321",
  appId: "1:627065868321:web:39df7c93b3cd00bf4dd360",
  measurementId: "G-JCQCSSJNKJ"
};

// Initialize Firebase
export const db = firebase.firestore()
export const app = initializeApp(firebaseConfig);