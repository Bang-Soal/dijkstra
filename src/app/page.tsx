import Hero from "./components/SectionHero";
import Features from "./components/SectionFeatures";
import Comparison from "./components/SectionComparison";
import Testimonials from "./components/SectionTestimonials";
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
      {/* <SignUp /> */}
    </main>
  );
}
