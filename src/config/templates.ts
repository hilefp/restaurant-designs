import { PAPARICCOSS_CONFIG } from "./templates/papariccos";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isLimited?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
export interface TemplateConfig {
  id: string;
  name: string;
  brandName: string;
  title: string;
  subtitle?: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  videoSrc?: string;
  imageSrc?: string;
  navItems: Array<{ name: string; href: string; }>;
  ctaText: string;
  ctaLink: string;
  reservationText: string;
  reservationLink: string;
  hoursData: Array<{ day: string; hours: string; }>;
  categories: Array<MenuCategory>;
}

export const templates: Record<string, TemplateConfig> = {

  papariccos: PAPARICCOSS_CONFIG,

};

export const getTemplate = (templateId: string): TemplateConfig => {
  return templates[templateId] || templates.papariccos;
};