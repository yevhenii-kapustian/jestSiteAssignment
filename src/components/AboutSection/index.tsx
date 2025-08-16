import Image from "next/image"

const AboutSection = () => {
    return(
        <section className="w-5/6 my-20 m-auto flex gap-10 text-white max-[759px]:flex-col">
            <div className="w-1/2 flex flex-col justify-center gap-2 max-[759px]:w-full">
                <p className="text-[14px] text-[#118DA8]">Meet your host</p>
                <h5 className="text-6xl font-bold">Jacob Paulaner</h5>
                <p className="text-[14px]">Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                <p className="text-[14px]">He's here to help you level up your game by sharing everything he's learned along the way.</p>
            </div>
            <Image className="w-1/2 max-[759px]:w-full" src="/aboutSection/aboutJacob.png" alt="Jacob Paulaner" width={1000} height={1000}/>
        </section>
    )
}

export default AboutSection