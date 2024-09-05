import { initializeApp } from "firebase/app";
import variables from "./envVariables";

const firebaseConfig = {
  apiKey: variables.firebaseApiKey,
  authDomain: variables.firebaseAuthDomain,
  projectId: variables.firebaseProjectId,
  storageBucket: variables.firebaseStorageBucket,
  messagingSenderId: variables.firebaseMessagingSenderId,
  appId: variables.firebaseAppId,
};

const app = initializeApp(firebaseConfig);

export default app;
