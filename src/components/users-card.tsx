import React from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { UserCircle } from 'lucide-react';
import Link from 'next/link';

function UserCard({ photoURL, name, status, URL }: any) {
    const hasValidPhoto = Boolean(photoURL) && photoURL !== 'null' && photoURL !== 'undefined';
    return (
        <div>
            <Card className='p-3 rounded-none bg-teal-900/5 hover:bg-teal-200/10 cursor-pointer'>
                <CardHeader>
                    <div className='flex gap-3'>
                        {hasValidPhoto ? (
                            <Link href={URL}>
                                <img
                                    src={photoURL}
                                    className='w-12 h-12 rounded-full object-cover'
                                    alt='profile'
                                    onError={(e) => {
                                        console.log('Image failed to load:', photoURL);
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                            </Link>
                        ) : null}
                        <UserCircle className={`w-16 h-16 text-gray-400 ${hasValidPhoto ? 'hidden' : ''}`} />
                        <div className='mt-2'>
                            <CardTitle>{name}</CardTitle>
                            <CardDescription>
                                {status}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}

export default UserCard;
