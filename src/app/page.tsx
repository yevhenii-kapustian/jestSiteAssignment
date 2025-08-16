import WelcomeSection from "@/components/WelcomeSection";
import LatestEpisodeSection from "@/components/LatestEpisodesSection";
import Form from "@/components/Form";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <WelcomeSection/>
      <LatestEpisodeSection/>
      <AboutSection/>
      <Form/>
    </>
  );
}