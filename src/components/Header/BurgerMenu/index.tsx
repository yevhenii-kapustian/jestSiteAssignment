'use client'

import { List, XCircle } from "@phosphor-icons/react";
import Navigation from "../Navigation";
import { navigationLinks } from "@/data/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div data-testid="burgerWrapper" className="hidden max-sm:block">
            <button aria-label="openButton" onClick={handleClick} className="cursor-pointer">
                <List size={32}/>
            </button>
            <AnimatePresence>
                {isOpen &&    
                    <motion.ul
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 300, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-1/2 h-screen fixed top-0 right-0 flex flex-col items-center justify-center gap-5 bg-white">
                        <button aria-label="closeButton" className="absolute top-5 left-5 cursor-pointer" onClick={handleClick}>
                            <XCircle color="black" size={32}/>
                        </button>
                        {navigationLinks.map((item, index) => <li className=" text-black" key={index}><Navigation {...item}/></li> )}
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    )
}

export default BurgerMenu