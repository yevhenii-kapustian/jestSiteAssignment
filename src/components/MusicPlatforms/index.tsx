import { musicPlatforms } from "@/data/musicPlatforms"
import Image from "next/image"
import Link from "next/link"

const MusicPlatforms = () => {
    return(
        <>
            {musicPlatforms.map((item, index) => <Link key={index} href={item.href}><Image src={item.src} alt="platforms" width={32} height={32}/></Link>)}
        </>
    )
}

export default MusicPlatforms