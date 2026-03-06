import type { Platform } from '@/types';

export interface HotelPlatform extends Platform {
  searchUrlTemplate: string;
}

export const hotelPlatforms: HotelPlatform[] = [
  {
    id: 'booking-hotel',
    name: 'Booking.com',
    nameEn: 'Booking.com',
    logo: 'https://www.booking.com/favicon.ico',
    baseUrl: 'https://www.booking.com',
    searchUrlTemplate: 'https://www.booking.com/searchresults.html',
    region: 'international',
    features: ['Global Coverage', 'Free Cancellation', 'Genius Discounts', 'Real Reviews'],
    rating: 4.8,
    color: '#003580'
  },
  {
    id: 'expedia-hotel',
    name: 'Expedia',
    nameEn: 'Expedia',
    logo: 'https://www.expedia.com/favicon.ico',
    baseUrl: 'https://www.expedia.com',
    searchUrlTemplate: 'https://www.expedia.com/Hotel-Search',
    region: 'international',
    features: ['Package Deals', 'Rewards Points', 'Price Guarantee'],
    rating: 4.6,
    color: '#FFC94C'
  },
  {
    id: 'agoda',
    name: 'Agoda',
    nameEn: 'Agoda',
    logo: 'https://www.agoda.com/favicon.ico',
    baseUrl: 'https://www.agoda.com',
    searchUrlTemplate: 'https://www.agoda.com/search',
    region: 'international',
    features: ['Asia Advantage', 'Special Deals', 'Instant Confirmation'],
    rating: 4.7,
    color: '#7B68EE'
  },
  {
    id: 'trip-hotel',
    name: 'Trip.com',
    nameEn: 'Trip.com',
    logo: 'https://www.trip.com/favicon.ico',
    baseUrl: 'https://www.trip.com',
    searchUrlTemplate: 'https://www.trip.com/hotels',
    region: 'both',
    features: ['Chinese Service', 'Global Coverage', 'Member Discounts'],
    rating: 4.6,
    color: '#287DFA'
  },
  {
    id: 'ctrip-hotel',
    name: 'Ctrip Hotels',
    nameEn: 'Ctrip Hotels',
    logo: 'https://www.ctrip.com/favicon.ico',
    baseUrl: 'https://hotels.ctrip.com',
    searchUrlTemplate: 'https://hotels.ctrip.com/hotel',
    region: 'domestic',
    features: ['Domestic Advantage', 'Member Points', 'Change & Refund'],
    rating: 4.7,
    color: '#2577E3'
  },
  {
    id: 'trivago',
    name: 'Trivago',
    nameEn: 'Trivago',
    logo: 'https://www.trivago.com/favicon.ico',
    baseUrl: 'https://www.trivago.com',
    searchUrlTemplate: 'https://www.trivago.com/search',
    region: 'international',
    features: ['Hotel Comparison', 'Price Trends', 'Map Search'],
    rating: 4.5,
    color: '#E32851'
  },
  {
    id: 'hotels-com',
    name: 'Hotels.com',
    nameEn: 'Hotels.com',
    logo: 'https://www.hotels.com/favicon.ico',
    baseUrl: 'https://www.hotels.com',
    searchUrlTemplate: 'https://www.hotels.com/search',
    region: 'international',
    features: ['Stay 10 Get 1 Free', 'Price Guarantee', 'Member Exclusive'],
    rating: 4.6,
    color: '#D32F2F'
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    nameEn: 'Airbnb',
    logo: 'https://www.airbnb.com/favicon.ico',
    baseUrl: 'https://www.airbnb.com',
    searchUrlTemplate: 'https://www.airbnb.com/s',
    region: 'international',
    features: ['Unique Stays', 'Local Experience', 'Distinctive Accommodations'],
    rating: 4.7,
    color: '#FF5A5F'
  }
];

export interface PopularHotelDestination {
  city: string;
  cityEn: string;
  country: string;
  image: string;
  lowestPrice: number;
  hotelCount: number;
}

export const popularHotelDestinations: PopularHotelDestination[] = [
  { city: 'Tokyo', cityEn: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', lowestPrice: 280, hotelCount: 8500 },
  { city: 'Paris', cityEn: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', lowestPrice: 450, hotelCount: 6200 },
  { city: 'New York', cityEn: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400', lowestPrice: 520, hotelCount: 7800 },
  { city: 'Bangkok', cityEn: 'Bangkok', country: 'Thailand', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400', lowestPrice: 120, hotelCount: 5400 },
  { city: 'London', cityEn: 'London', country: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400', lowestPrice: 380, hotelCount: 6900 },
  { city: 'Singapore', cityEn: 'Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', lowestPrice: 350, hotelCount: 4200 },
  { city: 'Dubai', cityEn: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', lowestPrice: 420, hotelCount: 3800 },
  { city: 'Shanghai', cityEn: 'Shanghai', country: 'China', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400', lowestPrice: 180, hotelCount: 9100 },
];

export const generateHotelSearchUrl = (platform: HotelPlatform, params: {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  rooms?: number;
}): string => {
  const { destination, checkIn, checkOut, guests, rooms } = params;
  
  switch (platform.id) {
    case 'booking-hotel':
      return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination || '')}&checkin=${checkIn || ''}&checkout=${checkOut || ''}&group_adults=${guests || 1}&no_rooms=${rooms || 1}`;
    case 'expedia-hotel':
      return `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(destination || '')}&startDate=${checkIn || ''}&endDate=${checkOut || ''}&adults=${guests || 1}&rooms=${rooms || 1}`;
    case 'agoda':
      return `https://www.agoda.com/search?city=${encodeURIComponent(destination || '')}&checkIn=${checkIn || ''}&checkOut=${checkOut || ''}&adults=${guests || 1}&rooms=${rooms || 1}`;
    case 'trip-hotel':
      return `https://www.trip.com/hotels/list?city=${encodeURIComponent(destination || '')}&checkin=${checkIn || ''}&checkout=${checkOut || ''}&adult=${guests || 1}&children=0&crn=1`;
    case 'ctrip-hotel':
      return `https://hotels.ctrip.com/hotel/${encodeURIComponent(destination || '')}?checkin=${checkIn || ''}&checkout=${checkOut || ''}&adult=${guests || 1}&children=0&crn=1`;
    case 'trivago':
      return `https://www.trivago.com/search?q=${encodeURIComponent(destination || '')}&dates=${checkIn || ''}-${checkOut || ''}&adults=${guests || 1}&rooms=${rooms || 1}`;
    case 'hotels-com':
      return `https://www.hotels.com/search?destination=${encodeURIComponent(destination || '')}&startDate=${checkIn || ''}&endDate=${checkOut || ''}&adults=${guests || 1}&rooms=${rooms || 1}`;
    case 'airbnb':
      return `https://www.airbnb.com/s/${encodeURIComponent(destination || '')}/homes?checkin=${checkIn || ''}&checkout=${checkOut || ''}&adults=${guests || 1}`;
    default:
      return platform.searchUrlTemplate;
  }
};
