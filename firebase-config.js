// Firebase Configuration for Hoax Bomb Threat Tracing System
// Replace these values with your actual Firebase project configuration

const firebaseConfig = {
    // Your Firebase project configuration
    apiKey: "AIzaSyC8_wj_TBlxDGzYljg5P5yARc8YI_eVfjU",
    authDomain: "tracedna-6b504.firebaseapp.com",
    projectId: "tracedna-6b504",
    storageBucket: "tracedna-6b504.firebasestorage.app",
    messagingSenderId: "80227253487",
    appId: "1:80227253487:web:895355b662a8915b092f1a",
    measurementId: "G-W211WK6WBE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Export for use in other files
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;
