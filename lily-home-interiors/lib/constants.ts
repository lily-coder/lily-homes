import type {
  NavLink,
  PortfolioItem,
  ServiceCardData,
  ServiceGridItem,
  Stat,
  ContactInfo,
  SocialLink,
} from "./types";

export const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDL5BPSwpinFmVqty3K5ghR5Tv6h34gHm-FVu-OEawOvL89hNOOPgUdAWxbbLShg_k1iHbMwAw06fQYv8u7wNcfyScsWeKDLPSYT-qzh5wT44GbnnUACW1h51MZiJTWrAJqwejBd7h2RNc-9ToTcrW67y7bSQ4HmXoTRn3QXaHEa3ZuX3vAt5YsKXkDovX1ppQMD5MG40pvxoa29kDmz0dJRB6HQlkHzuNEAoP6df2t_CL9JAfEAjgZ3YhKkyAJR741xQuL-nByjPw";

export const WHATSAPP_URL =
  "https://wa.me/254723885170?text=Hello%20Lily%20Home%20Interiors%2C%20I'd%20like%20to%20inquire%20about%20your%20services.";

export const CONTACT_EMAIL = "lily.homes.interiors@gmail.com";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/services#portfolio" },
  { label: "Contact", href: "/services#contact" },
];

export const HOME_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2weR1UmTxcWjmOYrkcy5WhwbaMAPnuLxLHWuNmsFnoBSC9SAqC39TRJ1o0GLnW4Ny2mpOaQRJQjEQm6pPd6RvjOgj6vBuIgsEVUavu0Ra_e_l7DdsHlmxaTg97Ttg8kfR7f_XS0KokcIwQKe5kbNRMa_nagutSS4MEhPqcBDD5_D48XdffDfqr-GKsBczw0w8E7lhRVwupmUMnrCeE26RNzwuuJTwj5dc5b73TtvvX5nmWNISDUghMBlPWfMFxxWQT3gLqDW8yU8";

export const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Vc9a8qCXXzvxl-Ngd5fp-neE0mEb3dpITmpWEyWwaigH3T9b7bcHrQYjfUUj_80r6_ZpyOYcMG3WIHWp8GxqcFfX_TVDBBhFVkN2N2ZICeXbzv-erYdRAKSgqJanEacko81TcYUUMZhOLSPLu38JDvudbYdNMa7dwFhsuJm-Aq3dIl8QMVukoTCtGVstdOFFdIuz4kJC-Oc-_bhvUPRUPCUOrYMzFIgiCt0Qo8N6_GngcGA2gOEMGvRJmF_apF_o5MN-ztwXn7k";

export const SERVICES_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLXDGN5k3at006PY6nC6biFqzicSfddmUh9h8l3WA13WQoDWblprPxv2uQJU8Z37GHpgMWfzb2bmad2lrZhWAaQop3wO2sJZyGPEZnCtiqYgJRgFGYZff8lrBnC40iKI3JBt4h2NRJRBGRIVu53lzIB5zxFIWAqvBx7PZRjjrtP_YpGL2b7JIYHwxNaACMheNnuS1cY_Q2U3TV9nQ5TKpyDbOAb9CA8Ls5z1BsoBLw5weJAC8aA0QDdZXmSnztgzKDEu46B8iqSnY";

export const HOME_SERVICES: ServiceCardData[] = [
  {
    icon: "videocam",
    title: "Virtual Consultations",
    description:
      "Expert design guidance from the comfort of your home, anywhere in the world.",
    price: "KES 5,000",
    priceLabel: "Starting at",
    variant: "light",
  },
  {
    icon: "auto_awesome",
    title: "Room Makeovers",
    description:
      "A focused transformation of single spaces into bespoke sanctuaries.",
    price: "KES 20,000",
    priceLabel: "Starting at",
    variant: "dark",
  },
  {
    icon: "architecture",
    title: "Full Renovations",
    description:
      "Comprehensive design and project management for your entire residence.",
    price: "Custom Quote",
    priceLabel: "Starting at",
    variant: "light",
    features: ["Project Management", "Material Sourcing", "Contractor Liaison"],
  },
];

