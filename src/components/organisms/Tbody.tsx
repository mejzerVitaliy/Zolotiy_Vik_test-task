import React, { useEffect, useState } from 'react'
import { User } from '../../types/UserInterface'
import Td from '../atoms/Td'

const Tbody: React.FC<{users: User[]}> = ({users}) => {
    const [usersList, setUsersList] = useState<User[]>()
    
    useEffect(() => {
        setUsersList(users)       
    }, [users])
    
    return (
        <tbody>
            {usersList?.map((user: User) => (
                <tr key={ user.id } className=' hovered cursor-pointer transition-colors ' onClick={() => console.log(user)}>
                    <Td>{ user.id }</Td>
                    <Td>{ user.name }</Td>
                    <Td>{ user.email.length > 17 ? user.email.slice(0, 18).concat('...') : user.email }</Td>
                    <Td>{ user.phone.length > 14 ? user.phone.slice(0, 15).concat('...') : user.phone }</Td>
                    <Td>{ user.address.city.length > 11 ? user.address.city.slice(0, 12).concat('...') : user.address.city }</Td>
                </tr>
            ))}
        </tbody>
    )  
}

export default Tbody