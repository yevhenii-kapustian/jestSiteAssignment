import WelcomeSection from "@/components/WelcomeSection";
import LatestEpisodeSection from "@/components/LatestEpisodesSection";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <WelcomeSection/>
      <LatestEpisodeSection/>
      <Form/>
    </>
  );
}