import SupportHero from "../components/SupportHero";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

export default function Support() {
  return (
    <>
      <SupportHero />
      <FAQ />
      <ContactSection />
      {/* ContactSection comes next */}
    </>
  );
}