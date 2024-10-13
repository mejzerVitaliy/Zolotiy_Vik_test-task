import React, { ReactNode } from 'react'

const Td:React.FC<{children: string | ReactNode}> = ({children}) => {
    return (
        <td className=' text-[8px] p-1 sm:text-[14px] lg:text-[18px] '>{children}</td>
    )
}

export default Td