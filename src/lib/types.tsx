export type Users = {
    id: string;
    name: string;
    status: string;
    photoURL: string;
    email?: string;
    lastLogin?: Date;
}

export type Message = {
    id: string;
    content: string;
    senderId: string;
    senderName: string;
    senderPhotoURL?: string;
    timestamp: Date;
}

export type Chat = {
    id: string;
    participants: string[];
    lastMessage?: Message;
    updatedAt: Date;
}
