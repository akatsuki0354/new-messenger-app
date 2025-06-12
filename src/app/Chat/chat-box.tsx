
"use client"
import React, { useEffect } from 'react'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
function ChatBox() {
    const auth = getAuth()
    const user = auth?.currentUser;

    return (
        <div className='flex-col flex-1 flex '>
            <div>
                {user?.displayName}
            </div>

            <div>
                hello
            </div>
        </div>
    )
}

export default ChatBox