import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
function UserCard(props: any) {
    return (
        <div className=''>
            <Card className='px-2 rounded-none bg-teal-700/10 hover:bg-teal-200/10 cursor-pointer '>
                <CardHeader >
                    <div className='flex gap-3'>
                        <img src={props.photoURL} className='w-15 h-15 rounded-full' alt='profile' />
                        <div className='mt-3'>
                            <CardTitle>{props.name}</CardTitle>
                            <CardDescription>
                                {props.status}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}

export default UserCard