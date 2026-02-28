import './i18n/index';
import { initReactI18next } from 'react-i18next';

// 中文翻译
const zhCN = {
  nav: {
    flights: "机票",
    hotels: "酒店",
    cars: "租车",
    trains: "火车票",
    language: "语言"
  },
  hero: {
    title: "全球旅行比价平台",
    subtitle: "一站式比较机票、酒店、租车和火车票价格，为您找到最优惠的选择",
    searchPlaceholder: "搜索目的地、酒店或租车城市..."
  },
  search: {
    from: "出发地",
    to: "目的地",
    departure: "出发日期",
    return: "返回日期",
    checkIn: "入住日期",
    checkOut: "退房日期",
    pickup: "取车日期",
    dropoff: "还车日期",
    passengers: "乘客",
    rooms: "房间",
    travelers: "旅客",
    adults: "成人",
    children: "儿童",
    search: "搜索",
    roundTrip: "往返",
    oneWay: "单程",
    multiCity: "多程",
    economy: "经济舱",
    business: "商务舱",
    firstClass: "头等舱",
    pickupLocation: "取车地点",
    dropoffLocation: "还车地点",
    driverAge: "驾驶员年龄",
    ageRange: "25-70岁"
  },
  results: {
    title: "比价结果",
    subtitle: "为您找到以下平台的优惠价格",
    sortBy: "排序方式",
    price: "价格",
    duration: "时长",
    departure: "出发时间",
    arrival: "到达时间",
    rating: "评分",
    recommended: "推荐",
    cheapest: "最便宜",
    fastest: "最快",
    best: "最佳",
    from: "起",
    perNight: "每晚",
    perDay: "每天",
    total: "总计",
    viewDeal: "查看优惠",
    bookNow: "立即预订",
    checkDetails: "查看详情",
    filters: "筛选",
    stops: "经停",
    direct: "直飞",
    stop1: "1次经停",
    stops2: "2次以上",
    airlines: "航空公司",
    hotelChains: "酒店集团",
    carTypes: "车型",
    trainTypes: "列车类型",
    priceRange: "价格范围",
    starRating: "星级",
    guestRating: "住客评分",
    amenities: "设施",
    freeCancellation: "免费取消",
    breakfastIncluded: "含早餐",
    freeWifi: "免费WiFi",
    parking: "停车场",
    pool: "游泳池",
    gym: "健身房",
    airConditioning: "空调"
  },
  popular: {
    flightsTitle: "热门航线",
    flightsSubtitle: "探索最受欢迎的飞行目的地",
    hotelsTitle: "热门酒店目的地",
    hotelsSubtitle: "发现全球最受欢迎的住宿城市",
    carsTitle: "热门租车城市",
    carsSubtitle: "自驾游最佳目的地推荐",
    trainsTitle: "热门火车线路",
    trainsSubtitle: "体验世界经典铁路之旅"
  },
  platforms: {
    title: "合作伙伴",
    subtitle: "我们与全球领先的旅行服务商合作，为您提供最全面的比价服务"
  },
  footer: {
    about: "关于我们",
    contact: "联系我们",
    privacy: "隐私政策",
    terms: "服务条款",
    partners: "合作伙伴",
    careers: "加入我们",
    help: "帮助中心",
    newsletter: "订阅优惠资讯",
    emailPlaceholder: "输入您的邮箱",
    subscribe: "订阅",
    rights: "版权所有",
    tagline: "让每一次旅行都物超所值"
  },
  currency: {
    CNY: "人民币",
    USD: "美元",
    EUR: "欧元",
    GBP: "英镑",
    JPY: "日元",
    KRW: "韩元",
    THB: "泰铢",
    SGD: "新加坡元",
    AUD: "澳元",
    CAD: "加元",
    HKD: "港币",
    TWD: "新台币"
  },
  meta: {
    title: "SkyPivot - 全球旅行比价平台",
    description: "一站式比较全球机票、酒店、租车和火车票价格，为您找到最优惠的旅行选择"
  }
};

