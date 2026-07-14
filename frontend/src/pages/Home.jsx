import Audience from "../components/Audience";
import DownloadCTA from "../components/DownloadCTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Audience />
      <DownloadCTA />
    </>
  );
}