export const HOME_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: "https://lh3.googleusercontent.com/aida/AP1WRLv1IBA42jdf4Y_2e1nnfhMEydyArJEye8Ovo4mt8rkvT3mD1zTRpgVIjWaJKZ8K0erfZt6ge0UjIBYvxdcnYIdfpmLDn240EZqiTwiSokXT92MiBufwm5PrwAYBGQgdf1tf7FD-us33Pa7U03Sr0QvVkO0IMROaTNhMElfeUZyJTVQqv0ILjRjyMLUAStXTFpr5AFWk6-jlSB_SwaX_Ra6se0rLdUHQkaP_qEonN6uDDdKtr3HYeNFplao",
    alt: "Luxury Living Room",
    label: "Living Sanctuaries",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV_9Cut0HX9FkQ2tkFzThwpaVigu5Yiac6Nmfj8_0M9ADFF2x0SMV3rvoQFiuokwc9kUxCAVDOvARltXr1Z-mDZqWOqDQsoe8Dxn9qN8q0LGhJXuDbI3L_jSkeyPHj3Xk5orAyr-kZsB0iJC3nXIw7i-E7s-aHwI68EfvGn0qukZQiE9P6PBvt8UevGYzdmKe-b7ySKvkZUeMD1wiR_7CGFt9fRrP1wpz9lugu4mps6lMxSUDCnGunqORQpCT477f2idQlgrKqlJU",
    alt: "Luxury Bedroom Suite",
    label: "Restful Retreats",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKzxQT88qXwB0lgQHMJ0rKS5wnOYDT2E6_HGmWZN8TYNr7iuzSR9dQEwKdrjZF9hF_Wxmce5_bdtZipiMdIhqOW5sdsQnEQcKlCAp1MYJ0vKZ21BV1mcfgXMD-MJJjt6TU_QMemAKnmLFm6BvwrTpRt_B5DHCzpD3gwHpaU3FHNfdZHp3nvba4gllhgrRr6P1BfHv_cZONnBtpJrNi0_3aJdy68O0dB-IpLKPiEePHcZATDdoyNI2y8RsbN91sdQ8DEk3pKRBQwrs",
    alt: "Artisanal Interior Detail",
    label: "Bespoke Details",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoU5PK7JeP6mKHUDkT3XEvxsk1w_E3MRcrUMMcpuzLxv_uiBmsUdR0ofzoFhjNwnqxFxpS_YuEQvpc2bng0Y_--Y8YYn7w5UCIMG3k5-rICzrgNMD29_2bZsODFQidBaTz9awbSEXdgXQUbHbthH8B10KZX3O3lPUnpT8AYtlqEdLFq2bQWW4Dfqqo7grDtvBdypPXVOgz4pe1n3sEL9F4jq0vnYukwOBbqIWXjp2wIH4QV8xQiZyHHJ1Nz-YnQFMcdYvythRckJw",
    alt: "Classic Interior Design",
    label: "Classic Elegance",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvk3ckIqahUOABGulwZle5qWKuOtdxR9O_cXl_axLu_cuJPU13GUph4_ibRLqcbzLTqB5tlcLWSzcJeQktV3L7ka4gmk1AEeGV8g0uqTcBQtC6NAkvd4EKQnBdW-BGm7454QM9auFUjksUzmFvmR_avuZeA3NezQcfrERrt39bgqw5uA1Urds7DmLTbegGbbaqFuXuS3ZgXfvrgqth9I41LTpKRH3H4S6ER1KZQvHOZvBlTEe6XAYquBIz6SzIkrIg7eO3_hsfr4Q",
    alt: "Executive Office Space",
    label: "Executive Spaces",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9tV9YbQPT1cUbazPFNrIpmf0N3s5mQ6-s9PNPpN7eV2rUKbUpPZCsFoTtJaqBOzXd0TtJRfZWt78MRwjlOCb8TY9Vq5WBG84_5GYa0DQ5FOubDYqzV42w1UWPjX7l-1wDoYOa8Ho6KokhuOoYWrZ30k1-vyBbBWEUvqZeCqf4JJK2K446JTC2H-5tTJ4lkPe7WU0Kg-Ss-ShIEbXjiPgK--T610rEZ-v11zZfWEZX6IAy1nmqB0z7RC2eNAS2zc7hzHDNItThpCc",
    alt: "Modern Craft Interior",
    label: "Modern Craft",
  },
];

export const SERVICES_GRID: ServiceGridItem[] = [
  {
    icon: "architecture",
    title: "Space Planning",
    description:
      "Designing the heart of your home for natural connection and shared moments. We optimize your layout to foster warmth and effortless flow.",
  },
  {
    icon: "weekend",
    title: "Room Styling",
    description:
      "Infusing your existing rooms with soul and comfort. We curate textures and art that reflect your family's unique story and love.",
    featured: true,
  },
  {
    icon: "castle",
    title: "Full Home Design",
    description:
      "A complete journey to build your dream sanctuary. From the first sketch to the final touch, we create a home where love is felt in every corner.",
  },
];

