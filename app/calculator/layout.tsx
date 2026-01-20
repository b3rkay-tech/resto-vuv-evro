import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калкулатор",
  description:
    "Изчислете рестото в евро. България прие еврото на 1 януари 2026. Бърз и точен калкулатор с поддръжка на лева за преходен период.",
  openGraph: {
    title: "Калкулатор за ресто | Ресто в евро (2026+)",
    description:
      "Изчислете рестото в евро. България прие еврото на 1 януари 2026. Бърз и точен калкулатор.",
    url: "/calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
