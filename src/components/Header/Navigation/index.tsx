import Link from "next/link"
import { NavigationType } from "@/types/navigation"

type NavigationProps = NavigationType

const Navigation = ({name, link}: NavigationProps) => {
    return(
        <>
            <Link href={link}>{name}</Link> 
        </>
    )
}

export default Navigation