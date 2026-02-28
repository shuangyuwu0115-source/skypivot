// 通用类型定义

// 服务类型
export type ServiceType = 'flights' | 'hotels' | 'cars' | 'trains';

// 货币类型
export type CurrencyCode = 'CNY' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'KRW' | 'THB' | 'SGD' | 'AUD' | 'CAD' | 'HKD' | 'TWD';

// 舱位等级
export type CabinClass = 'economy' | 'business' | 'first';

// 行程类型
export type TripType = 'roundTrip' | 'oneWay' | 'multiCity';

// 搜索结果接口
export interface SearchResult {
  id: string;
  platform: string;
  platformLogo: string;
  price: number;
  currency: CurrencyCode;
  rating: number;
  features: string[];
  bookingUrl: string;
}

// 机票搜索结果
export interface FlightResult extends SearchResult {
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  departure: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  stops: number;
  stopCities?: string[];
  aircraft: string;
  baggage: string;
}

// 酒店搜索结果
export interface HotelResult extends SearchResult {
  hotelName: string;
  hotelImage: string;
  starRating: number;
  guestRating: number;
  reviewCount: number;
  address: string;
  roomType: string;
  amenities: string[];
  cancellationPolicy: string;
  breakfast: boolean;
}

// 租车搜索结果
export interface CarResult extends SearchResult {
  carModel: string;
  carImage: string;
  carType: string;
  seats: number;
  luggage: number;
  transmission: 'auto' | 'manual';
  fuelPolicy: string;
  mileage: string;
  insurance: string[];
  pickupLocation: string;
  dropoffLocation: string;
}

// 火车票搜索结果
export interface TrainResult extends SearchResult {
  trainNumber: string;
  trainType: string;
  operator: string;
  departure: {
    station: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    station: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  seatClass: string;
  seatType: string;
  refundable: boolean;
  changeable: boolean;
}

// 搜索参数
export interface SearchParams {
  serviceType: ServiceType;
  from?: string;
  to?: string;
  departureDate?: string;
  returnDate?: string;
  passengers?: number;
  cabinClass?: CabinClass;
  tripType?: TripType;
  // 酒店专用
  checkIn?: string;
  checkOut?: string;
  rooms?: number;
  // 租车专用
  pickupDate?: string;
  dropoffDate?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  driverAge?: number;
}

// 用户位置信息
export interface UserLocation {
  country: string;
  city: string;
  currency: CurrencyCode;
  language: string;
}

// 筛选条件
export interface FilterOptions {
  priceRange: [number, number];
  airlines?: string[];
  hotelChains?: string[];
  carTypes?: string[];
  trainTypes?: string[];
  stops?: number[];
  starRating?: number[];
  amenities?: string[];
  sortBy: 'price' | 'duration' | 'departure' | 'arrival' | 'rating' | 'recommended';
}

// 分页信息
export interface PaginationInfo {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// API响应
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: PaginationInfo;
}

// 热门目的地
export interface PopularDestination {
  id: string;
  city: string;
  country: string;
  image: string;
  avgPrice: number;
  currency: CurrencyCode;
  rating: number;
  tags: string[];
}

// 平台信息
export interface PlatformInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  features: string[];
  rating: number;
}

// 导航项
export interface NavItem {
  id: ServiceType;
  label: string;
  icon: string;
  active: boolean;
}

// 语言选项
export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

// 货币选项
export interface CurrencyOption {
  code: CurrencyCode;
  name: string;
  symbol: string;
  rate: number; // 相对于USD的汇率
}

// 日期范围
export interface DateRange {
  start: string;
  end: string;
}

// 乘客信息
export interface PassengerInfo {
  adults: number;
  children: number;
  infants?: number;
}

// 联系信息
export interface ContactInfo {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}

// 预订信息
export interface BookingInfo {
  id: string;
  type: ServiceType;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  totalAmount: number;
  currency: CurrencyCode;
  contactInfo: ContactInfo;
  passengers: PassengerInfo;
  items: FlightResult[] | HotelResult[] | CarResult[] | TrainResult[];
}

// 错误信息
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
