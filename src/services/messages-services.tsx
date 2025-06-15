import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from '../lib/firebase-sdk';
import { Message } from "@/lib/types";

const db = getFirestore(app);
const auth = getAuth(app);

export const MessagesConvo = async ({ participants }: Message) => {
    const user = auth.currentUser;
    if (!user) {
        console.log("User not signed in");
        return;
    }
    const uid = user.uid;
    const docData = {
        dateExample: Timestamp.fromDate(new Date()),
    };

    await setDoc(doc(db, "messages", uid), docData, { merge: true });
};
