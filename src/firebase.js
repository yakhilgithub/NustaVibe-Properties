// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVccC4R3RibjGVM5GbYT29XfeiFTytDi4",
  authDomain: "nustavibe-78cf2.firebaseapp.com",
  projectId: "nustavibe-78cf2",
  storageBucket: "nustavibe-78cf2.appspot.com",
  messagingSenderId: "323055887681",
  appId: "1:323055887681:web:1fd12d289fbea65b592dc0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()