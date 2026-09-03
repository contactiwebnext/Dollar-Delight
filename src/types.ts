export interface Category {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  image: string;
  popularItems: string[];
  color: string;
  badge: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  examplePrice: string;
  image: string;
  tag: string;
  isPopular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgGradient: string;
  accentColor: string;
}

export interface SeasonalTheme {
  id: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  highlightItems: string[];
  badgeColor: string;
  image: string;
}
