import Image from "next/image"
import { EpisodesType } from "@/types/episodesType"
import { buttonStyles } from "@/styles/button"
import EpisodeItemsDetails from "@/components/EpisodeItemsDetails"
import { useState } from "react"

const EpisodeItems = ({image, episodeNumber, title, description}: EpisodesType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (): void => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="max-w-350 p-8 bg-[#2C2C2C] rounded-3xl">
            <div className="flex gap-10 max-[759px]:flex-col">
                <Image data-testid="target-itemImage" className="max-w-100 max-lg:max-w-80 max-[759px]:min-w-full max-[759px]:w-70" src={image} alt={title} width={1000} height={1000}/>
                <div className="flex flex-col justify-between gap-5">
                    <p className="text-[#118DA8] max-sm:text-[14px]">Episode {episodeNumber}</p>
                    <h5 className="text-7xl font-semibold max-lg:text-5xl max-sm:text-4xl">{title}</h5>
                    <p className="text-xl opacity-70 max-lg:text-[14px]">{description}</p>
                    <button onClick={handleClick} className={buttonStyles}>{isOpen ? "Hide Episode Details" : "View Episode Details"}</button>
                </div>
            </div>
            {isOpen && <EpisodeItemsDetails/>}
        </div>
    )
}

export default EpisodeItems