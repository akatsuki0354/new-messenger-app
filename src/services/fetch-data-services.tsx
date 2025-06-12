import '@/lib/firebase-sdk'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Users } from '../lib/types'

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

export function useUsers() {
    const [userData, setUserData] = useState<Users[]>([]);
    useEffect(() => {
        async function fetchUsers() {
            const users = await UserData();
            setUserData(users);
        }
        fetchUsers();
    }, []);

    return userData;
}
