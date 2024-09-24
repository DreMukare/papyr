import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

export async function registerNewUser(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    console.error("Error creating user account", err);
    return false;
  }
}

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    return true;
  } catch (err) {
    console.log("Error logging in: ", err);
    return false;
  }
}
