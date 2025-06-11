import React, { useEffect, useState } from 'react'
import { UserData } from '@/services/fetch-data-services'
import SearchInput from '@/components/search-input';
import UserCard from '@/components/users-card';
type Users = {

}

function UserSelect() {
    async function fetchUsers() {
        const users = await UserData();
        console.log(users);
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <SearchInput type="text" />
            <hr className='pb-3' />
            <div>
                <UserCard />
            </div>
        </div>
    )
}

export default UserSelect