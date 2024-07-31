import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCFWimWSpxH2cVelPnRjlx1zZsNCisW3wA",
  authDomain: "netflix-clone-9788b.firebaseapp.com",
  projectId: "netflix-clone-9788b",
  storageBucket: "netflix-clone-9788b.appspot.com",
  messagingSenderId: "510560086654",
  appId: "1:510560086654:web:1daf6af69ff82770f5862f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: "user.uid",
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};