export const SITE = {
  name: "Patts Vee",
  full: "Patts Vee Events & Catering",
  tagline: "Where every event becomes a feast to remember",
  phone: "+254 722 113855",
  phoneHref: "tel:+254722113855",
  whatsapp: "https://wa.me/254722113855",
  location: "Hass Petrol Station, Migori",
  locationMap: "https://www.google.com/maps/search/?api=1&query=Hass+Petrol+Station+Migori",
  email: "hello@pattsvee.co.ke",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#testimonials" },
];

export const STATS = [
  { value: "12+", label: "Years of service" },
  { value: "800+", label: "Events catered" },
  { value: "50k+", label: "Guests served" },
  { value: "100%", label: "Fresh, made to order" },
];

export const SERVICES = [
  {
    title: "Weddings",
    desc: "Bespoke wedding feasts — from intimate ceremonies to grand receptions, plated or lavish buffet.",
    icon: "HeartHandshake",
    items: ["Custom tasting menus", "Full table styling", "Cake & dessert stations"],
  },
  {
    title: "Corporate Events",
    desc: "Polished catering for conferences, launches and galas that keep your guests impressed.",
    icon: "Briefcase",
    items: ["Breakfast & lunch buffets", "Coffee & canapé service", "On-site chefs & waitstaff"],
  },
  {
    title: "Private Celebrations",
    desc: "Birthdays, anniversaries and family gatherings served with warmth and flair.",
    icon: "PartyPopper",
    items: ["Grill & barbecue stations", "Themed menus", "Personal chef experiences"],
  },
  {
    title: "Funerals & Memorials",
    desc: "Dignified, comforting catering that lets you focus on what matters most.",
    icon: "Flower2",
    items: ["Respectful service", "Flexible headcounts", "Traditional dishes"],
  },
  {
    title: "Cocktail & Canapés",
    desc: "Elegant bite-sized artistry and signature drinks for stylish standing receptions.",
    icon: "Martini",
    items: ["Gourmet canapés", "Mocktail & juice bars", "Live serving stations"],
  },
  {
    title: "Outside Caterings",
    desc: "We bring the full experience anywhere — equipment, crew and flavour included.",
    icon: "Tent",
    items: ["Marquees & setup", "Full logistics", "Any location in Kenya"],
  },
];

export const GALLERY = [
  { src: "/images/gallery-wedding.jpg", alt: "Elegant wedding banquet table", tall: true },
  { src: "/images/gallery-buffet.jpg", alt: "Lavish gourmet buffet spread" },
  { src: "/images/gallery-canapes.jpg", alt: "Gourmet canapés on slate board" },
  { src: "/images/gallery-chef.jpg", alt: "Chef plating a dessert", tall: true },
  { src: "/images/gallery-dessert.jpg", alt: "Tiered dessert display" },
  { src: "/images/gallery-event.jpg", alt: "Outdoor garden party catering" },
];

export const PACKAGES = [
  {
    name: "Essential",
    price: "KSh 1,200",
    unit: "per guest",
    tagline: "Intimate gatherings done beautifully",
    featured: false,
    features: [
      "3-course set menu",
      "Buffet-style service",
      "Serving crew included",
      "Basic table setup",
      "Up to 100 guests",
    ],
  },
  {
    name: "Signature",
    price: "KSh 2,400",
    unit: "per guest",
    tagline: "Our most-loved full experience",
    featured: true,
    features: [
      "5-course custom menu",
      "Plated or premium buffet",
      "Full styling & linens",
      "Dedicated event manager",
      "Canapé & drinks service",
      "Any headcount",
    ],
  },
  {
    name: "Luxe",
    price: "Custom",
    unit: "tailored quote",
    tagline: "No-limits luxury, fully bespoke",
    featured: false,
    features: [
      "Personal chef & tasting",
      "Live cooking stations",
      "Premium décor & marquee",
      "Full logistics & staff",
      "Bar & mixology service",
      "White-glove everything",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Patts Vee made our wedding unforgettable. Every single guest asked who catered — the food was art on a plate.",
    name: "Achieng & Brian",
    role: "Wedding, Migori",
  },
  {
    quote:
      "Professional, punctual and absolutely delicious. They handled our 400-guest corporate gala flawlessly.",
    name: "David Otieno",
    role: "HR Director, Lake Region Co.",
  },
  {
    quote:
      "From the tasting to the last dessert, the team was warm and world-class. We only book Patts Vee now.",
    name: "Grace Wanjiru",
    role: "Private celebration host",
  },
];

export const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Private Celebration",
  "Funeral / Memorial",
  "Cocktail Reception",
  "Other",
];
