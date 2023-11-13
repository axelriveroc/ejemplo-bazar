// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// LOGIN
export const onSignIn = async ({ email, password }) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// REGISTER -->export
export const register = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// LOGIN CON GOOGLE --> export
let googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    let res = await signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// CERRAR SESION EN FIREBASE

export const logout = () => {
  signOut(auth);
};

// RECUPERAR CONTRASEÑA

export const resetPassword = async (email) => {
  try {
    const data = await sendPasswordResetEmail(auth, email);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFile = async (file) => {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  let url = await getDownloadURL(storageRef);
  return url;
};
