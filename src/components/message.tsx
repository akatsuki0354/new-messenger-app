import React, { useState, useEffect } from 'react';
import { UserCircle } from 'lucide-react';

interface MessageProps {
    content: string;
    senderId: string;
    currentUserId: string;
    timestamp: Date;
    senderName: string;
    senderPhotoURL?: string;
}

function Message({ content, senderId, currentUserId, timestamp, senderName, senderPhotoURL }: MessageProps) {
    const isCurrentUser = senderId === currentUserId;
    const hasValidPhoto = Boolean(senderPhotoURL) && senderPhotoURL !== 'null' && senderPhotoURL !== 'undefined';
    const [imageLoadError, setImageLoadError] = useState(false);

    useEffect(() => {
        setImageLoadError(false);
    }, [senderPhotoURL]);

    return (
        <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex gap-2 max-w-[70%] ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex-shrink-0">
                    {hasValidPhoto && !imageLoadError ? (
                        <img
                            src={senderPhotoURL}
                            className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/10 shadow-sm"
                            alt={senderName}
                            onError={(e) => {
                                setImageLoadError(true);
                            }}
                        />
                    ) : (
                        <UserCircle className="w-12 h-12 text-gray-400" />
                    )}
                </div>
                <div className={`flex flex-col ${isCurrentUser ? 'items-end' : 'items-start'}`}>
                    <div className="text-xs text-gray-500 mb-1 px-1">{senderName}</div>
                    <div className={`p-3 ${
                        isCurrentUser
                            ? 'bg-teal-600 text-white rounded-2xl rounded-tr-none'
                            : 'bg-white text-gray-900 rounded-2xl rounded-tl-none shadow-sm'
                    }`}>
                        <div className="text-sm whitespace-pre-wrap break-words">{content}</div>
                        <div className={`text-xs mt-1 ${
                            isCurrentUser ? 'text-teal-100' : 'text-gray-500'
                        }`}>
                            {new Date(timestamp).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;