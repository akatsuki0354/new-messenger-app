"use client"
import React, { useState } from 'react'
import SearchInput from '@/components/search-input';
import UserCard from '@/components/users-card';
import { useUsers } from '@/services/fetch-data-services';
import { Users } from '@/lib/types';
import { getAuth } from 'firebase/auth';

function UserSelect({ onSelectUser }: { onSelectUser: (user: Users) => void }) {
    const userData = useUsers();
    const [searchQuery, setSearchQuery] = useState('');
    const auth = getAuth();
    const currentUser = auth.currentUser;

    // Filter out current user and apply search filter
    const filteredUsers = userData.filter(user =>
        user.id !== currentUser?.uid &&
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <SearchInput
                type="text"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
            />
            <hr />
            <div>
                <h1 className='font-semibold p-3'>Chat with Users</h1>
                <div className='scroll h-[calc(100vh-215px)] overflow-y-auto'>
                    {filteredUsers.length === 0 ? (
                        <div className="text-center text-gray-500 mt-4">
                            {searchQuery ? 'No users found' : 'No users available'}
                        </div>
                    ) : (
                        <div>
                            {filteredUsers.map((user, index) => (
                                <div
                                    key={user.id || index}
                                    onClick={() => onSelectUser(user)}
                                    className="cursor-pointer hover:bg-gray-50"
                                >
                                    <UserCard
                                        photoURL={user.photoURL || null}
                                        name={user.name}
                                        status={user.status}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserSelect;