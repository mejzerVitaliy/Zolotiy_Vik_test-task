import React from 'react'
import Thead from '../organisms/Thead'
import Tbody from '../organisms/Tbody'
import { useGetUsersQuery } from '../../api/getUsers'
import { useDispatch } from 'react-redux'
import { setIsLoader } from '../../slice/loaderSlice'

const MainTable: React.FC = () => {
    const { data: users, isLoading, error } = useGetUsersQuery()
    const dispatch = useDispatch()
    
    if (error) {
        alert('error of getting api')
        console.error('error of getting api')
    } else if (isLoading) {
        dispatch(setIsLoader())
        return null
    } else return (
        <table className=' w-[90%] shadow-2xl  table table-hover table-dark table-bordered '>
            <Thead/>
            <Tbody users={users!} />
        </table>
    )
}

export default MainTable