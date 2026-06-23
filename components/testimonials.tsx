"use client";

import { Quote, Star } from "lucide-react";
import { LeafDivider } from "@/components/decor";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Kind Words</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-forest sm:text-5xl">
            Loved by our clients
          </h2>
          <LeafDivider className="mt-7" />
        </Reveal>
      </div>

      <div className="group relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <figure
              key={i}
              className="flex w-[22rem] shrink-0 flex-col rounded-3xl border border-forest/10 bg-cream-soft p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-gold/40" />
                <div className="flex">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-forest/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-forest/10 pt-4">
                <p className="font-display text-lg font-semibold text-forest">
                  {t.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted">
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
