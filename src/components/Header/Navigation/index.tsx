import { navigationLinks } from "@/data/navigation"
import Link from "next/link"

const Navigation = () => {
    return(
        <nav className="flex gap-10">
            {navigationLinks.map((item, index) => <Link key={index} href={item.link}>{item.name}</Link> )}
        </nav>
    )
}

export default Navigation