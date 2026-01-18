// app/components/SchemaLocalBusiness.tsx
import Script from "next/script";

export default function SchemaLocalBusiness() {
  const siteUrl = "https://mount-sinai-hospice.com";
  const email = "mahdi@mountsinaihospice.net";
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: "Mount Sinai Hospice",
    url: siteUrl,
    email,
    // Category signal
    keywords: ["Hospice", "Hospice care", "Home hospice", "End-of-life care"],
    telephone: ["+19562301627", "+19565450234"],
    sameAs: [
      "https://www.instagram.com/mountsinaihospice/?igsh=YTdnYzFlcThwbXk%3D",
      "https://www.facebook.com/share/p/9VigKkevUDCXzEST/?mibextid=QwDbR1",
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Cameron County, TX" },
      { "@type": "AdministrativeArea", name: "Hidalgo County, TX" },
      { "@type": "AdministrativeArea", name: "Willacy County, TX" },
      { "@type": "AdministrativeArea", name: "Starr County, TX" },
      { "@type": "State", name: "Texas" },
    ],
    department: [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        name: "Mount Sinai Hospice - Harlingen",
        telephone: "+19562301627",
        email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "513 E Jackson Ave Suite 201",
          addressLocality: "Harlingen",
          addressRegion: "TX",
          postalCode: "78550",
          addressCountry: "US",
        },
      },
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        name: "Mount Sinai Hospice - Victoria",
        telephone: "+19565450234",
        email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "101 Goodwin Ave Suite 350",
          addressLocality: "Victoria",
          addressRegion: "TX",
          postalCode: "77901",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <Script id="schema-local-business" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}
