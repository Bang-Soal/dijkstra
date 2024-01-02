// libs
import { Metadata } from "next";
import { LeaderboardHero } from "./Hero";
import { LeaderboardModule } from "./LeaderboardModule";

export const metadata: Metadata = {
  title: "Leaderboard | BangSoal",
  description: "Ranking Terbaik",
};

export default function LeaderboardPage() {
  return (
    <main>
      <LeaderboardHero />
      <LeaderboardModule />
    </main>
  );
}
