import Logo from "../Logo"
import Navigation from "./Navigation"
import BurgerMenu from "./BurgerMenu"
import { navigationLinks } from "@/data/navigation"

const Header = () => {
    return(
        <header className="p-10 flex justify-evenly items-center text-white">
            <Logo/>
            <nav>
                <ul className="flex gap-10 max-sm:hidden">
                    {navigationLinks.map((item, index) => <li key={index}><Navigation {...item}/></li> )}
                </ul>
                <BurgerMenu/>
            </nav>
        </header>
    )
}

export default Header