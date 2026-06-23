"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { LeafDivider } from "@/components/decor";
import { Reveal } from "@/components/reveal";
import { site, waLink } from "@/lib/site";

export function Visit() {
  const { address, hours } = site;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    address.mapQuery
  )}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address.mapQuery
  )}`;
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <section id="visit" className="scroll-mt-24 bg-cream-deep/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Find Us</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-forest sm:text-5xl">
            Come and visit
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Right in the heart of {site.town}. Pop in, call, or message us on
            WhatsApp - whichever is easiest for you.
          </p>
          <LeafDivider className="mt-7" />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* details */}
          <Reveal className="flex flex-col gap-5">
            <div className="rounded-3xl border border-forest/10 bg-cream-soft p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest">
                    Our Salon
                  </h3>
                  <p className="mt-1 text-muted">
                    {address.line1}
                    <br />
                    {address.town}, {address.postcode}
                  </p>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
                  >
                    <Navigation className="h-4 w-4" /> Get directions
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-forest/10 bg-cream-soft p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-forest" />
                <h3 className="font-display text-xl font-semibold text-forest">
                  Opening Hours
                </h3>
              </div>
              <dl className="mt-4 space-y-2">
                {hours.map((h) => {
                  const isToday = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${
                        isToday
                          ? "bg-forest/5 font-semibold text-forest"
                          : "text-muted"
                      }`}
                    >
                      <dt>
                        {h.day}
                        {isToday && (
                          <span className="ml-2 rounded-full bg-gold/20 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-gold">
                            Today
                          </span>
                        )}
                      </dt>
                      <dd>{h.time}</dd>
                    </div>
                  );
                })}
              </dl>
              <p className="mt-3 text-xs text-muted">
                Hours shown are a guide - please confirm when booking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={waLink(`Hi ${site.name}, I'd like to book an appointment.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-forest px-4 py-4 text-sm font-semibold text-cream transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" /> {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          {/* map */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[24rem] overflow-hidden rounded-3xl border border-forest/10 shadow-lg">
              <iframe
                title="Map to Nature's Way Beauty Salon"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[24rem] w-full grayscale-[0.2]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
