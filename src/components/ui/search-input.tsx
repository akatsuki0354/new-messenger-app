import React from 'react'
import { Input } from './input'
import { Search } from 'lucide-react'

interface SearchInputProps {
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

function SearchInput({ type, value, onChange, placeholder = 'Search...' }: SearchInputProps) {
    return (
        <div className='p-5'>
            <Search className='absolute mt-2 ml-2 text-teal-800/40' />
            <Input 
                className='pl-10' 
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchInput;