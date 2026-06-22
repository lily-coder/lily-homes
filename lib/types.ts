export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioItem {
  src: string;
  alt: string;
  label: string;
  aspectRatio?: "4/5" | "square";
  title?: string;
  category?: string;
}

export interface ServiceCardData {
  icon: string;
  title: string;
  description: string;
  price: string;
  priceLabel: string;
  variant: "light" | "dark";
  features?: string[];
}

export interface ServiceGridItem {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "linkedin"
  | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}
