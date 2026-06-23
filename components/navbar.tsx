"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { Leaf } from "@/components/decor";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-forest/10 py-3 shadow-sm" : "py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <Leaf className="h-7 w-7 text-forest transition-transform duration-500 group-hover:rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-wide text-forest">
              {site.fullName.split(" Beauty")[0]}
            </span>
            <span className="eyebrow text-[0.55rem] text-gold">
              Beauty Salon · Est {site.established}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-forest/80 transition-colors hover:text-forest"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={waLink(`Hi ${site.name}, I'd like to book an appointment.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition-all hover:bg-forest-deep hover:shadow-forest/30"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-forest md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="glass mx-4 mt-3 overflow-hidden rounded-3xl border border-forest/10 p-4 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-lg font-medium text-forest transition-colors hover:bg-forest/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink(`Hi ${site.name}, I'd like to book an appointment.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-forest px-5 py-4 text-base font-semibold text-cream"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
