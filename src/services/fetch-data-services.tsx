import '@/lib/firebase-sdk'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { Users } from '../lib/types'
import { getAuth } from 'firebase/auth';

const db = getFirestore();

export async function UserData() {
    try {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (!currentUser) {
            console.error("No authenticated user found");
            return [];
        }

        const q = query(
            collection(db, "users"),
            where("uid", "!=", currentUser.uid)
        );

        const querySnapshot = await getDocs(q);
        const users: Users[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            users.push({
                id: data.uid,
                name: data.name,
                status: data.status,
                photoURL: data.photoURL
            });
        });

        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export function useUsers() {
    const [userData, setUserData] = useState<Users[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                const users = await UserData();
                setUserData(users);
            } catch (err) {
                console.error("Error in useUsers hook:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return { userData, loading };
}
