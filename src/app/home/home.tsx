import React from 'react'
import Navbar from '../navbar/navbar'
import UserSelect from '../Chat/ChatBox/user-select'
import ChatBox from '../Chat/ChatBox/chat-box'
export default function Home() {

    return (
        <>

            <div className='flex flex-col h-screen'>
                <Navbar />
                <div className="userSelect flex flex-1">
                    <div className="min-w-1/5 bg-slate-100/40">
                        <UserSelect />
                    </div>
                    <div className='chatBox flex-col flex-1 flex'>
                        <ChatBox />
                    </div>
                </div>
            </div >
        </>
    )
}

