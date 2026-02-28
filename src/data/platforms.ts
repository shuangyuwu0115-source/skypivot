import type { Platform, PopularRoute } from '@/types'
import { airports } from './airports'

// 从 airports 数据生成 airportCodes
export const airportCodes: Record<string, string> = airports.reduce((acc, airport) => {
  acc[airport.city] = airport.code
  return acc
}, {} as Record<string, string>)

export const platforms: Platform[] = [
  {
    id: 'ctrip',
    name: '携程',
    nameEn: 'Ctrip',
    logo: 'https://www.ctrip.com/favicon.ico',
    baseUrl: 'https://www.ctrip.com',
    searchUrlTemplate: 'https://flights.ctrip.com/online/channel/domestic',
    region: 'both',
    features: ['中文服务', '售后保障', '积分奖励'],
    rating: 4.8,
    color: '#2577E3'
  },
  {
    id: 'qunar',
    name: '去哪儿',
    nameEn: 'Qunar',
    logo: 'https://www.qunar.com/favicon.ico',
    baseUrl: 'https://www.qunar.com',
    searchUrlTemplate: 'https://flight.qunar.com',
    region: 'domestic',
    features: ['价格透明', '比价功能', '退改便利'],
    rating: 4.7,
    color: '#00A4FF'
  },
  {
    id: 'fliggy',
    name: '飞猪',
    nameEn: 'Fliggy',
    logo: 'https://www.fliggy.com/favicon.ico',
    baseUrl: 'https://www.fliggy.com',
    searchUrlTemplate: 'https://s.fliggy.com/flight/search',
    region: 'both',
    features: ['阿里生态', '会员权益', '分期付款'],
    rating: 4.6,
    color: '#FF6A00'
  },
  {
    id: 'tongcheng',
    name: '同程旅行',
    nameEn: 'Tongcheng',
    logo: 'https://www.ly.com/favicon.ico',
    baseUrl: 'https://www.ly.com',
    searchUrlTemplate: 'https://www.ly.com/flight',
    region: 'both',
    features: ['微信入口', '优惠活动', '行程管理'],
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
    features: ['全球覆盖', '免费取消', 'Genius优惠'],
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
    features: ['套餐优惠', '积分奖励', '24小时客服'],
    rating: 4.5,
    color: '#FFC94C'
  },
  {
    id: 'skyscanner',
    name: '天巡',
    nameEn: 'Skyscanner',
    logo: 'https://www.skyscanner.com/favicon.ico',
    baseUrl: 'https://www.skyscanner.com',
    searchUrlTemplate: 'https://www.skyscanner.com/transport/flights',
    region: 'international',
    features: ['全球比价', '价格提醒', '灵活搜索'],
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
    features: ['多平台比价', '价格预测', '行程规划'],
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
    features: ['中文服务', '全球覆盖', '优惠多多'],
    rating: 4.7,
    color: '#287DFA'
  },
  {
    id: 'google-flights',
    name: 'Google航班',
    nameEn: 'Google Flights',
    logo: 'https://www.google.com/favicon.ico',
    baseUrl: 'https://www.google.com/flights',
    searchUrlTemplate: 'https://www.google.com/travel/flights',
    region: 'international',
    features: ['快速搜索', '价格趋势', '灵活日期'],
    rating: 4.9,
    color: '#4285F4'
  }
]

export const popularRoutes: PopularRoute[] = [
  { from: '北京', to: '上海', fromCode: 'PEK', toCode: 'SHA', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=400', lowestPrice: 450 },
  { from: '上海', to: '东京', fromCode: 'PVG', toCode: 'NRT', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', lowestPrice: 1280 },
  { from: '广州', to: '新加坡', fromCode: 'CAN', toCode: 'SIN', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', lowestPrice: 980 },
  { from: '深圳', to: '曼谷', fromCode: 'SZX', toCode: 'BKK', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400', lowestPrice: 850 },
  { from: '北京', to: '巴黎', fromCode: 'PEK', toCode: 'CDG', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', lowestPrice: 3580 },
  { from: '上海', to: '纽约', fromCode: 'PVG', toCode: 'JFK', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400', lowestPrice: 4280 },
  { from: '成都', to: '洛杉矶', fromCode: 'CTU', toCode: 'LAX', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400', lowestPrice: 3680 },
  { from: '香港', to: '伦敦', fromCode: 'HKG', toCode: 'LHR', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400', lowestPrice: 3980 },
]

export const generateSearchUrl = (platform: Platform, params: {
  from?: string
  to?: string
  departDate?: string
  returnDate?: string
  passengers?: number
}): string => {
  const { from, to, departDate } = params
  
  switch (platform.id) {
    case 'ctrip':
      return `https://flights.ctrip.com/online/channel/domestic?depcity=${from || ''}&arrcity=${to || ''}&depdate=${departDate || ''}`
    case 'qunar':
      return `https://flight.qunar.com/site/oneway_list.htm?searchDepartureAirport=${from || ''}&searchArrivalAirport=${to || ''}&searchDepartureTime=${departDate || ''}`
    case 'fliggy':
      return `https://s.fliggy.com/flight/search?depCity=${from || ''}&arrCity=${to || ''}&depDate=${departDate || ''}`
    case 'tongcheng':
      return `https://www.ly.com/flight/search?dep=${from || ''}&arr=${to || ''}&date=${departDate || ''}`
    case 'booking':
      return `https://www.booking.com/flights/${from || ''}.${to || ''}.${departDate || ''}`
    case 'expedia':
      return `https://www.expedia.com/Flights-Search?trip=oneway&leg1=from:${from || ''},to:${to || ''},departure:${departDate || ''}`
    case 'skyscanner':
      return `https://www.skyscanner.com/transport/flights/${from || ''}/${to || ''}/${departDate?.replace(/-/g, '') || ''}`
    case 'kayak':
      return `https://www.kayak.com/flights/${from || ''}-${to || ''}/${departDate?.replace(/-/g, '') || ''}`
    case 'trip':
      return `https://www.trip.com/flights/${from || ''}-to-${to || ''}/tickets-sheap-${from || ''}-${to || ''}?dcity=${from || ''}&acity=${to || ''}&ddate=${departDate || ''}`
    case 'google-flights':
      return `https://www.google.com/travel/flights/search`
    default:
      return platform.searchUrlTemplate
  }
}
