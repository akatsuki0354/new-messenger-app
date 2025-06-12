import React from 'react'
import SearchInput from '@/components/search-input';
import UserCard from '@/components/users-card';
import { useUsers } from '@/services/fetch-data-services';

function UserSelect() {
    const userData = useUsers()
    return (
        <div>
            <SearchInput type="text" />
            <hr />
            <div>
                <h1 className='font-semibold p-3'>Chat with Users</h1>
                <div className='scroll h-[calc(100vh-215px)] overflow-y-auto'>
                    <div>
                        {userData.map((user, index) => (
                            <UserCard
                                key={user.id || index}
                                photoURL={user.photoURL || null}
                                name={user.name}
                                status={user.status}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSelect