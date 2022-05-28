

  import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
// import 'firebase/firestore


const firebaseConfig = {
    apiKey: "AIzaSyBwhbOrJGeSOUh-pfbdNjkXfa-DCqM8Qso",
    authDomain: "collegeproject-ab5db.firebaseapp.com",
    projectId: "collegeproject-ab5db",
    storageBucket: "collegeproject-ab5db.appspot.com",
    messagingSenderId: "488064467980",
    appId: "1:488064467980:web:c40e63c3b7a77139e3da29",
    measurementId: "G-ENB8KP5PD4"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore()
export const storage = getStorage(app)
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};

export const createUserDocument = async ({user, additionalData}) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);

  setDoc(userRef,{fullname:additionalData,testing : true})
  
  // const snapshot = await userRef.get();

  // if (!snapshot.exists) {
  //   const { email } = user;
  //   const { fullName } = additionalData;

  //   try {
  //     await userRef.set({
  //       fullName,
  //       email,
  //       createdAt: new Date(),
  //     });
  //   } catch (error) {
  //     console.log('Error in creating user', error);
  //   }
  // }
};
export const addData = async ({userid,additionalData}) => {
  try{
    const docRef = await setDoc(collection(db,"users",userid),additionalData)
    console.log(docRef?.id)
  }
  catch(e){
    console.error(e)
  }
}


// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
export {
  auth,
//   signInWithGoogle,
  signInWithEmailAndPassword,
  // registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
}