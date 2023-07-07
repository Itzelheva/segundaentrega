import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apyKey = import.meta.env.VITE_APY_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APY_KEY}`,
  authDomain: "racoon-ecommerce.firebaseapp.com",
  projectId: "racoon-ecommerce",
  storageBucket: "racoon-ecommerce.appspot.com",
  messagingSenderId: "601310636329",
  appId: "1:601310636329:web:e85ed348d227bf93356f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
