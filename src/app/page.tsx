import Comparison from "./components/SectionComparison";
import Features from "./components/SectionFeatures";
import Hero from "./components/SectionHero";
import Pricing from "./components/SectionPricing";
import SignUp from "./components/SectionSignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch">
      <Hero />
      <Features />
      <Comparison />
      {/* <Testimonials /> */}
      <Pricing />
      <SignUp />
    </main>
  );
}
