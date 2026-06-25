import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const SITE_URL = "https://surfix.co.za";
const TITLE =
  "SURFIX — Surfboard Ding Repairs in Noordhoek, Cape Town | You Ding It, We Fix It";
const DESCRIPTION =
  "SURFIX is Mathew's surfboard ding-repair workshop in Noordhoek, Cape Town. We repair surfboards, kneeboards, surfskis and SUPs — from small dings and cracks to snapped boards and fin-box damage. Free quotes, fast turnaround. WhatsApp a photo to get started.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "surfboard repair Cape Town",
    "surfboard ding repair",
    "ding repair Noordhoek",
    "fix surfboard near me",
    "snapped surfboard repair",
    "SUP repair Cape Town",
    "surfski repair",
    "kneeboard repair",
    "fin box repair",
    "fibreglass repair",
    "epoxy surfboard repair",
    "Noordhoek Boat Storage Yard",
  ],
  authors: [{ name: "SURFIX" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SURFIX",
    title: "SURFIX — Surfboard Ding Repairs in Noordhoek, Cape Town",
    description:
      "You ding it, we fix it. Fast surfboard, kneeboard, surfski & SUP repairs in Noordhoek. WhatsApp a photo for a free quote.",
    url: "/",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURFIX — Surfboard Ding Repairs, Noordhoek Cape Town",
    description:
      "You ding it, we fix it. Free quotes, fast turnaround. WhatsApp a photo to start.",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Noordhoek, Cape Town",
    "geo.position": "-34.1006;18.3776",
    ICBM: "-34.1006, 18.3776",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://surfix.co.za/#business",
  name: "SURFIX",
  alternateName: "Surfix Surfboard Repairs",
  slogan: "You ding it. We fix it.",
  description:
    "Surfboard ding and structural repair workshop in Noordhoek, Cape Town. We repair surfboards, kneeboards, surfskis and SUPs — from small dings and cracks to snapped boards and fin-box damage. Free quotes and fast turnaround.",
  url: "https://surfix.co.za/",
  telephone: "+27747762091",
  image: "https://surfix.co.za/opengraph-image",
  priceRange: "$$",
  currenciesAccepted: "ZAR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Noordhoek Boat Storage Yard",
    addressLocality: "Noordhoek",
    addressRegion: "Western Cape",
    postalCode: "7979",
    addressCountry: "ZA",
  },
  geo: { "@type": "GeoCoordinates", latitude: -34.1006, longitude: 18.3776 },
  hasMap:
    "https://www.google.com/maps/dir/?api=1&destination=Noordhoek+Boat+Storage+Yard%2C+Cape+Town",
  areaServed: [
    { "@type": "City", name: "Cape Town" },
    { "@type": "Place", name: "Noordhoek" },
    { "@type": "Place", name: "Kommetjie" },
    { "@type": "Place", name: "Muizenberg" },
    { "@type": "Place", name: "Fish Hoek" },
    { "@type": "Place", name: "Scarborough" },
    { "@type": "Place", name: "Long Beach" },
  ],
  knowsAbout: [
    "surfboard repair",
    "ding repair",
    "epoxy repair",
    "fibreglass repair",
    "fin box repair",
    "SUP repair",
    "surfski repair",
    "kneeboard repair",
    "snapped surfboard repair",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+27747762091",
    availableLanguage: ["English", "Afrikaans"],
  },
  makesOffer: [
    "Surfboard ding repair",
    "Kneeboard repair",
    "Surfski repair",
    "SUP (stand-up paddleboard) repair",
    "Fin box repair",
    "Snapped board / structural repair",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Board repair services",
    itemListElement: ["Surfboards", "Kneeboards", "Surfskis", "SUPs"].map(
      (name) => ({ "@type": "OfferCatalog", name }),
    ),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "Where can I get my surfboard repaired in Cape Town?",
      "SURFIX repairs surfboards in Noordhoek, Cape Town. Drop-offs are at the Noordhoek Boat Storage Yard. WhatsApp a photo of your board to Mathew on 074 776 2091 for a free quote.",
    ],
    [
      "How much does a surfboard ding repair cost?",
      "Quotes are free. Send a photo of the damage on WhatsApp (074 776 2091) and Mathew will give you a price before any work starts. Cost depends on the size and type of repair.",
    ],
    [
      "How long does a surfboard repair take?",
      "Turnaround is fast. Small dings are usually quick, while structural or snapped-board repairs take longer. A collection time will be set on WhatsApp when you get the quote.",
    ],
    [
      "What kinds of boards does SURFIX fix?",
      "SURFIX repairs surfboards, kneeboards, surfskis and SUPs (stand-up paddleboards), including epoxy and fibreglass/poly construction. Repairs cover dings, cracks, fin boxes, delamination and snapped boards.",
    ],
    [
      "How do I start a repair?",
      "Message Mathew on WhatsApp at 074 776 2091 with a photo of your board, get a free quote, then drop the board off at the Noordhoek Boat Storage Yard.",
    ],
    [
      "Do you repair snapped surfboards?",
      "Yes. SURFIX does structural repairs including snapped boards and broken fin boxes, not just small dings.",
    ],
    [
      "Where do I drop off my board?",
      "Drop-offs are at the Noordhoek Boat Storage Yard in Noordhoek, Cape Town. Message first on WhatsApp to arrange a time.",
    ],
  ].map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </body>
    </html>
  );
}
