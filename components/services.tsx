"use client";

import Image from "next/image";
import {
  Sparkles,
  Leaf as LeafIcon,
  Flower2,
  HandHeart,
  Eye,
  Sun,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { LeafDivider } from "@/components/decor";
import { Reveal } from "@/components/reveal";
import { services, site, waLink, type ServiceCategory } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Leaf: LeafIcon,
  Flower2,
  HandHeart,
  Eye,
  Sun,
};

function ServiceCard({ cat, index }: { cat: ServiceCategory; index: number }) {
  const Icon = icons[cat.icon] ?? Sparkles;
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest/10 bg-cream-soft shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest/15">
        <div className="relative h-44 overflow-hidden">
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-soft/95 text-forest shadow-md">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-cream drop-shadow">
              {cat.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm leading-relaxed text-muted">{cat.blurb}</p>

          <ul className="mt-5 flex-1 space-y-2.5">
            {cat.treatments.map((t) => (
              <li
                key={t.name}
                className="flex items-baseline justify-between gap-3 border-b border-dashed border-forest/10 pb-2 text-sm"
              >
                <span className="font-medium text-forest">
                  {t.name}
                  {t.note && (
                    <span className="ml-1 text-xs font-normal text-muted">
                      ({t.note})
                    </span>
                  )}
                </span>
                <span className="whitespace-nowrap font-semibold text-gold">
                  {t.from}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={waLink(
              `Hi ${site.name}, I'd like to book a ${cat.title} treatment.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-forest/5 px-5 py-3 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book {cat.title}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Our Treatments</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-forest sm:text-5xl">
            Everything you need to feel wonderful
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Browse by category and tap to book the treatment you fancy straight
            on WhatsApp. Prices shown are a guide — just ask for the full list.
          </p>
          <LeafDivider className="mt-7" />
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((cat, i) => (
            <ServiceCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
