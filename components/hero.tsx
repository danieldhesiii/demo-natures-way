"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { Leaf } from "@/components/decor";
import { site, waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-28 pb-16"
    >
      {/* soft botanical background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[34rem] w-[34rem] rounded-full bg-sage-soft/30 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold-soft/25 blur-[120px]" />
      </div>
      <Leaf className="pointer-events-none absolute -left-6 top-32 hidden h-44 w-44 rotate-12 text-sage/20 md:block animate-float" />
      <Leaf className="pointer-events-none absolute right-[44%] bottom-8 hidden h-24 w-24 -rotate-12 text-sage/15 lg:block" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream-soft/70 px-4 py-1.5"
          >
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </span>
            <span className="eyebrow text-[0.62rem] text-forest">
              Loved in {site.town} since {site.established}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-forest sm:text-6xl lg:text-7xl"
          >
            Beauty,
            <br />
            the <span className="gold-text font-semibold italic">natural</span>{" "}
            way.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
          >
            Nails, facials, waxing, massage and more — delivered by therapists
            with decades of experience, in {site.town}&apos;s warmest little
            salon. Relax, refresh, and leave glowing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
          >
            <a
              href={waLink(`Hi ${site.name}, I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#25D366]/25 transition-all hover:scale-[1.03] hover:shadow-[#25D366]/40 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/20 bg-cream-soft px-7 py-4 text-base font-semibold text-forest transition-all hover:border-forest/40 hover:bg-cream-deep sm:w-auto"
            >
              Explore Treatments
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0"
          >
            {[
              { n: "38+", l: "Years caring" },
              { n: "6", l: "Treatment types" },
              { n: "100s", l: "Happy regulars" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <dt className="font-display text-3xl font-semibold text-forest">
                  {s.n}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {s.l}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tr-[5rem] shadow-2xl shadow-forest/20 ring-1 ring-forest/10">
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1100&q=80&auto=format&fit=crop"
              alt="Relaxing treatment at Nature's Way Beauty Salon"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent" />
          </div>

          {/* floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-forest/10 bg-cream-soft/90 px-5 py-3.5 shadow-xl backdrop-blur sm:-left-8"
          >
            <Leaf className="h-9 w-9 text-gold" />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold text-forest">
                Expert therapists
              </p>
              <p className="text-xs text-muted">30+ years experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-forest/50 transition-colors hover:text-forest md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
