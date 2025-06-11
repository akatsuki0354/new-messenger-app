import '@/lib/firebase-sdk'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore();

export async function UserData() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users: any[] = [];
        querySnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        return users;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

