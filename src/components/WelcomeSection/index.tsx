import Image from "next/image"
import MusicPlatforms from "../MusicPlatforms"

const WelcomeSection = () => {
    return(
        <section className="flex justify-center gap-15 text-white max-sm:flex-col max-sm:gap-5">
            <div className="w-1/2 max-w-[680px] max-sm:w-full">
                <Image src="/welcomeSection/podcast.png" alt="" width={1000} height={1000} priority/>
            </div>
            <div className="w-1/3 flex justify-center flex-col max-sm:w-full">
                <h1 className="text-[clamp(2.5rem,5.5vw,8rem)] font-semibold">Take your podcast to the next <span className="text-[#00D1E6] font-extrabold">level</span></h1>
                <div className="mt-15 max-sm:mt-5">
                    <p>Listen on</p>
                    <div className="mt-2 flex gap-5">
                        <MusicPlatforms/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection