// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCByBMzR-OU7zGbwLiLNIsz0hm9NJh8gxk",
  authDomain: "netflix-clone-91130.firebaseapp.com",
  projectId: "netflix-clone-91130",
  storageBucket: "netflix-clone-91130.firebasestorage.app",
  messagingSenderId: "57439009230",
  appId: "1:57439009230:web:fac5966932710db86f539f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logIn=async (email,password)=>{
    try {
    await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
       toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logOut=()=>{
    signOut(auth);
}

export{auth,db,signUp,logIn,logOut}