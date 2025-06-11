import React from 'react'
import { Button } from '@/components/ui/button'
import { getAuth, signOut } from "firebase/auth";
import { LogOut } from 'lucide-react';
const auth = getAuth();
const Logout = () => {
    try {
        signOut(auth)
    } catch (err) {
        console.log(err)
    }
}
function Navbar() {
    return (
        <div>
            <nav className='flex justify-between py-5 px-10 border-b-2'>
                <h1 className='text-2xl font-semibold'>Messenger</h1>
                <Button
                    onClick={Logout}>
                    <LogOut />
                    Logout
                </Button>
            </nav>
        </div>
    )
}

export default Navbar