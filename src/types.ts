export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'hall' | 'exterior' | 'stage' | 'lounge';
  imageUrl: string;
  description: string;
}

export interface BusinessDetails {
  name: string;
  headline: string;
  subheading: string;
  address: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  rating: string;
  ratingValue: number;
  reviewCount: number;
  businessHours: string;
  category: string;
  description: string;
  copyright: string;
}
