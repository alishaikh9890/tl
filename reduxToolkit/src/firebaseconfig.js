// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqU2l1YM2INKUZXbyI265RWOaAQOJTTGE",
  authDomain: "product-auth-ad0f7.firebaseapp.com",
  projectId: "product-auth-ad0f7",
  storageBucket: "product-auth-ad0f7.firebasestorage.app",
  messagingSenderId: "44993186128",
  appId: "1:44993186128:web:1f9a91e77bf0ae96240455",
  measurementId: "G-8SXJ2TKQ58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;