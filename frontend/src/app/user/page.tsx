import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Benefits from "../components/Benefits";
import WasteTypes from "../components/WasteType";
import HowItWorks from "../components/HowItWorks";
import LocationInfo from "../components/Location";
import EducationalTips from "../components/EducationalTips";

export default async function Dashboard() {
  return (
    <div>
      <main>
        <Hero />
        <AboutUs/>
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
