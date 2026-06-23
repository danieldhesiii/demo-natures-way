"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink } from "@/lib/site";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setBubble(true), 1200);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-5 right-5 z-50 flex items-end gap-3"
        >
          <AnimatePresence>
            {bubble && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="mb-1 hidden max-w-[15rem] rounded-2xl rounded-br-sm bg-cream-soft px-4 py-3 text-sm text-forest shadow-xl ring-1 ring-forest/10 sm:block"
              >
                <button
                  onClick={() => setBubble(false)}
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-forest text-cream"
                  aria-label="Dismiss"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
                <p className="font-semibold">Hi there! 👋</p>
                <p className="mt-0.5 text-muted">
                  Message us to book - we usually reply quickly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={waLink(`Hi ${site.name}, I'd like to book an appointment.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="relative flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
            style={{ height: "3.75rem", width: "3.75rem" }}
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
            <WhatsAppIcon className="relative h-8 w-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
