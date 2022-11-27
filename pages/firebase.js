// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyBFCoqlpTPtdNUvPfRgbfMWDgN-8OjE7JI",
  authDomain: "fir-contactform-f50b7.firebaseapp.com",
  projectId: "fir-contactform-f50b7",
  storageBucket: "fir-contactform-f50b7.appspot.com",
  messagingSenderId: "368380454033",
  appId: "1:368380454033:web:7d7b0872a1e59766204b30"
};*/
 const firebaseConfig = {
    apiKey: "AIzaSyB_gpbbOswj0x5lr1JRZa6OfZx_ze3Yk4w",
    authDomain: "contactform-a61a7.firebaseapp.com",
    databaseURL: "https://contactform-a61a7-default-rtdb.firebaseio.com",
    projectId: "contactform-a61a7",
    storageBucket: "contactform-a61a7.appspot.com",
    messagingSenderId: "583076978713",
    appId: "1:583076978713:web:bf2b8556d3aa5223a88a88"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);