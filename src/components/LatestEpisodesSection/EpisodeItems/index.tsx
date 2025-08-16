import Image from "next/image"
import { EpisodesType } from "@/types/episodesType"
import { buttonStyles } from "@/styles/button"

const EpisodeItems = ({image, episodeNumber, title, description}: EpisodesType) => {
    return(
        <div className="max-w-350 p-8 flex bg-black rounded-3xl gap-10 max-[759px]:flex-col">
            <Image data-testid="target-itemImage" className="max-w-100 max-lg:max-w-80 max-[759px]:min-w-full max-[759px]:w-70" src={image} alt={title} width={1000} height={1000}/>
            <div className="flex flex-col justify-between gap-5">
                <p className="text-[#118DA8] max-sm:text-[14px]">Episode {episodeNumber}</p>
                <h5 className="text-7xl max-lg:text-5xl max-sm:text-4xl">{title}</h5>
                <p className="text-xl opacity-70 max-lg:text-[14px]">{description}</p>
                <button className={buttonStyles}>View Episode Details</button>
            </div>
        </div>
    )
}

export default EpisodeItems