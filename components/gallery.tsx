"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react";
import { LeafDivider } from "@/components/decor";
import { Reveal } from "@/components/reveal";
import { gallery, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + gallery.length) % gallery.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 bg-gradient-to-b from-cream to-cream-deep/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">The Gallery</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-forest sm:text-5xl">
            A peek inside the salon
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Real moments, treatments and results - straight from our socials.
            Tap any photo to take a closer look.
          </p>
          <LeafDivider className="mt-7" />
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 0.06}
              className={cn(
                item.span === "tall" && "row-span-2",
                item.span === "wide" && "col-span-2"
              )}
            >
              <button
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-forest/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest-deep/0 transition-colors duration-500 group-hover:bg-forest-deep/30" />
                <span className="absolute inset-x-0 bottom-0 translate-y-full p-4 text-left text-sm font-medium text-cream transition-transform duration-500 group-hover:translate-y-0">
                  {item.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-sm text-muted">Follow along for the latest looks:</p>
          <div className="flex gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream-soft px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream-soft px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[78vh] w-full max-w-4xl overflow-hidden rounded-3xl"
            >
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
