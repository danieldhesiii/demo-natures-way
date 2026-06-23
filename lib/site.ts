/* ------------------------------------------------------------------
   Single source of truth for all editable content.
   Swap photos, prices, phone numbers and copy here — nothing else.
-------------------------------------------------------------------*/

export const site = {
  name: "Nature's Way",
  fullName: "Nature's Way Beauty Salon",
  tagline: "Beauty, the natural way.",
  established: "1986",
  town: "Kidderminster",

  // --- Contact -----------------------------------------------------
  // WhatsApp uses the MOBILE number in international format (no +, no spaces).
  whatsapp: "447926594344", // 07926 594344
  phoneDisplay: "01562 755109",
  phoneTel: "+441562755109",
  email: "hello@natureswaybeauty-kidderminster.co.uk", // TODO: confirm real inbox
  address: {
    line1: "27 Comberton Hill",
    town: "Kidderminster",
    postcode: "DY10 1QX", // TODO: confirm exact postcode
    mapQuery: "Nature's Way Beauty Salon, 27 Comberton Hill, Kidderminster",
  },

  // --- Socials -----------------------------------------------------
  socials: {
    facebook:
      "https://www.facebook.com/people/Natures-Way-Beauty-Salon-Kidderminster/100063465643725/",
    instagram:
      "https://www.instagram.com/explore/locations/1029162560/natures-way-beauty-salon/",
  },

  // --- Opening hours (TODO: confirm with client) -------------------
  hours: [
    { day: "Monday", time: "9:00 – 17:30" },
    { day: "Tuesday", time: "9:00 – 17:30" },
    { day: "Wednesday", time: "9:00 – 17:30" },
    { day: "Thursday", time: "9:00 – 19:00" },
    { day: "Friday", time: "9:00 – 17:30" },
    { day: "Saturday", time: "9:00 – 16:00" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// -------------------------------------------------------------------
// Service categories. Prices are placeholders ("From £xx") — update
// each `from` value with the salon's real price list.
// -------------------------------------------------------------------
export type Treatment = { name: string; from: string; note?: string };
export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: string; // lucide icon name
  image: string;
  treatments: Treatment[];
};

export const services: ServiceCategory[] = [
  {
    id: "nails",
    title: "Nails",
    blurb: "Flawless hands and feet — from a natural tidy-up to long-lasting gel and statement nail art.",
    icon: "Sparkles",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80&auto=format&fit=crop",
    treatments: [
      { name: "Express Manicure", from: "From £18" },
      { name: "Luxury Spa Pedicure", from: "From £34" },
      { name: "Gel Polish (hands or feet)", from: "From £26" },
      { name: "Gel / Acrylic Extensions", from: "From £40" },
      { name: "Nail Art", from: "From £4", note: "per nail" },
    ],
  },
  {
    id: "facials",
    title: "Facials & Skincare",
    blurb: "Tailored facials that cleanse, renew and glow — using techniques refined over three decades.",
    icon: "Leaf",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80&auto=format&fit=crop",
    treatments: [
      { name: "Classic Cleansing Facial", from: "From £38" },
      { name: "Deep Renewal Facial", from: "From £52" },
      { name: "Anti-Ageing Facial", from: "From £58" },
      { name: "Dermaplaning", from: "From £45" },
    ],
  },
  {
    id: "waxing",
    title: "Waxing & Electrolysis",
    blurb: "Smooth, lasting results with gentle waxing and expert electrolysis for permanent hair removal.",
    icon: "Flower2",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80&auto=format&fit=crop",
    treatments: [
      { name: "Half Leg Wax", from: "From £18" },
      { name: "Bikini / Brazilian", from: "From £22" },
      { name: "Facial Waxing", from: "From £9" },
      { name: "Electrolysis", from: "From £16", note: "per 15 mins" },
    ],
  },
  {
    id: "massage",
    title: "Massage & Body",
    blurb: "Unwind with therapeutic massage that eases tension and restores a sense of calm.",
    icon: "HandHeart",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80&auto=format&fit=crop",
    treatments: [
      { name: "Back, Neck & Shoulder", from: "From £30" },
      { name: "Full Body Swedish", from: "From £48" },
      { name: "Aromatherapy Massage", from: "From £52" },
      { name: "Hot Stone Massage", from: "From £58" },
    ],
  },
  {
    id: "brows-lashes",
    title: "Brows & Lashes",
    blurb: "Frame your face beautifully with precision shaping, tinting and luscious lashes.",
    icon: "Eye",
    image:
      "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=1200&q=80&auto=format&fit=crop",
    treatments: [
      { name: "Brow Shape & Tint", from: "From £16" },
      { name: "Lash Tint", from: "From £14" },
      { name: "Lash Lift", from: "From £38" },
      { name: "Classic Lash Extensions", from: "From £55" },
    ],
  },
  {
    id: "tanning",
    title: "Tanning & Slimming",
    blurb: "A natural-looking glow and confidence-boosting body treatments, all year round.",
    icon: "Sun",
    image:
      "https://images.unsplash.com/photo-1532926381893-7542290edf1d?w=1200&q=80&auto=format&fit=crop",
    treatments: [
      { name: "Full Body Spray Tan", from: "From £22" },
      { name: "Express Tan", from: "From £16" },
      { name: "Body Contouring", from: "From £40" },
      { name: "Slimming Treatments", from: "Enquire" },
    ],
  },
];

// -------------------------------------------------------------------
// Gallery — placeholder imagery. Replace each `src` with photos from
// the salon's Facebook / Instagram. Keep a mix of tall & wide.
// -------------------------------------------------------------------
export type GalleryItem = { src: string; alt: string; span?: "tall" | "wide" };

export const gallery: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&q=80&auto=format&fit=crop", alt: "Relaxing salon interior", span: "tall" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80&auto=format&fit=crop", alt: "Manicure in progress" },
  { src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80&auto=format&fit=crop", alt: "Facial treatment", span: "wide" },
  { src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80&auto=format&fit=crop", alt: "Gel nail finish" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80&auto=format&fit=crop", alt: "Spa stones and candles", span: "tall" },
  { src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop", alt: "Massage therapy" },
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80&auto=format&fit=crop", alt: "Skincare products" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=900&q=80&auto=format&fit=crop", alt: "Eyebrow shaping", span: "wide" },
  { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&q=80&auto=format&fit=crop", alt: "Pedicure detail" },
];

export const testimonials = [
  {
    quote:
      "I've been coming here for years and wouldn't go anywhere else. The staff are so caring and professional — I always leave feeling wonderful.",
    name: "Sarah H.",
    detail: "Facials & Massage",
  },
  {
    quote:
      "Spotlessly clean, lovely atmosphere and the most relaxing treatments in Kidderminster. Wanda and the team are simply the best.",
    name: "Joanne P.",
    detail: "Spa Pedicure",
  },
  {
    quote:
      "Reasonable prices and genuine expertise. You can tell they've been doing this for decades — nothing is ever too much trouble.",
    name: "Megan L.",
    detail: "Waxing & Brows",
  },
];
