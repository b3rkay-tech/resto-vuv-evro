import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Ресто в евро | Калкулатор за ресто в EUR (България 2026+)",
    template: "%s | Ресто в евро",
  },
  description:
    "Модерен калкулатор за изчисляване на ресто в евро. България прие еврото на 1 януари 2026. Поддръжка на лева за преходен период.",
  keywords: [
    "ресто калкулатор",
    "евро калкулатор",
    "калкулатор за ресто",
    "ресто в евро",
    "България евро 2026",
    "евро България",
    "плащане в евро",
    "ресто при плащане",
    "Bulgaria Euro 2026",
    "Bulgaria tip calculator",
    "EUR calculator Bulgaria",
    "Euro adoption Bulgaria",
  ],
  authors: [{ name: "Rambo Miksa" }],
  creator: "Rambo Miksa",
  publisher: "Rambo Miksa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://resto-v-evro.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "bg-BG": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "/",
    siteName: "Ресто в евро",
    title: "Ресто в евро | Калкулатор за ресто в EUR (България 2026+)",
    description:
      "Модерен калкулатор за изчисляване на ресто в евро. България прие еврото на 1 януари 2026. Поддръжка на лева за преходен период.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ресто в евро - Калкулатор",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ресто в евро | Калкулатор за ресто",
    description:
      "Модерен калкулатор за изчисляване на ресто в евро. България прие еврото на 1 януари 2026",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  } catch (e) {}
})();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Ресто в евро",
              description:
                "Модерен калкулатор за изчисляване на ресто в евро. България прие еврото на 1 януари 2026",
              url: "https://resto-v-evro.vercel.app",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              creator: {
                "@type": "Person",
                name: "Rambo Miksa",
              },
              inLanguage: ["bg", "en"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
