import React, { useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

function SearchInput(props: any) {

    return (
        <div className='p-5'>
            <Search className='absolute mt-2 ml-2 text-teal-800/40' />
            <Input className='pl-10' type={props.type} placeholder='Search...' value={props.value} />
        </div>
    )
}

export default SearchInput