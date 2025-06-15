"use client"
import React, { useEffect, useState, useRef } from 'react'
import { getAuth } from 'firebase/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, Loader2 } from 'lucide-react'
import Message from '@/components/message'
import { ChatBoxProps } from './chat.types'
import { useMessages } from '@/services/messages-services'

function ChatBox({ selectedUser}: ChatBoxProps) {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const auth = getAuth();
    const user = auth?.currentUser;
    const { messages, isLoading, sendMessage } = useMessages(selectedUser);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        
        const success = await sendMessage(newMessage);
        if (success) {
            setNewMessage('');
        }
    };

    if (!selectedUser) {
        return (
            <div className="flex items-center justify-center h-full bg-gray-50">
                <div className="text-center text-gray-500">
                    <div className="text-2xl mb-2">👋</div>
                    <p className="text-lg font-medium">Select a user to start chatting</p>
                    <p className="text-sm text-gray-400 mt-1">Choose from the list on the left</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-100px)] bg-white ">
            {/* Chat Header */}
            <div className="p-4 border-b bg-white shadow-sm">
                <div className="flex items-center gap-3">
                    {selectedUser.photoURL ? (
                        <img
                            src={selectedUser.photoURL}
                            alt={selectedUser.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-lg">
                                {selectedUser.name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">{selectedUser.name}</h2>
                        <p className="text-sm text-gray-500">Online</p>
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4  bg-gray-50">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                        <div className="text-4xl mb-4">💬</div>
                        <p className="text-lg font-medium">No messages yet</p>
                        <p className="text-sm text-gray-400 mt-1">Start the conversation!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <Message
                                key={message.id}
                                content={message.content}
                                senderId={message.senderId}
                                currentUserId={user?.uid || ''}
                                timestamp={message.timestamp?.toDate() || new Date()}
                                senderName={message.senderName}
                                senderPhotoURL={message.senderPhotoURL}
                            />
                        ))}
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-white">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-50 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        disabled={!newMessage.trim() || isLoading}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Send className="w-4 h-4" />
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ChatBox;