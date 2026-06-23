import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { Leaf } from "@/components/decor";
import { site, waLink } from "@/lib/site";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Leaf className="h-8 w-8 text-gold" />
              <div className="leading-none">
                <p className="font-display text-2xl font-semibold text-cream">
                  {site.fullName.split(" Beauty")[0]}
                </p>
                <p className="eyebrow mt-1 text-[0.55rem] text-gold-soft">
                  Beauty Salon · Est {site.established}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-cream/60">
              {site.town}&apos;s loved beauty salon since {site.established}.
              Expert nails, facials, waxing, massage and more - the natural way.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-[#25D366]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-forest-deep"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-forest-deep"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/60 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                <span>
                  {site.address.line1}, {site.address.town},{" "}
                  {site.address.postcode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-soft" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-soft" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>
            Beauty, the natural way · {site.town}
          </p>
        </div>
      </div>
    </footer>
  );
}
