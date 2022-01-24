import { initializeApp } from "firebase/app";
import {
      GoogleAuthProvider, getAuth,
      signInWithPopup, signInWithEmailAndPassword,
      createUserWithEmailAndPassword, sendPasswordResetEmail, signOut
    } from "firebase/auth";
import {
      getFirestore, query,
      getDocs, collection,
      where, addDoc 
    }from "firebase/firestore";
import { Navigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBF2kClh7kWytFd3J4RRh0y2VRL_Ntfyf8",
  authDomain: "academy-project-f6fcc.firebaseapp.com",
  projectId: "academy-project-f6fcc",
  storageBucket: "academy-project-f6fcc.appspot.com",
  messagingSenderId: "957972315162",
  appId: "1:957972315162:web:aadf563d03abf52ca065a3",
  measurementId: "G-KR59N9ZQH8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const q = query(collection(db, "users"), where("uid", "==", res.user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: res.user.uid,
        name: res.user.displayName,
        authProvider: "google",
        email: res.user.email,
      });
    }
    const user = res.user;
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };
  
  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };