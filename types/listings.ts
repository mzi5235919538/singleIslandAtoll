export interface Listing {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryIcon: string;
  location: string;
  type?: string;
  href: string;
  rating?: number;
  reviews?: number;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export interface FilterBarProps {
  onLocationChange?: (location: string) => void;
  onTypeChange?: (type: string) => void;
  locationOptions: FilterOption[];
  typeOptions: FilterOption[];
}

export interface ListingCardProps extends Listing {
  onViewDetails?: () => void;
}
