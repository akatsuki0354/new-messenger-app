"use client"
import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import UserSelect from '../Chat/user-select'
import ChatBox from '../Chat/chat-box'
import { Users } from '@/lib/types'

export default function Home() {
    const [selectedUser, setSelectedUser] = useState<Users | null>(null);

    return (
        <>
            <div className='flex flex-col h-screen'>
                <Navbar />
                <div className="userSelect flex flex-1">
                    <div className="min-w-1/5 bg-slate-100/40">
                        <UserSelect onSelectUser={setSelectedUser} />
                    </div>
                    <div className='chatBox flex-col flex-1 flex'>
                        <ChatBox selectedUser={selectedUser || undefined} />
                    </div>
                </div>
            </div>
        </>
    )
}

