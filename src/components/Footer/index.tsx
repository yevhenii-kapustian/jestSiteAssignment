'use client'

import Link from "next/link"
import Logo from "../Logo"
import { navigationLinks } from "@/data/navigation"
import MusicPlatforms from "../MusicPlatforms"
import { TwitterLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

const Footer = () => {
    return(
        <footer className="p-20 flex justify-between gap-5 text-white max-sm:flex-col max-sm:items-center max-sm:p-10 max-sm:gap-8">
            <div>
                <Logo/>
                <div className="flex pt-3 max-sm:justify-center">
                    <Link aria-label="instagram" href="/"><InstagramLogo size={25}/></Link>
                    <Link aria-label="twitter" href="/"><TwitterLogo size={25}/></Link>
                    <Link aria-label="facebook" href="/"><FacebookLogo size={25}/></Link>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-center max-sm:grid max-sm:grid-rows-[repeat(2,1fr)] max-sm:grid-cols-[repeat(2,1fr)]">
                {navigationLinks.map((item, index) => <Link key={index} href={item.link}>{item.name}</Link> )}
            </div>
            <div className="flex gap-3" data-testid="music-platforms">
                <MusicPlatforms/>
            </div>

        </footer>
    )
}

export default Footer