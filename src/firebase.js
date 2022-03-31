import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUopc7PezQLpLn2xzbZzYWfE0Z-m2bS5M",
  authDomain: "covid19-tracker-6b368.firebaseapp.com",
  projectId: "covid19-tracker-6b368",
  storageBucket: "covid19-tracker-6b368.appspot.com",
  messagingSenderId: "317673837667",
  appId: "1:317673837667:web:fdc851a5655013c8981456",
  measurementId: "G-PL61PETGCP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
