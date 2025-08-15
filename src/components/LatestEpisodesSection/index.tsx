'use client'

import { EpisodesType } from "@/types/episodesType"
import { episodes } from "@/data/episodes"
import EpisodeItems from "./EpisodeItems"
import { useState } from "react"
import { buttonStyles } from "@/styles/button"

const LatestEpisodeSection = () => {
    const [showAll, setShowAll] = useState(false)

    const handleClick = () => setShowAll(!showAll)
    
    const showEpisodes = showAll ? episodes : episodes.slice(0, 1)

    return(
        <section className="mt-20 text-white max-sm:mt-15">
            <div className="mb-20 p-10 flex justify-between items-center gap-5 bg-[#262626] max-md:flex-col max-sm:mb-15">
                <h2 className="text-6xl text-center">Latest episodes</h2>
                <button className={buttonStyles} onClick={handleClick}>View all episodes</button>
            </div>
            <div className="flex flex-col items-center gap-10">
                {showEpisodes.map((item: EpisodesType, index) => <EpisodeItems {...item} key={index}/> )}
            </div>
        </section>
    )
}

export default LatestEpisodeSection