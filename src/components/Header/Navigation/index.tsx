import Link from "next/link"
import { NavigationType } from "@/types/navigationType"

type NavigationProps = NavigationType

const Navigation = ({name, link}: NavigationProps) => {
    return(
        <>
            <Link href={link}>{name}</Link> 
        </>
    )
}

export default Navigation