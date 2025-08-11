import Logo from "../Logo"
import Navigation from "./Navigation"

const Header = () => {
    return(
        <header className="p-10 flex justify-evenly text-white">
            <Logo/>
            <Navigation/>
        </header>
    )
}

export default Header