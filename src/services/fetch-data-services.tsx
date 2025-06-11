import '@/lib/firebase-sdk'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore();

export async function GetData() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
