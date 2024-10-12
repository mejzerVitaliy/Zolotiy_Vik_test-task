import React from 'react'
import Thead from '../organisms/Thead'
import Tbody from '../organisms/Tbody'

const MainTable:React.FC = () => {
    return (
        <table className=' w-[80%] table table-dark '>
            <Thead/>

            <Tbody />
        </table>
    )
}

export default MainTable