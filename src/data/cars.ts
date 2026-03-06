import type { Platform } from '@/types';

export interface CarPlatform extends Platform {
  searchUrlTemplate: string;
}

export const carPlatforms: CarPlatform[] = [
  {
    id: 'rentalcars',
    name: 'Rentalcars.com',
    nameEn: 'Rentalcars.com',
    logo: 'https://www.rentalcars.com/favicon.ico',
    baseUrl: 'https://www.rentalcars.com',
    searchUrlTemplate: 'https://www.rentalcars.com/SearchResults.do',
    region: 'international',
    features: ['Global Coverage', 'Free Cancellation', 'Price Guarantee', 'Chinese Support'],
    rating: 4.7,
    color: '#0077CC'
  },
  {
    id: 'expedia-car',
    name: 'Expedia Cars',
    nameEn: 'Expedia Cars',
    logo: 'https://www.expedia.com/favicon.ico',
    baseUrl: 'https://www.expedia.com/carsearch',
    searchUrlTemplate: 'https://www.expedia.com/carsearch',
    region: 'international',
    features: ['Package Deals', 'Rewards Points', 'Brand Guarantee'],
    rating: 4.5,
    color: '#FFC94C'
  },
  {
    id: 'booking-car',
    name: 'Booking Cars',
    nameEn: 'Booking Cars',
    logo: 'https://www.booking.com/favicon.ico',
    baseUrl: 'https://www.booking.com/car',
    searchUrlTemplate: 'https://www.booking.com/car',
    region: 'international',
    features: ['Global Network', 'Free Cancellation', 'Genius Discounts'],
    rating: 4.6,
    color: '#003580'
  },
  {
    id: 'kayak-car',
    name: 'Kayak Cars',
    nameEn: 'Kayak Cars',
    logo: 'https://www.kayak.com/favicon.ico',
    baseUrl: 'https://www.kayak.com/cars',
    searchUrlTemplate: 'https://www.kayak.com/cars',
    region: 'international',
    features: ['Multi-Platform Comparison', 'Price Alerts', 'Flexible Search'],
    rating: 4.5,
    color: '#FF690F'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    nameEn: 'Enterprise',
    logo: 'https://www.enterprise.com/favicon.ico',
    baseUrl: 'https://www.enterprise.com',
    searchUrlTemplate: 'https://www.enterprise.com/car-rental',
    region: 'international',
    features: ['Global Chain', 'Quality Service', 'Pick-up Service'],
    rating: 4.8,
    color: '#006747'
  },
  {
    id: 'hertz',
    name: 'Hertz',
    nameEn: 'Hertz',
    logo: 'https://www.hertz.com/favicon.ico',
    baseUrl: 'https://www.hertz.com',
    searchUrlTemplate: 'https://www.hertz.com/rentacar/reservation',
    region: 'international',
    features: ['Century Brand', 'Member Program', 'Luxury Cars'],
    rating: 4.6,
    color: '#FFD700'
  },
  {
    id: 'avis',
    name: 'Avis',
    nameEn: 'Avis',
    logo: 'https://www.avis.com/favicon.ico',
    baseUrl: 'https://www.avis.com',
    searchUrlTemplate: 'https://www.avis.com/car-reservation',
    region: 'international',
    features: ['Business Preferred', 'Global Network', 'Loyalty Program'],
    rating: 4.5,
    color: '#D4001A'
  },
  {
    id: 'europcar',
    name: 'Europcar',
    nameEn: 'Europcar',
    logo: 'https://www.europcar.com/favicon.ico',
    baseUrl: 'https://www.europcar.com',
    searchUrlTemplate: 'https://www.europcar.com/car-rental',
    region: 'international',
    features: ['Europe Advantage', 'Green Travel', 'Business Service'],
    rating: 4.4,
    color: '#00ADEF'
  }
];

export interface PopularCarCity {
  city: string;
  cityEn: string;
  country: string;
  image: string;
  lowestPrice: number;
  carTypes: string[];
}

