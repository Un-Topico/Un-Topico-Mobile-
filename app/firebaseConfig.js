// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhg9ot1wlOiRGkSYQ-T6pXgaHZpxpOHjU",
  authDomain: "untopico-b888c.firebaseapp.com",
  projectId: "untopico-b888c",
  storageBucket: "untopico-b888c.appspot.com",
  messagingSenderId: "950143679973",
  appId: "1:950143679973:web:ff670f049fa787286d830c",
  measurementId: "G-KNYD12D1NX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
