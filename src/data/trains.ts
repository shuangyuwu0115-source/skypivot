import type { Platform } from '@/types';
import { trainStations } from './trainStations';

// 从 trainStations 数据生成 trainStationCodes
export const trainStationCodes: Record<string, string> = trainStations.reduce((acc, station) => {
  acc[station.city] = station.code;
  return acc;
}, {} as Record<string, string>);

export interface TrainPlatform extends Platform {
  searchUrlTemplate: string;
  regions: string[];
}

export const trainPlatforms: TrainPlatform[] = [
  {
    id: '12306',
    name: '12306',
    nameEn: '12306.cn',
    logo: 'https://www.12306.cn/favicon.ico',
    baseUrl: 'https://www.12306.cn',
    searchUrlTemplate: 'https://www.12306.cn/index/',
    region: 'domestic',
    regions: ['China'],
    features: ['Official Channel', 'National Coverage', 'Online Seat Selection', 'Waitlist'],
    rating: 4.5,
    color: '#FF6600'
  },
  {
    id: 'trip-train',
    name: 'Trip Trains',
    nameEn: 'Trip Trains',
    logo: 'https://www.trip.com/favicon.ico',
    baseUrl: 'https://www.trip.com/trains',
    searchUrlTemplate: 'https://www.trip.com/trains',
    region: 'both',
    regions: ['China', 'Japan', 'Korea', 'Europe'],
    features: ['Multi-language', 'International Routes', 'Easy Payment'],
    rating: 4.6,
    color: '#287DFA'
  },
  {
    id: 'eurostar',
    name: 'Eurostar',
    nameEn: 'Eurostar',
    logo: 'https://www.eurostar.com/favicon.ico',
    baseUrl: 'https://www.eurostar.com',
    searchUrlTemplate: 'https://www.eurostar.com/uk-en/train-times',
    region: 'international',
    regions: ['UK', 'France', 'Belgium', 'Netherlands'],
    features: ['Eurostar', 'High Speed', 'Cross-border Service'],
    rating: 4.7,
    color: '#003399'
  },
  {
    id: 'raileurope',
    name: 'Rail Europe',
    nameEn: 'Rail Europe',
    logo: 'https://www.raileurope.com/favicon.ico',
    baseUrl: 'https://www.raileurope.com',
    searchUrlTemplate: 'https://www.raileurope.com/en-us/train-tickets',
    region: 'international',
    regions: ['Europe'],
    features: ['Eurail Pass', 'Multi-country Routes', 'Flexible Travel'],
    rating: 4.6,
    color: '#0099CC'
  },
  {
    id: 'amtrak',
    name: 'Amtrak',
    nameEn: 'Amtrak',
    logo: 'https://www.amtrak.com/favicon.ico',
    baseUrl: 'https://www.amtrak.com',
    searchUrlTemplate: 'https://www.amtrak.com/home.html',
    region: 'international',
    regions: ['USA', 'Canada'],
    features: ['US Railway', 'Scenic Trains', 'Sleeper Service'],
    rating: 4.4,
    color: '#005983'
  },
  {
    id: 'jrpass',
    name: 'JR Pass',
    nameEn: 'Japan Rail Pass',
    logo: 'https://www.jrpass.com/favicon.ico',
    baseUrl: 'https://www.jrpass.com',
    searchUrlTemplate: 'https://www.jrpass.com/',
    region: 'international',
    regions: ['Japan'],
    features: ['Japan Rail Pass', 'Shinkansen', 'Unlimited Rides'],
    rating: 4.8,
    color: '#006600'
  },
  {
    id: 'klook-train',
    name: 'Klook Trains',
    nameEn: 'Klook Trains',
    logo: 'https://www.klook.com/favicon.ico',
    baseUrl: 'https://www.klook.com',
    searchUrlTemplate: 'https://www.klook.com/zh-CN/travel/ctrain-tickets',
    region: 'both',
    regions: ['China', 'Japan', 'Korea', 'Taiwan', 'Europe'],
    features: ['Instant Tickets', 'Special Offers', 'Chinese Support'],
    rating: 4.5,
    color: '#FF5722'
  },
  {
    id: 'trainline',
    name: 'Trainline',
    nameEn: 'Trainline',
    logo: 'https://www.thetrainline.com/favicon.ico',
    baseUrl: 'https://www.thetrainline.com',
    searchUrlTemplate: 'https://www.thetrainline.com/book/search',
    region: 'international',
    regions: ['UK', 'Europe'],
    features: ['European Trains', 'Mobile Tickets', 'Real-time Info'],
    rating: 4.7,
    color: '#00A88F'
  }
];

