  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDJMewTag85z5n0v2bc0yzj91VZ5OuJFh0",
    authDomain: "fir-login-e6e4d.firebaseapp.com",
    projectId: "fir-login-e6e4d",
    storageBucket: "fir-login-e6e4d.appspot.com",
    messagingSenderId: "603534742673",
    appId: "1:603534742673:web:1d63c79709800f0bb5db30"
  };
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  export{app}