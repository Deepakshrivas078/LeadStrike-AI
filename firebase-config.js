// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyDlnrYQjxEm4KuIOfpRqWGCHviHeUeysIQ",
  authDomain: "leadstrike-auth.firebaseapp.com",
  projectId: "leadstrike-auth",
  storageBucket: "leadstrike-auth.firebasestorage.app",
  messagingSenderId: "334418603750",
  appId: "1:334418603750:web:cba9e98cb23d07a5fe9527",
  measurementId: "G-B8S3LX6LQ6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
