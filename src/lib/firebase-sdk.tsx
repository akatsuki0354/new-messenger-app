import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDQDe4gY69VK4wI4aF4w5rZbM-N7zCpu6s",
    authDomain: "messaging-apps-20c09.firebaseapp.com",
    databaseURL: "https://messaging-apps-20c09-default-rtdb.firebaseio.com",
    projectId: "messaging-apps-20c09",
    storageBucket: "messaging-apps-20c09.firebasestorage.app",
    messagingSenderId: "862615935911",
    appId: "1:862615935911:web:0dbf005fbdd97ccf6fb482",
    measurementId: "G-SSKBFG64B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Analytics = getAnalytics(app);