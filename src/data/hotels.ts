// 酒店预订平台数据
export interface HotelPlatform {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  features: string[];
  regions: string[];
  rating: number;
  commission: string;
}

export const hotelPlatforms: HotelPlatform[] = [
  {
    id: "booking",
    name: "Booking.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/200px-Booking.com_logo.svg.png",
    description: "全球最大酒店预订平台，覆盖220+国家/地区",
    website: "https://www.booking.com",
    features: ["免费取消", "无需预付", "会员折扣", "价格匹配保证"],
    regions: ["全球"],
    rating: 4.8,
    commission: "10-15%"
  },
  {
    id: "expedia",
    name: "Expedia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Expedia_2012_logo.svg/200px-Expedia_2012_logo.svg.png",
    description: "全球知名在线旅行社，酒店+机票套餐优惠",
    website: "https://www.expedia.com",
    features: ["套餐优惠", "积分奖励", "会员专属价", "24小时客服"],
    regions: ["北美", "欧洲", "亚太"],
    rating: 4.6,
    commission: "8-12%"
  },
  {
    id: "agoda",
    name: "Agoda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Agoda_logo.svg/200px-Agoda_logo.svg.png",
    description: "亚洲领先的酒店预订平台，价格优势明显",
    website: "https://www.agoda.com",
    features: ["隐藏优惠", "手机专享价", "即时确认", "中文客服"],
    regions: ["亚洲", "全球"],
    rating: 4.7,
    commission: "10-14%"
  },
  {
    id: "trip",
    name: "Trip.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trip.com_logo.svg/200px-Trip.com_logo.svg.png",
    description: "携程国际版，服务全球华人旅行者",
    website: "https://www.trip.com",
    features: ["中文服务", "24/7客服", "会员积分", "本地化支付"],
    regions: ["全球", "中国"],
    rating: 4.5,
    commission: "8-15%"
  },
  {
    id: "hotels",
    name: "Hotels.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hotels.com_logo.svg/200px-Hotels.com_logo.svg.png",
    description: "住10晚送1晚，Rewards会员计划",
    website: "https://www.hotels.com",
    features: ["住10送1", "神秘优惠", "价格保证", "免费取消"],
    regions: ["全球"],
    rating: 4.5,
    commission: "10-12%"
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/200px-Airbnb_Logo_B%C3%A9lo.svg.png",
    description: "全球民宿短租领导者，独特住宿体验",
    website: "https://www.airbnb.com",
    features: ["民宿体验", "长租优惠", "体验活动", "房东直连"],
    regions: ["全球"],
    rating: 4.6,
    commission: "3-15%"
  },
  {
    id: "trivago",
    name: "Trivago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trivago_logo_2019.svg/200px-Trivago_logo_2019.svg.png",
    description: "酒店比价搜索引擎，找到最优价格",
    website: "https://www.trivago.com",
    features: ["比价搜索", "价格趋势", "地图搜索", "用户评价"],
    regions: ["全球"],
    rating: 4.4,
    commission: "CPA"
  },
  {
    id: "marriott",
    name: "Marriott",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Marriott_Logo.svg/200px-Marriott_Logo.svg.png",
    description: "万豪酒店集团官网，会员最优价保证",
    website: "https://www.marriott.com",
    features: ["会员最优价", "积分兑换", "免费WiFi", "手机入住"],
    regions: ["全球"],
    rating: 4.7,
    commission: "直接预订"
  },
  {
    id: "hilton",
    name: "Hilton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hilton_logo_2019.svg/200px-Hilton_logo_2019.svg.png",
    description: "希尔顿酒店集团， Honors会员专属优惠",
    website: "https://www.hilton.com",
    features: ["Honors积分", "数字钥匙", "免费早餐", "房型升级"],
    regions: ["全球"],
    rating: 4.6,
    commission: "直接预订"
  },
  {
    id: "hyatt",
    name: "Hyatt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hyatt_Logo.svg/200px-Hyatt_Logo.svg.png",
    description: "凯悦酒店集团，高端酒店首选",
    website: "https://www.hyatt.com",
    features: ["World of Hyatt", "套房升级", "嘉宾轩礼遇", "积分加速"],
    regions: ["全球"],
    rating: 4.8,
    commission: "直接预订"
  },
  {
    id: "ctrip",
    name: "携程",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ctrip_logo.svg/200px-Ctrip_logo.svg.png",
    description: "中国最大在线旅行平台，酒店资源丰富",
    website: "https://www.ctrip.com",
    features: ["国内酒店最全", "会员折扣", "优惠券", "到店付款"],
    regions: ["中国", "海外"],
    rating: 4.5,
    commission: "8-15%"
  },
  {
    id: "qunar",
    name: "去哪儿",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Qunar_logo.svg/200px-Qunar_logo.svg.png",
    description: "智能比价平台，找到最低酒店价格",
    website: "https://www.qunar.com",
    features: ["全网比价", "价格预警", "团购优惠", "闪购特价"],
    regions: ["中国"],
    rating: 4.4,
    commission: "CPA"
  },
  {
    id: "elong",
    name: "艺龙",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/eLong_logo.svg/200px-eLong_logo.svg.png",
    description: "专注酒店预订20年，会员体系完善",
    website: "https://www.elong.com",
    features: ["会员价", "积分抵现", "免费取消", "发票服务"],
    regions: ["中国"],
    rating: 4.3,
    commission: "8-12%"
  },
  {
    id: "fliggy",
    name: "飞猪",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fliggy_logo.svg/200px-Fliggy_logo.svg.png",
    description: "阿里巴巴旗下旅行平台，信用住免押金",
    website: "https://www.fliggy.com",
    features: ["信用住", "飞猪里程", "会员日", "百亿补贴"],
    regions: ["中国", "海外"],
    rating: 4.4,
    commission: "8-15%"
  },
  {
    id: "hostelworld",
    name: "Hostelworld",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hostelworld_logo.svg/200px-Hostelworld_logo.svg.png",
    description: "全球青年旅舍预订专家",
    website: "https://www.hostelworld.com",
    features: ["青旅专家", "社交功能", "灵活预订", "背包客社区"],
    regions: ["全球"],
    rating: 4.5,
    commission: "10-15%"
  }
];

