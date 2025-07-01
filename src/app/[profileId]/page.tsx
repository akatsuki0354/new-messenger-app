"use client"
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState, use } from "react";
import { Users } from "@/lib/types";
import { app } from "@/lib/firebase-sdk";
import Navbar from "../navbar/navbar";
import UserCard from "@/components/users-card";
export default function Page({ params }: { params: Promise<{ profileId: string }> }) {
    const profileId = use(params);
    const [data, setData] = useState<Users[]>([]);
    useEffect(() => {
        const getData = async () => {
            const db = getFirestore(app);
            const userDoc = await getDoc(doc(db, "users", profileId.profileId));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (userData) {
                    setData([{
                        id: userDoc.id,
                        name: userData.name,
                        status: userData.status,
                        photoURL: userData.photoURL,
                        email: userData.email
                    }]);
                } else {
                    setData([]);
                }
            } else {
                setData([]);
            }


        };
        getData();
    }, [profileId]);

    return (
        <div>
            <Navbar />
            <h1>
                {data.map((post) => (
                    <div className="flex   p-10 ">
                        <div className="flex w-full place-content-center shadow-md p-3 bg-gray-200/10 gap-3">
                            <img src={post.photoURL} className="rounded-full" alt="" />
                            <div>
                                <h1 className="text-2xl font-semibold">{post.name}</h1>
                                <h1 className="">{post.status}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </h1>
        </div>
    );
}