export interface PopularTrainRoute {
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  country: string;
  image: string;
  duration: string;
  lowestPrice: number;
  trainType: string;
}

export const popularTrainRoutes: PopularTrainRoute[] = [
  { from: 'Beijing', to: 'Shanghai', fromCode: 'BJP', toCode: 'SHH', country: 'China', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400', duration: '4.5h', lowestPrice: 553, trainType: 'High Speed' },
  { from: 'Tokyo', to: 'Osaka', fromCode: 'TYO', toCode: 'OSA', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', duration: '2.5h', lowestPrice: 720, trainType: 'Shinkansen' },
  { from: 'London', to: 'Paris', fromCode: 'LDN', toCode: 'PAR', country: 'Europe', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', duration: '2h 15m', lowestPrice: 580, trainType: 'Eurostar' },
  { from: 'New York', to: 'Washington', fromCode: 'NYC', toCode: 'WAS', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400', duration: '3.5h', lowestPrice: 420, trainType: 'Acela' },
  { from: 'Guangzhou', to: 'Hong Kong', fromCode: 'GZQ', toCode: 'HK', country: 'China', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400', duration: '1h', lowestPrice: 215, trainType: 'High Speed' },
  { from: 'Paris', to: 'Amsterdam', fromCode: 'PAR', toCode: 'AMS', country: 'Europe', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', duration: '3.5h', lowestPrice: 450, trainType: 'Thalys' },
  { from: 'Seoul', to: 'Busan', fromCode: 'SEL', toCode: 'PUS', country: 'Korea', image: 'https://images.unsplash.com/photo-1538669716095-09471c8c6c7a?w=400', duration: '2.5h', lowestPrice: 380, trainType: 'KTX' },
  { from: 'Shanghai', to: 'Hangzhou', fromCode: 'SHH', toCode: 'HZH', country: 'China', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400', duration: '1h', lowestPrice: 73, trainType: 'High Speed' },
];

export const trainTypes = [
  { id: 'highspeed', name: 'High Speed', nameEn: 'High Speed', icon: '🚄' },
  { id: 'normal', name: 'Regular', nameEn: 'Regular', icon: '🚂' },
  { id: 'sleeper', name: 'Sleeper', nameEn: 'Sleeper', icon: '🛏️' },
  { id: 'subway', name: 'Intercity', nameEn: 'Intercity', icon: '🚆' },
];

export const seatTypes = [
  { id: 'business', name: 'Business', nameEn: 'Business', priceMultiplier: 3 },
  { id: 'first', name: 'First Class', nameEn: 'First Class', priceMultiplier: 1.6 },
  { id: 'second', name: 'Second Class', nameEn: 'Second Class', priceMultiplier: 1 },
  { id: 'sleeper', name: 'Sleeper', nameEn: 'Sleeper', priceMultiplier: 1.8 },
];

export const generateTrainSearchUrl = (platform: TrainPlatform, params: {
  from?: string;
  to?: string;
  date?: string;
  seatType?: string;
}): string => {
  const { from, to, date } = params;
  
  switch (platform.id) {
    case '12306':
      return `https://www.12306.cn/index/`;
    case 'trip-train':
      return `https://www.trip.com/trains/${encodeURIComponent(from || '')}-to-${encodeURIComponent(to || '')}?date=${date || ''}`;
    case 'eurostar':
      return `https://www.eurostar.com/uk-en/train-times?origin=${encodeURIComponent(from || '')}&destination=${encodeURIComponent(to || '')}&adult=1&outbound=${date || ''}`;
    case 'raileurope':
      return `https://www.raileurope.com/en-us/train-tickets?from=${encodeURIComponent(from || '')}&to=${encodeURIComponent(to || '')}&date=${date || ''}`;
    case 'amtrak':
      return `https://www.amtrak.com/home.html?from=${encodeURIComponent(from || '')}&to=${encodeURIComponent(to || '')}&date=${date || ''}`;
    case 'jrpass':
      return `https://www.jrpass.com/`;
    case 'klook-train':
      return `https://www.klook.com/zh-CN/travel/ctrain-tickets?from=${encodeURIComponent(from || '')}&to=${encodeURIComponent(to || '')}&date=${date || ''}`;
    case 'trainline':
      return `https://www.thetrainline.com/book/search?from=${encodeURIComponent(from || '')}&to=${encodeURIComponent(to || '')}&outward=${date || ''}`;
    default:
      return platform.searchUrlTemplate;
  }
};
  const routeIds = countryRoutes[country] || [];
  return trainRoutes.filter(r => routeIds.includes(r.id));
}