// 热门酒店目的地
export interface HotelDestination {
  id: string;
  city: string;
  country: string;
  image: string;
  avgPrice: number;
  currency: string;
  rating: number;
  propertyCount: number;
  tags: string[];
}

export const hotelDestinations: HotelDestination[] = [
  {
    id: "paris",
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    avgPrice: 180,
    currency: "EUR",
    rating: 4.7,
    propertyCount: 4500,
    tags: ["浪漫", "艺术", "购物"]
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    avgPrice: 150,
    currency: "JPY",
    rating: 4.8,
    propertyCount: 6200,
    tags: ["美食", "购物", "文化"]
  },
  {
    id: "newyork",
    city: "New York",
    country: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    avgPrice: 280,
    currency: "USD",
    rating: 4.6,
    propertyCount: 3800,
    tags: ["都市", "百老汇", "购物"]
  },
  {
    id: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    avgPrice: 45,
    currency: "THB",
    rating: 4.5,
    propertyCount: 5100,
    tags: ["寺庙", "美食", "按摩"]
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    avgPrice: 200,
    currency: "AED",
    rating: 4.8,
    propertyCount: 2100,
    tags: ["奢华", "购物", "沙漠"]
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    avgPrice: 220,
    currency: "GBP",
    rating: 4.6,
    propertyCount: 4200,
    tags: ["历史", "皇室", "剧院"]
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    avgPrice: 180,
    currency: "SGD",
    rating: 4.7,
    propertyCount: 1800,
    tags: ["花园", "美食", "购物"]
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    avgPrice: 200,
    currency: "AUD",
    rating: 4.6,
    propertyCount: 2900,
    tags: ["海滩", "歌剧院", "自然"]
  },
  {
    id: "shanghai",
    city: "Shanghai",
    country: "China",
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800",
    avgPrice: 120,
    currency: "CNY",
    rating: 4.7,
    propertyCount: 5600,
    tags: ["摩天大楼", "外滩", "美食"]
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    avgPrice: 80,
    currency: "IDR",
    rating: 4.8,
    propertyCount: 3200,
    tags: ["海滩", "度假村", "SPA"]
  },
  {
    id: "rome",
    city: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    avgPrice: 160,
    currency: "EUR",
    rating: 4.7,
    propertyCount: 3800,
    tags: ["古迹", "美食", "艺术"]
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
    avgPrice: 140,
    currency: "EUR",
    rating: 4.6,
    propertyCount: 3100,
    tags: ["建筑", "海滩", "夜生活"]
  }
];

// 按区域获取平台
export function getPlatformsByRegion(region: string): HotelPlatform[] {
  return hotelPlatforms.filter(p => p.regions.includes(region) || p.regions.includes("全球"));
}

// 按价格范围筛选目的地
export function getDestinationsByPriceRange(min: number, max: number): HotelDestination[] {
  return hotelDestinations.filter(d => d.avgPrice >= min && d.avgPrice <= max);
}
