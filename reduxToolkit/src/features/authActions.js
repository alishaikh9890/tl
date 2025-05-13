import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/authSlice";
import app from "../firebaseconfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  GithubAuthProvider,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  browserSessionPersistence
} from "@firebase/auth";

  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider(app);
  const provider1 = new GithubAuthProvider(app);

