import { ReactNode } from "react";

const Th:React.FC<{ children: string | ReactNode; }> = ({children}) => {
    return (
        <th className="text-[16px] font-extrabold">{children}</th>
    )
}

export default Th