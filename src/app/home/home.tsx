import React from 'react'
import { Button } from '@/components/ui/button'
import { getAuth, signOut } from "firebase/auth";
export default function Home() {
    const auth = getAuth();
    const Logout = () => {
        try {
            signOut(auth)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Button onClick={Logout}>Hello</Button>
        </>
    )
}

