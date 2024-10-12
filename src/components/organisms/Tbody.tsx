import React from 'react'
import { useGetUsersQuery } from '../../api/getUsers'
import { User } from '../../types/UserInterface'
import Th from '../atoms/Th'

const Tbody = () => {
    const { data: users, isLoading, error } = useGetUsersQuery()
    
    if (error) {
        console.error('error of getting api')
    } else if (isLoading) {
        return <div></div>
    } else return (
        <tbody>
            {users?.map((user: User) => (
                <tr>
                    <Th>{ user.id }</Th>
                    <Th>{ user.name }</Th>
                    <Th>{ user.email }</Th>
                    <Th>{ user.phone }</Th>
                    <Th>{ user.address.city }</Th>
                </tr>
            ))}
        </tbody>
    )
    

    
}

export default Tbody