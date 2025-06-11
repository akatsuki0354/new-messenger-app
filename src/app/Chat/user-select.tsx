import React, { useEffect, useState } from 'react'
import { UserData } from '@/services/fetch-data-services'
import SearchInput from '@/components/search-input';
import UserCard from '@/components/users-card';
type Users = {
    name: string,
    status: string,
    id: string,
    photoURL: string
}

function UserSelect() {
    const [userData, setUserData] = useState<Users[]>()
    async function fetchUsers() {
        const users = await UserData();
        setUserData(users)
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <SearchInput type="text" />
            <hr />
            <div>
                <h1 className='font-semibold p-3'>Chat with Users</h1>
                <div className='overflow-y-auto max-h-100vh'>
                    {userData?.map((users, index: any) => (
                        <UserCard key={index.id} photoURL={users.photoURL} name={users.name} status={users.status} />
                    ))}
                    {userData?.map((users, index: any) => (
                        <UserCard key={index.id} photoURL={users.photoURL} name={users.name} status={users.status} />
                    ))}
                    {userData?.map((users, index: any) => (
                        <UserCard key={index.id} photoURL={users.photoURL} name={users.name} status={users.status} />
                    ))}
                    {userData?.map((users, index: any) => (
                        <UserCard key={index.id} photoURL={users.photoURL} name={users.name} status={users.status} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserSelect