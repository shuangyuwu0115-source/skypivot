import type { Platform, PopularRoute } from '@/types';
import { airports } from './airports';

// 从 airports 数据生成 airportCodes
export const airportCodes: Record<string, string> = airports.reduce((acc, airport) => {
  acc[airport.city] = airport.code;
  return acc;
}, {} as Record<string, string>);

export const platforms: Platform[] = [
  {
    id: 'ctrip',
    name: 'Ctrip',
    nameEn: 'Ctrip',
    logo: 'https://www.ctrip.com/favicon.ico',
    baseUrl: 'https://www.ctrip.com',
    searchUrlTemplate: 'https://flights.ctrip.com/online/channel/domestic',
    region: 'both',
    features: ['Chinese Service', 'After-sales Support', 'Rewards Points'],
    rating: 4.8,
    color: '#2577E3'
  },
  {
    id: 'qunar',
    name: 'Qunar',
    nameEn: 'Qunar',
    logo: 'https://www.qunar.com/favicon.ico',
    baseUrl: 'https://www.qunar.com',
    searchUrlTemplate: 'https://flight.qunar.com',
    region: 'domestic',
    features: ['Price Transparency', 'Comparison', 'Easy Changes'],
    rating: 4.7,
    color: '#00A4FF'
  },
  {
    id: 'fliggy',
    name: 'Fliggy',
    nameEn: 'Fliggy',
    logo: 'https://www.fliggy.com/favicon.ico',
    baseUrl: 'https://www.fliggy.com',
    searchUrlTemplate: 'https://s.fliggy.com/flight/search',
    region: 'both',
    features: ['Alibaba Ecosystem', 'Member Benefits', 'Installments'],
    rating: 4.6,
    color: '#FF6A00'
  },
  {
    id: 'tongcheng',
    name: 'Tongcheng',
    nameEn: 'Tongcheng',
    logo: 'https://www.ly.com/favicon.ico',
    baseUrl: 'https://www.ly.com',
    searchUrlTemplate: 'https://www.ly.com/flight',
    region: 'both',
    features: ['WeChat Entry', 'Special Offers', 'Trip Management'],
    rating: 4.5,
    color: '#00BFFF'
  },
  {
    id: 'booking',
    name: 'Booking.com',
    nameEn: 'Booking.com',
    logo: 'https://www.booking.com/favicon.ico',
    baseUrl: 'https://www.booking.com',
    searchUrlTemplate: 'https://www.booking.com/flights',
    region: 'international',
    features: ['Global Coverage', 'Free Cancellation', 'Genius Discounts'],
    rating: 4.7,
    color: '#003580'
  },
  {
    id: 'expedia',
    name: 'Expedia',
    nameEn: 'Expedia',
    logo: 'https://www.expedia.com/favicon.ico',
    baseUrl: 'https://www.expedia.com',
    searchUrlTemplate: 'https://www.expedia.com/Flights',
    region: 'international',
    features: ['Package Deals', 'Rewards Points', '24/7 Support'],
    rating: 4.5,
    color: '#FFC94C'
  },
  {
    id: 'skyscanner',
    name: 'Skyscanner',
    nameEn: 'Skyscanner',
    logo: 'https://www.skyscanner.com/favicon.ico',
    baseUrl: 'https://www.skyscanner.com',
    searchUrlTemplate: 'https://www.skyscanner.com/transport/flights',
    region: 'international',
    features: ['Global Comparison', 'Price Alerts', 'Flexible Search'],
    rating: 4.8,
    color: '#0770E3'
  },
  {
    id: 'kayak',
    name: 'Kayak',
    nameEn: 'Kayak',
    logo: 'https://www.kayak.com/favicon.ico',
    baseUrl: 'https://www.kayak.com',
    searchUrlTemplate: 'https://www.kayak.com/flights',
    region: 'international',
    features: ['Multi-Platform Comparison', 'Price Prediction', 'Trip Planning'],
    rating: 4.6,
    color: '#FF690F'
  },
  {
    id: 'trip',
    name: 'Trip.com',
    nameEn: 'Trip.com',
    logo: 'https://www.trip.com/favicon.ico',
    baseUrl: 'https://www.trip.com',
    searchUrlTemplate: 'https://www.trip.com/flights',
    region: 'both',
    features: ['Chinese Service', 'Global Coverage', 'Great Deals'],
    rating: 4.7,
    color: '#287DFA'
  },
  {
    id: 'google-flights',
    name: 'Google Flights',
    nameEn: 'Google Flights',
    logo: 'https://www.google.com/favicon.ico',
    baseUrl: 'https://www.google.com/flights',
    searchUrlTemplate: 'https://www.google.com/travel/flights',
    region: 'international',
    features: ['Fast Search', 'Price Trends', 'Flexible Dates'],
    rating: 4.9,
    color: '#4285F4'
  }
];

