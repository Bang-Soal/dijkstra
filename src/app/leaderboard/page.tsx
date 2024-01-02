// libs
import { Metadata } from "next";
import { LeaderboardHero } from "./Hero";

export const metadata: Metadata = {
  title: "Leaderboard | BangSoal",
  description: "Ranking Terbaik",
};

export default function LeaderboardPage() {
  return (
    <main>
      <LeaderboardHero />
    </main>
  );
}
