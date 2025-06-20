import { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { toast } from 'sonner';
import { User } from '@/app/home/Chat/chat.types';

export interface Message {
    id: string;
    content: string;
    senderId: string;
    senderName: string | null;
    senderPhotoURL: string | null;
    timestamp: any;
    lastMessage?: string | null
}

export function useMessages(selectedUser: User | undefined) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = getAuth();
    const user = auth?.currentUser;
    const db = getFirestore();

    useEffect(() => {
        if (!user || !selectedUser) {
            console.log('Missing user or selectedUser:', { user, selectedUser });
            return;
        }

        const chatId = [user.uid, selectedUser.id].sort().join('_');
        console.log('Setting up chat listener for chatId:', chatId);

        const q = query(
            collection(db, `chats/${chatId}/messages`),
            orderBy('timestamp', 'asc')
        );

        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                console.log('Received snapshot with', snapshot.docs.length, 'messages');
                const newMessages = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    lastMessage: doc.data().content
                })) as Message[];
                console.log('Processed messages:', newMessages);
                setMessages(newMessages);
            },
            (error) => {
                console.error('Error in chat listener:', error);
                toast.error('Error loading messages');
            }
        );

        return () => {
            console.log('Cleaning up chat listener for chatId:', chatId);
            unsubscribe();
        };
    }, [user, selectedUser]);

    const sendMessage = async (content: string) => {
        if (!user || !selectedUser || !content.trim()) {
            console.log('Cannot send message:', { user, selectedUser, message: content });
            return;
        }

        setIsLoading(true);
        const chatId = [user.uid, selectedUser.id].sort().join('_');
        console.log('Sending message to chatId:', chatId);

        const messageData = {
            content: content.trim(),
            senderId: user.uid,
            senderName: user.displayName,
            senderPhotoURL: user.photoURL,
            timestamp: serverTimestamp(),
        };
        try {
            const docRef = await addDoc(collection(db, `chats/${chatId}/messages`), messageData);
            console.log('Message sent successfully with ID:', docRef.id);
            toast.success('Message sent');
            return true;
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message');
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const getLastMessage = () => {
        if (messages.length === 0) return null;
        return messages[messages.length - 1].lastMessage;
    };

    return {
        messages,
        isLoading,
        sendMessage,
        getLastMessage
    };
} 