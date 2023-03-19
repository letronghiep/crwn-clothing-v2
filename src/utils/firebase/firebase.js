import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBWQCOz0xmO5Vvv_HPJz0nOHLtsuT0PAD4",
    authDomain: "crown-db-403dd.firebaseapp.com",
    projectId: "crown-db-403dd",
    storageBucket: "crown-db-403dd.appspot.com",
    messagingSenderId: "380229549576",
    appId: "1:380229549576:web:28c14d0b339e6552cddbbd"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();
export const createDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (err) {
            console.log('error: ', err.message)
        }
    }
    return userDocRef;
}