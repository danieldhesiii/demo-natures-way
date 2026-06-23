"use client";

import Image from "next/image";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Leaf } from "@/components/decor";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const values = [
  {
    icon: HeartHandshake,
    title: "Genuinely caring",
    text: "Discreet, friendly therapists who treat every client like an old friend.",
  },
  {
    icon: ShieldCheck,
    title: "Spotlessly clean",
    text: "A calm, hygienic space where you can completely switch off and unwind.",
  },
  {
    icon: Sparkles,
    title: "Decades of skill",
    text: "Qualified experts - some with 30+ years - at honest, reasonable prices.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-forest py-24 text-cream sm:py-32">
      <Leaf className="pointer-events-none absolute right-6 top-10 hidden h-40 w-40 text-cream/5 lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] shadow-2xl ring-1 ring-cream/10">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1100&q=80&auto=format&fit=crop"
                alt="Inside Nature's Way Beauty Salon"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3 -top-3 rounded-2xl bg-gold px-6 py-4 text-center text-forest-deep shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-bold leading-none">
                Est {site.established}
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest">
                Kidderminster
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-gold-soft">Our Story</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Nearly four decades of natural beauty
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty leading-relaxed text-cream/80">
              Since {site.established}, Nature&apos;s Way has been a much-loved
              part of {site.town}. What began as a small salon has grown into a
              trusted name for beauty and wellbeing - built on caring, personal
              service and a passion for helping people look and feel their best.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-cream/80">
              Our highly qualified therapists bring extraordinary experience to
              every treatment, from quick touch-ups to indulgent pampering. You
              are always in safe, expert hands.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.15 + i * 0.08}>
                <div className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                  <v.icon className="h-6 w-6 text-gold-soft" />
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/70">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
