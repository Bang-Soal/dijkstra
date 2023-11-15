import Hero from "./components/SectionHero";
import Features from "./components/SectionFeatures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch">
      <Hero />
      <Features />
    </main>
  );
}
