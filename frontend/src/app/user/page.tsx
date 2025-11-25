import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import WasteTypes from "../components/WasteType";
import HowItWorks from "../components/HowItWorks";
import EducationalTips from "../components/EducationalTips";
import LocationInfo from "../components/Location";

export default async function Dashboard() {
  return (
    <div>
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <WasteTypes />
        <EducationalTips />
        <FAQ />
        <LocationInfo />
      </main>
    </div>
  );
}
