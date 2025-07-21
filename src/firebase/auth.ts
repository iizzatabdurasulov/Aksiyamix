import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6qKKgQMFO3bk26M6NOZiwBmL3XbEBgWI",
  authDomain: "aksiyamix-e-commerce.firebaseapp.com",
  projectId: "aksiyamix-e-commerce",
  storageBucket: "aksiyamix-e-commerce.appspot.com",
  messagingSenderId: "439088878059",
  appId: "1:439088878059:web:cef617aa1071a789ab09ae",
  measurementId: "G-PW8S9GRER2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