export const popularCarCities: PopularCarCity[] = [
  { city: 'Los Angeles', cityEn: 'Los Angeles', country: 'USA', image: 'https://www.tripsavvy.com/thmb/UfG0_2WB67pErEqfIQMvEjV4W20=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-947698310-1729da81e58f40058a9e45ba82532d57-2f992696318c42cbbd595ef3ec1043fd.jpg', lowestPrice: 180, carTypes: ['Economy', 'SUV', 'Convertible'] },
  { city: 'Paris', cityEn: 'Paris', country: 'France', image: 'https://as2.ftcdn.net/v2/jpg/02/14/74/11/1000_F_214741146_jApjeGkU3GSPSpLhzyMsupP7frpAh1XH.jpg', lowestPrice: 220, carTypes: ['Compact', 'Luxury'] },
  { city: 'Tokyo', cityEn: 'Tokyo', country: 'Japan', image: 'https://t4.ftcdn.net/jpg/02/51/12/11/360_F_251121174_5xQyUCqSrkswyLHbM9Ne8DQ8Qb0o1HGw.jpg', lowestPrice: 150, carTypes: ['K-car', 'Hybrid'] },
  { city: 'Sydney', cityEn: 'Sydney', country: 'Australia', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg', lowestPrice: 120, carTypes: ['SUV', 'RV'] },
  { city: 'Dubai', cityEn: 'Dubai', country: 'UAE', image: 'https://ww3.rics.org/content/dam/rics/images/modus/built-environment/november-2021/burj-khalifa/Modus_nov21_burjkhalifa_header_v2.jpg', lowestPrice: 280, carTypes: ['Luxury', 'Sports', 'SUV'] },
  { city: 'London', cityEn: 'London', country: 'UK', image: 'https://www.guidelondon.org.uk/wp-content/uploads/2021/03/Palace-of-Westminster-and-Big-Ben-as-viewed-from-the-Thames-River.jpg', lowestPrice: 200, carTypes: ['Compact', 'Electric'] },
  { city: 'Rome', cityEn: 'Rome', country: 'Italy', image: 'https://cdn-imgix.headout.com/media/images/f7b985a3c53e91cb3b189e22bc5ec760-Ruins%20colosseum%20.jpg?auto=format&w=900&h=500&q=90', lowestPrice: 160, carTypes: ['Small', 'Convertible'] },
  { city: 'New York', cityEn: 'New York', country: 'USA', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a4/59/20/photo5jpg.jpg?w=900&h=500&s=1', lowestPrice: 240, carTypes: ['SUV', 'Luxury'] },
];

export const carTypes = [
  { id: 'economy', name: 'Economy', nameEn: 'Economy', icon: '🚗' },
  { id: 'compact', name: 'Compact', nameEn: 'Compact', icon: '🚙' },
  { id: 'midsize', name: 'Midsize', nameEn: 'Midsize', icon: '🚘' },
  { id: 'suv', name: 'SUV', nameEn: 'SUV', icon: '🚐' },
  { id: 'luxury', name: 'Luxury', nameEn: 'Luxury', icon: '🏎️' },
  { id: 'van', name: 'Van', nameEn: 'Van', icon: '🚐' },
  { id: 'convertible', name: 'Convertible', nameEn: 'Convertible', icon: '🚗' },
];

export const generateCarSearchUrl = (platform: CarPlatform, params: {
  pickupLocation?: string;
  returnLocation?: string;
  pickupDate?: string;
  returnDate?: string;
  driverAge?: number;
  carType?: string;
}): string => {
  const { pickupLocation, returnLocation, pickupDate, returnDate, driverAge } = params;
  
  switch (platform.id) {
    case 'rentalcars':
      return `https://www.rentalcars.com/SearchResults.do?enabler=&country=&city=&dropCity=&locationName=${encodeURIComponent(pickupLocation || '')}&dropLocationName=${encodeURIComponent(returnLocation || pickupLocation || '')}&pickupDate=${pickupDate || ''}&returnDate=${returnDate || ''}&driverAge=${driverAge || 25}`;
    case 'expedia-car':
      return `https://www.expedia.com/carsearch?locn=${encodeURIComponent(pickupLocation || '')}&loc2=${encodeURIComponent(returnLocation || pickupLocation || '')}&date1=${pickupDate || ''}&date2=${returnDate || ''}&age=${driverAge || 25}`;
    case 'booking-car':
      return `https://www.booking.com/car/index.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4AQfIAQzYAQHoAQH4AQKIAgGoAgO4AqC-j7EGwAIB0gIkMTM3ZWRkYjYtYjUyZS00MjY2LWEzZmEtY2Y1YjBhODUzYjU52AIF4AIB&sid=&pickup=${encodeURIComponent(pickupLocation || '')}&return=${encodeURIComponent(returnLocation || pickupLocation || '')}&pickupDate=${pickupDate || ''}&returnDate=${returnDate || ''}`;
    case 'kayak-car':
      return `https://www.kayak.com/cars/${encodeURIComponent(pickupLocation || '')}/${pickupDate || ''}/${returnDate || ''}?r=${encodeURIComponent(returnLocation || pickupLocation || '')}`;
    case 'enterprise':
      return `https://www.enterprise.com/car-rental/locations/search?loc=${encodeURIComponent(pickupLocation || '')}&date=${pickupDate || ''}`;
    case 'hertz':
      return `https://www.hertz.com/rentacar/reservation?pickupLocation=${encodeURIComponent(pickupLocation || '')}&returnLocation=${encodeURIComponent(returnLocation || pickupLocation || '')}&pickupDate=${pickupDate || ''}&returnDate=${returnDate || ''}`;
    case 'avis':
      return `https://www.avis.com/car-reservation?location=${encodeURIComponent(pickupLocation || '')}&returnLocation=${encodeURIComponent(returnLocation || pickupLocation || '')}&pickupDate=${pickupDate || ''}&returnDate=${returnDate || ''}`;
    case 'europcar':
      return `https://www.europcar.com/car-rental?pickupLocation=${encodeURIComponent(pickupLocation || '')}&returnLocation=${encodeURIComponent(returnLocation || pickupLocation || '')}&pickupDate=${pickupDate || ''}&returnDate=${returnDate || ''}`;
    default:
      return platform.searchUrlTemplate;
  }
};
