export interface User {
    id: string;
    name: string;
    photoURL?: string | null;
}

export interface ChatBoxProps {
    selectedUser?: User;
}