export const SERVICES_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgJazPVTElsHrTeK4lGVASka4hOttfNsPsnNTojtdNKSIbLd5jDwfmIHyyOAU1VLw9tXQTEtcUReOXLacsLwC6NPlkV9bYuVH7aQE04u-cLRv-thZB6W1gO18OokaS8tOnqtKsKDKqHGKsgY2JHB-hyxJbRvtBBe8kXsZ-nXagHepM_Fjp58U-LelmYMNk4VsF-zh_ryR0Sd2iywnRDoLQ_fTT1DfdzabTvALKXc-_veoKJCDCmU5GLsWtE2bM9n_Lw3T_FQmHiI",
    alt: "Muthaiga Residence",
    title: "Muthaiga Estate Residence",
    category: "Living Room",
    label: "Muthaiga Estate",
    aspectRatio: "4/5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuHuT1XCjs5FzLurYuG3LE3wO38xTXZbVhuhGz4tI8bL6o3AYKAjg5FIAkG68eJplM_5JSxSrSO4cEtI5bCr6O9UO3PQH04zgx-aQC54Vo1RyQlkobHjGH11FsLvbC7B-JtR8Dxt4kXZXS-PwkNpoPwcdksnY5nT7GW5IgyKMxAYtG_fRzauUdhjrNN8gyMJddrEixtyYpKyErOEK8XGBkz4DcHXQuBocxVoZ_76ImcAiy2xigFc4Wg-Nd8_SosB_ElnUCF_zdDGo",
    alt: "Riverside Penthouse",
    title: "Riverside Penthouse",
    category: "Bedroom",
    label: "Riverside Penthouse",
    aspectRatio: "square",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN68e82D-8bzAjsD7XY2qWZZ5h4gfBg-CMNNmXil4BFpKo7eCVDxWF38F9iTbXNmM6EtEdYTRUUBaCUyFpNDBlxXbzxKI3BfpsQx-Ie7sA7sg_kwf89ujMb2S3Ad96M6ih0WM6K6Y3Kvue8sx0YG1Ar4QJDeE581Mnij77EW3HUDWi_eMuJkIIEvjFlH-Pzlx4WApiCGDyOzHAzNnfb8cEWPQgp9jtAG43g2O5N9QUk68EQbQKR9FfqXp7FaQEM_12r2xhQ10-ZK8",
    alt: "Karen Villa",
    title: "Karen Modern Villa",
    category: "Kitchen",
    label: "Karen Villa",
    aspectRatio: "4/5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAwujP_PXuIWTOb4suvMGpu54ZrUpYXltgbjD13uJDjdHdkMl4dYZk216gxcuEOfEoPIMjmBmvccaaoiBvOryPxcVOCihNz7iavRiwNyo3t50dAaXqcS3YOnjCtgBRm2SDeadEGHcpNZlqqVkNn3RLJPdVNkSNzj4lquGCr8pe4ajx7sRUT3MS6Nch6tOnBBWoxJE39CvcjrplvezJc0gB_qgdTcB5JVJ4P7_R3ALq1T3RztRNXMT_uffJEZefKmNrPTat3IYF8D4",
    alt: "Executive Suite",
    title: "Westlands Executive Suite",
    category: "Dining Area",
    label: "Executive Suite",
    aspectRatio: "square",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV_9Cut0HX9FkQ2tkFzThwpaVigu5Yiac6Nmfj8_0M9ADFF2x0SMV3rvoQFiuokwc9kUxCAVDOvARltXr1Z-mDZqWOqDQsoe8Dxn9qN8q0LGhJXuDbI3L_jSkeyPHj3Xk5orAyr-kZsB0iJC3nXIw7i-E7s-aHwI68EfvGn0qukZQiE9P6PBvt8UevGYzdmKe-b7ySKvkZUeMD1wiR_7CGFt9fRrP1wpz9lugu4mps6lMxSUDCnGunqORQpCT477f2idQlgrKqlJU",
    alt: "Penthouse Suite",
    title: "Nairobi Penthouse Suite",
    category: "Bedroom",
    label: "Penthouse Suite",
    aspectRatio: "4/5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKzxQT88qXwB0lgQHMJ0rKS5wnOYDT2E6_HGmWZN8TYNr7iuzSR9dQEwKdrjZF9hF_Wxmce5_bdtZipiMdIhqOW5sdsQnEQcKlCAp1MYJ0vKZ21BV1mcfgXMD-MJJjt6TU_QMemAKnmLFm6BvwrTpRt_B5DHCzpD3gwHpaU3FHNfdZHp3nvba4gllhgrRr6P1BfHv_cZONnBtpJrNi0_3aJdy68O0dB-IpLKPiEePHcZATDdoyNI2y8RsbN91sdQ8DEk3pKRBQwrs",
    alt: "Artisanal Collection",
    title: "Artisanal Collection",
    category: "Interior Detail",
    label: "Artisanal",
    aspectRatio: "square",
  },
];

export const STATS: Stat[] = [
  { value: "50", suffix: "+", label: "Completed Projects" },
  { value: "15", suffix: "+", label: "Vetted Contractors" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
  { value: "5", suffix: "+", label: "Years Experience" },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "location_on",
    label: "Nairobi Studio",
    value: "Kilimani, Nairobi, Kenya",
  },
  {
    icon: "language",
    label: "Global Virtual",
    value: "Remote consultations available worldwide",
  },
  {
    icon: "mail",
    label: "Email Us",
    value: "lily.homes.interiors@gmail.com",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "instagram", label: "Instagram", href: "https://instagram.com" },
  { platform: "facebook", label: "Facebook", href: "https://facebook.com" },
  { platform: "tiktok", label: "TikTok", href: "https://tiktok.com" },
  { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { platform: "youtube", label: "YouTube", href: "https://youtube.com" },
];
