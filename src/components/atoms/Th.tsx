const Th:React.FC<{ children: string }> = ({children}) => {
    return (
        <th className="text-[10px] sm:text-[14px] lg:text-[18px] font-extrabold p-1">{children}</th>
    )
}

export default Th