import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import WasteTypes from "../components/WasteType";
import CallToAction from "../components/CallToAction";

export default async function Dashboard() {
  return (
    <div className="">
        <Hero/>
        <HowItWorks/>
        <Benefits/>
        <WasteTypes/>
        <CallToAction/>
    </div>
  );
}
