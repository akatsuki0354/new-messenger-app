import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, Timestamp, getFirestore } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();
export const LoginServices = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const refreshedIdToken = await user.getIdToken(true);

        const userData = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            lastLogin: Timestamp.fromDate(new Date),
        };
        await setDoc(doc(db, "users", user.uid), userData, { merge: true });
        return {
            user,
            token,
            refreshedIdToken,
        };

    } catch (error) {
        console.error("Login or Firestore write failed:", error);
        return null;
    }
}