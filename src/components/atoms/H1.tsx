import { ReactNode } from "react"

const H1:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] ">{children}</h1>
    )
}

export default H1