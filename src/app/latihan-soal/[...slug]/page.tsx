// libs
import type { Metadata } from "next";
import { QuestionContainer } from "../components/QuestionContainer";
import { categoryMap } from "../constants";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const title = `${categoryMap[slug[0]] || "Latihan Soal"} | BangSoal`;
  return {
    title,
    description: "BangSoal - Latihan Soal Page",
  };
}

export default function LatihanSoal({
  params,
}: Readonly<{ params: { slug: string[] } }>) {
  return (
    <main className="min-h-screen py-10">
      <QuestionContainer slug={params.slug} />
    </main>
  );
}
