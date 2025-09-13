import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const associationInfo = {
  name: "CEMCD2019 CHAMPIONNATS D'EUROPE MARATHON CANOE DECIZE 2019",
  object: "Préparer et organiser des championnats d'Europe de Marathon canoë kayak en conformité avec les prescriptions et le contrat de Nation hôte de l'ECA et les prescriptions et la convention de collectivités hôtes de la FFCK.",
  address: "COMITE DEPARTEMENTAL DE CANOE-KAYAK, 10 QUAI DE MEDINE, 58000 NEVERS",
  activity: "Autres activités liées au sport",
  foundingDate: "22/12/2017",
  leader: "Masi Benjamin",
};

export type Sponsor = {
  name: string;
  logoId: string;
  website?: string;
  activity: string;
};

export const sponsors: Sponsor[] = [
  { name: 'AquaFlow Gear', logoId: 'sponsor-logo-1', website: 'https://example.com', activity: 'High-performance canoeing equipment' },
  { name: 'RiverRun Adventures', logoId: 'sponsor-logo-2', website: 'https://example.com', activity: 'Guided canoe and kayak tours' },
  { name: 'Decize Local Council', logoId: 'sponsor-logo-3', activity: 'Local government body for the town of Decize' },
  { name: "Nature's Pantry", logoId: 'sponsor-logo-4', activity: 'Organic food and beverage provider' },
];

export const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
export const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#contact', label: 'Contact' },
];

export const relatedLinks = [
    { name: 'European Canoe Association (ECA)', url: 'https://www.canoe-europe.org/' },
    { name: 'Fédération Française de Canoë-Kayak (FFCK)', url: 'https://www.ffck.org/' },
];

export function getImageById(id: string): ImagePlaceholder | undefined {
    return PlaceHolderImages.find(img => img.id === id);
}
