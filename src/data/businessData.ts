import { BusinessDetails, GalleryPhoto, ReviewItem, ServiceItem } from '../types';

import dayExteriorImg from '../assets/images/day_exterior_1785250009794.jpg';
import familyGuestsImg from '../assets/images/family_guests_1785250026454.jpg';
import floralWalkwayImg from '../assets/images/floral_walkway_1785249954215.jpg';
import heroBannerImg from '../assets/images/hero_banner_1785249882343.jpg';
import illuminatedSignImg from '../assets/images/illuminated_sign_1785249908961.jpg';
import loungeSeatingImg from '../assets/images/lounge_seating_1785249972033.jpg';
import mainHallImg from '../assets/images/main_hall_1785249932218.jpg';
import stageDecorImg from '../assets/images/stage_decor_1785249993082.jpg';

export const businessInfo: BusinessDetails = {
  name: "Millennium Wedding Hall",
  headline: "Millennium Wedding Hall",
  subheading: "Premier Wedding & Events Venue",
  address: "XH97+54G, Bilal Abad, Peshawar",
  phone: "0333 1441187",
  whatsappNumber: "0333 1441187",
  whatsappLink: "https://wa.me/923331441187",
  rating: "⭐ 4.1 Stars",
  ratingValue: 4.1,
  reviewCount: 336,
  businessHours: "Closes soon • 8 pm • Opens 9 am Wed",
  category: "Wedding Planner",
  description: "Millennium Wedding Hall",
  copyright: "© Millennium Wedding Hall. All Rights Reserved."
};

export const images = {
  heroBanner: heroBannerImg,
  illuminatedSign: illuminatedSignImg,
  mainHall: mainHallImg,
  floralWalkway: floralWalkwayImg,
  loungeSeating: loungeSeatingImg,
  stageDecor: stageDecorImg,
  dayExterior: dayExteriorImg,
  familyGuests: familyGuestsImg
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    title: "Grand Evening View",
    category: "exterior",
    imageUrl: heroBannerImg,
    description: "Illuminated venue entrance with decorative lights and grand columns."
  },
  {
    id: "photo-2",
    title: "Millennium Marquee Sign",
    category: "exterior",
    imageUrl: illuminatedSignImg,
    description: "Glowing neon signage for Millennium Marquee Weddings & Events."
  },
  {
    id: "photo-3",
    title: "Main Marquee Hall",
    category: "hall",
    imageUrl: mainHallImg,
    description: "Spacious hall with draped ceiling fabric, chandeliers, and round table arrangements."
  },
  {
    id: "photo-4",
    title: "Floral Walkway Aisle",
    category: "stage",
    imageUrl: floralWalkwayImg,
    description: "Red carpet aisle with white floral arches leading to the stage."
  },
  {
    id: "photo-5",
    title: "VIP Lounge Seating",
    category: "lounge",
    imageUrl: loungeSeatingImg,
    description: "Plush white tufted leather sofa set and coffee tables for special guests."
  },
  {
    id: "photo-6",
    title: "Bridal Stage Decor",
    category: "stage",
    imageUrl: stageDecorImg,
    description: "Pastel mint sofa set with white and pink floral backdrop."
  },
  {
    id: "photo-7",
    title: "Massive Car Parking Lot",
    category: "exterior",
    imageUrl: dayExteriorImg,
    description: "Extensive paved parking compound for hundreds of cars."
  },
  {
    id: "photo-8",
    title: "Guest Celebrations",
    category: "hall",
    imageUrl: familyGuestsImg,
    description: "Family and guests celebrating memorable moments at Millennium Hall."
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Wedding and engagement",
    description: "Comprehensive event setup for Barat, Walima, and Engagement functions with bespoke themes.",
    iconName: "Heart"
  },
  {
    id: "serv-2",
    title: "Catering",
    description: "Delectable traditional Pashtun & Pakistani cuisines, live live cooking counters, and customized menu options.",
    iconName: "Utensils"
  },
  {
    id: "serv-3",
    title: "Anniversary party planning",
    description: "Elegant milestones celebrations tailored with grand dining and ambient lighting decor.",
    iconName: "PartyPopper"
  },
  {
    id: "serv-4",
    title: "Corporate and conference",
    description: "Professional venue setup for corporate AGMs, seminars, award nights, and business dinners.",
    iconName: "Briefcase"
  },
  {
    id: "serv-5",
    title: "Religious wedding planning",
    description: "Respectful and sacred Nikkah ceremonies planned according to traditional customs.",
    iconName: "Sparkles"
  },
  {
    id: "serv-6",
    title: "Wedding florist services",
    description: "Fresh flower arches, stage centerpieces, aisle decor, and floral backdrops.",
    iconName: "Flower2"
  },
  {
    id: "serv-7",
    title: "Wedding lighting services",
    description: "Chandelier lighting, ambient warm spotlights, outdoor facade illuminations, and stage glow.",
    iconName: "Lightbulb"
  },
  {
    id: "serv-8",
    title: "Waiter service",
    description: "Courteous, uniformed, and professional banquet staff for seamless guest hospitality.",
    iconName: "UserCheck"
  },
  {
    id: "serv-9",
    title: "Wedding budgeting",
    description: "Transparent package planning options tailored to suit various guest capacities and budgets.",
    iconName: "Calculator"
  }
];

export const sampleReviews: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Zahid Khan",
    rating: 5,
    date: "1 month ago",
    comment: "This wedding hall has huge car parking space. The hall itself is very nice and spacious.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Mohammad Tariq",
    rating: 5,
    date: "2 months ago",
    comment: "Spacious venue with good arrangements for large events.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Shahid Shinwari",
    rating: 5,
    date: "3 months ago",
    comment: "Good wedding hall with ample parking and a pleasant environment.",
    verified: true
  }
];
