import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.fullName,
  description:
    "Kidderminster beauty salon established 1986 offering nails, facials, waxing, electrolysis, massage, spray tanning and slimming treatments.",
  foundingDate: site.established,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.town,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  sameAs: [site.socials.facebook, site.socials.instagram],
  priceRange: "££",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
