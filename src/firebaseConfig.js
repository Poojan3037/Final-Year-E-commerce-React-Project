
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCYfHOyNzN2EmBYWX6CN6ZwCcKwwd3ZQYU",
    authDomain: "fashionhub-8d985.firebaseapp.com",
    projectId: "fashionhub-8d985",
    storageBucket: "fashionhub-8d985.appspot.com",
    messagingSenderId: "547737778256",
    appId: "1:547737778256:web:b1725a9a72b97868f27955"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

