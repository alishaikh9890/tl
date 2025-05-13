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

import { getFirestore, getDoc, setDoc, doc } from "@firebase/firestore";


  export const registerUser = async(regData) =>{
  const res = await createUserWithEmailAndPassword(
        auth,
        regData.email,
        regData.password
      );
  
      const user = await res.user;
      // console.log(user);
  
      await updateProfile(user, {
        displayName: regData.username,
        photoURL: regData.img,
      });
  
      // console.log(auth.currentUser);
  
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: regData.username,
        email: regData.email,
        phone: regData.phone,
        createdAt: new Date(),
      });
}


export const loginUser = async (logData, remember) => {
  
    const typeRemeber = remember ? browserLocalPersistence : browserSessionPersistence

    await setPersistence(auth, typeRemeber)

    const res = await signInWithEmailAndPassword(
      auth,
      logData.email,
      logData.password
    );

    const user = res.user;

    const storeUser = await getDoc(doc(db, "users", user.uid));

    console.log(auth.currentUser);

    if (storeUser.exists()) {
      console.log(storeUser.data());
    } else {
      console.log("data not found...!");
    }
}

export  async function googleLogin() {
    try {
      const res = await signInWithPopup(auth, provider);

      const users = res.user;
    } catch (err) {
      console.log(err);
    }
  }


  
  
  export  async function githubLogin() {
      try {
        const res = await signInWithPopup(auth, provider1)
        const users = res.user
      } catch (error) {
        console.log(err);
      }
    }
  
