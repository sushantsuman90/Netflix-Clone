import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQQrg19YaZ1XkrZMEzjPcCiakFgOjevs8",
  authDomain: "react-firebase-48eed.firebaseapp.com",
  projectId: "react-firebase-48eed",
  storageBucket: "react-firebase-48eed.appspot.com",
  messagingSenderId: "390424067124",
  appId: "1:390424067124:web:d6483d789b5bca31b85e61",
  measurementId: "G-GPCB4X6WKW"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