// 英文翻译
const enUS = {
  nav: {
    flights: "Flights",
    hotels: "Hotels",
    cars: "Car Rental",
    trains: "Trains",
    language: "Language"
  },
  hero: {
    title: "Global Travel Comparison Platform",
    subtitle: "One-stop comparison of flights, hotels, car rentals, and train tickets to find you the best deals",
    searchPlaceholder: "Search destinations, hotels, or car rental cities..."
  },
  search: {
    from: "From",
    to: "To",
    departure: "Departure Date",
    return: "Return Date",
    checkIn: "Check-in",
    checkOut: "Check-out",
    pickup: "Pick-up Date",
    dropoff: "Drop-off Date",
    passengers: "Passengers",
    rooms: "Rooms",
    travelers: "Travelers",
    adults: "Adults",
    children: "Children",
    search: "Search",
    roundTrip: "Round Trip",
    oneWay: "One Way",
    multiCity: "Multi City",
    economy: "Economy",
    business: "Business",
    firstClass: "First Class",
    pickupLocation: "Pick-up Location",
    dropoffLocation: "Drop-off Location",
    driverAge: "Driver Age",
    ageRange: "Age 25-70"
  },
  results: {
    title: "Comparison Results",
    subtitle: "We found the best deals from the following platforms",
    sortBy: "Sort by",
    price: "Price",
    duration: "Duration",
    departure: "Departure",
    arrival: "Arrival",
    rating: "Rating",
    recommended: "Recommended",
    cheapest: "Cheapest",
    fastest: "Fastest",
    best: "Best",
    from: "from",
    perNight: "per night",
    perDay: "per day",
    total: "Total",
    viewDeal: "View Deal",
    bookNow: "Book Now",
    checkDetails: "Check Details",
    filters: "Filters",
    stops: "Stops",
    direct: "Direct",
    stop1: "1 Stop",
    stops2: "2+ Stops",
    airlines: "Airlines",
    hotelChains: "Hotel Chains",
    carTypes: "Car Types",
    trainTypes: "Train Types",
    priceRange: "Price Range",
    starRating: "Star Rating",
    guestRating: "Guest Rating",
    amenities: "Amenities",
    freeCancellation: "Free Cancellation",
    breakfastIncluded: "Breakfast Included",
    freeWifi: "Free WiFi",
    parking: "Parking",
    pool: "Pool",
    gym: "Gym",
    airConditioning: "Air Conditioning"
  },
  popular: {
    flightsTitle: "Popular Routes",
    flightsSubtitle: "Explore the most popular flight destinations",
    hotelsTitle: "Popular Hotel Destinations",
    hotelsSubtitle: "Discover the world's most popular accommodation cities",
    carsTitle: "Popular Car Rental Cities",
    carsSubtitle: "Best destinations for self-driving adventures",
    trainsTitle: "Popular Train Routes",
    trainsSubtitle: "Experience classic railway journeys around the world"
  },
  platforms: {
    title: "Our Partners",
    subtitle: "We partner with leading global travel service providers to offer you the most comprehensive comparison service"
  },
  footer: {
    about: "About Us",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    partners: "Partners",
    careers: "Careers",
    help: "Help Center",
    newsletter: "Subscribe to Deals",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    rights: "All rights reserved",
    tagline: "Make every trip worth it"
  },
  currency: {
    CNY: "CNY",
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    JPY: "JPY",
    KRW: "KRW",
    THB: "THB",
    SGD: "SGD",
    AUD: "AUD",
    CAD: "CAD",
    HKD: "HKD",
    TWD: "TWD"
  },
  meta: {
    title: "SkyPivot - Global Travel Comparison Platform",
    description: "One-stop comparison of global flights, hotels, car rentals, and train tickets to find you the best travel deals"
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: zhCN
      },
      en: {
        translation: enUS
      }
    },
    lng: "zh", // 默认语言
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