export const popularRoutes: PopularRoute[] = [
  { from: 'Beijing', to: 'Shanghai', fromCode: 'PEK', toCode: 'SHA', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400', lowestPrice: 450 },
  { from: 'Shanghai', to: 'Tokyo', fromCode: 'PVG', toCode: 'NRT', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', lowestPrice: 1280 },
  { from: 'Guangzhou', to: 'Singapore', fromCode: 'CAN', toCode: 'SIN', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', lowestPrice: 980 },
  { from: 'Shenzhen', to: 'Bangkok', fromCode: 'SZX', toCode: 'BKK', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400', lowestPrice: 850 },
  { from: 'Beijing', to: 'Paris', fromCode: 'PEK', toCode: 'CDG', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', lowestPrice: 3580 },
  { from: 'Shanghai', to: 'New York', fromCode: 'PVG', toCode: 'JFK', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400', lowestPrice: 4280 },
  { from: 'Chengdu', to: 'Los Angeles', fromCode: 'CTU', toCode: 'LAX', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400', lowestPrice: 3680 },
  { from: 'Hong Kong', to: 'London', fromCode: 'HKG', toCode: 'LHR', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400', lowestPrice: 3980 },
];

// 城市名称到携程城市代码的映射
const ctripCityCodeMap: Record<string, string> = {
  'Beijing': 'BJS',
  'Shanghai': 'SHA',
  'Guangzhou': 'CAN',
  'Shenzhen': 'SZX',
  'Chengdu': 'CTU',
  'Hangzhou': 'HGH',
  'Wuhan': 'WUH',
  'Xi\'an': 'SIA',
  'Chongqing': 'CKG',
  'Nanjing': 'NKG',
  'Tianjin': 'TSN',
  'Suzhou': 'SZV',
  'Changsha': 'CSX',
  'Zhengzhou': 'CGO',
  'Shenyang': 'SHE',
  'Qingdao': 'TAO',
  'Ningbo': 'NGB',
  'Dongguan': 'DGM',
  'Wuxi': 'WUX',
  'Xiamen': 'XMN',
  'Fuzhou': 'FOC',
  'Jinan': 'TNA',
  'Dalian': 'DLC',
  'Kunming': 'KMG',
  'Hefei': 'HFE',
  'Foshan': 'FUO',
  'Harbin': 'HRB',
  'Changchun': 'CGQ',
  'Shijiazhuang': 'SJW',
  'Nanning': 'NNG',
  'Guiyang': 'KWE',
  'Nanchang': 'KHN',
  'Urumqi': 'URC',
  'Lanzhou': 'LHW',
  'Haikou': 'HAK',
  'Sanya': 'SYX',
  'Hohhot': 'HET',
  'Yinchuan': 'INC',
  'Xining': 'XNN',
  'Lhasa': 'LXA',
  'Taipei': 'TPE',
  'Hong Kong': 'HKG',
  'Macau': 'MFM',
  'Tokyo': 'TYO',
  'Osaka': 'OSA',
  'Seoul': 'SEL',
  'Singapore': 'SIN',
  'Bangkok': 'BKK',
  'Kuala Lumpur': 'KUL',
  'Los Angeles': 'LAX',
  'New York': 'NYC',
  'San Francisco': 'SFO',
  'London': 'LON',
  'Paris': 'PAR',
  'Frankfurt': 'FRA',
  'Sydney': 'SYD',
  'Melbourne': 'MEL',
};

// 获取携程城市代码
const getCtripCityCode = (city: string): string => {
  return ctripCityCodeMap[city] || city;
};

// 格式化日期为 YYYYMMDD
const formatDate = (dateStr: string): string => {
  return dateStr.replace(/-/g, '');
};

export const generateSearchUrl = (platform: Platform, params: {
  from?: string;
  to?: string;
  departDate?: string;
  returnDate?: string;
  passengers?: number;
}): string => {
  const { from, to, departDate, returnDate, passengers } = params;
  const fromCode = from ? getCtripCityCode(from) : '';
  const toCode = to ? getCtripCityCode(to) : '';
  const formattedDate = departDate ? formatDate(departDate) : '';
  const formattedReturnDate = returnDate ? formatDate(returnDate) : '';
  
  switch (platform.id) {
    case 'ctrip':
      // 携程支持城市代码搜索
      return `https://flights.ctrip.com/online/list/oneway-${fromCode}-${toCode}?depdate=${formattedDate}&cabin=Y_S_C_F`;
    case 'qunar':
      // 去哪儿需要机场代码
      return `https://flight.qunar.com/site/oneway_list.htm?searchDepartureAirport=${fromCode}&searchArrivalAirport=${toCode}&searchDepartureTime=${departDate || ''}`;
    case 'fliggy':
      // 飞猪支持城市名称
      return `https://s.fliggy.com/flight/search?depCity=${encodeURIComponent(from || '')}&arrCity=${encodeURIComponent(to || '')}&depDate=${departDate || ''}`;
    case 'tongcheng':
      // 同程支持城市名称
      return `https://www.ly.com/flight/search?dep=${encodeURIComponent(from || '')}&arr=${encodeURIComponent(to || '')}&date=${departDate || ''}`;
    case 'booking':
      // Booking 需要 IATA 机场代码
      const fromAirport = from ? (airportCodes[from] || from) : '';
      const toAirport = to ? (airportCodes[to] || to) : '';
      return `https://www.booking.com/flights/${fromAirport}.${toAirport}.${formattedDate}`;
    case 'expedia':
      // Expedia 格式
      return `https://www.expedia.com/Flights-Search?trip=oneway&leg1=from:${encodeURIComponent(from || '')},to:${encodeURIComponent(to || '')},departure:${departDate || ''}`;
    case 'skyscanner':
      // Skyscanner 需要 IATA 代码和 YYYYMMDD 格式日期
      const skyFrom = from ? (airportCodes[from] || from) : '';
      const skyTo = to ? (airportCodes[to] || to) : '';
      return `https://www.skyscanner.com/transport/flights/${skyFrom}/${skyTo}/${formattedDate}`;
    case 'kayak':
      // Kayak 需要 IATA 代码
      const kayakFrom = from ? (airportCodes[from] || from) : '';
      const kayakTo = to ? (airportCodes[to] || to) : '';
      return `https://www.kayak.com/flights/${kayakFrom}-${kayakTo}/${formattedDate}`;
    case 'trip':
      // Trip.com 支持城市名称
      return `https://www.trip.com/flights/${encodeURIComponent(from || '')}-to-${encodeURIComponent(to || '')}?dcity=${encodeURIComponent(from || '')}&acity=${encodeURIComponent(to || '')}&ddate=${departDate || ''}`;
    case 'google-flights':
      // Google Flights 需要 IATA 代码
      const googleFrom = from ? (airportCodes[from] || from) : '';
      const googleTo = to ? (airportCodes[to] || to) : '';
      return `https://www.google.com/travel/flights/search?tfs=CBwQAhooagwIAxIIL20vMDF4Mjh3EgoyMDI1LTAzLTAxcgwIAxIIL20vMDF4Mjh3GgJQU0gSBwjmDxC5-zU&hl=zh-CN&curr=CNY`;
    default:
      return platform.searchUrlTemplate;
  }
};
