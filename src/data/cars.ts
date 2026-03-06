// 租车平台数据
export interface CarPlatform {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  features: string[];
  coverage: string[];
  vehicleTypes: string[];
  rating: number;
}

export const carPlatforms: CarPlatform[] = [
  {
    id: "hertz",
    name: "Hertz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hertz_logo.svg/200px-Hertz_logo.svg.png",
    description: "全球最大租车公司之一，遍布160+国家",
    website: "https://www.hertz.com",
    features: ["全球网点", "会员优惠", "24小时救援", "免费取消"],
    coverage: ["全球"],
    vehicleTypes: ["经济型", "SUV", "豪华车", "商务车"],
    rating: 4.5
  },
  {
    id: "avis",
    name: "Avis",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Avis_logo.svg/200px-Avis_logo.svg.png",
    description: "商务租车首选，Preferred会员快速取车",
    website: "https://www.avis.com",
    features: ["Preferred会员", "快速取车", "商务优惠", "积分奖励"],
    coverage: ["全球"],
    vehicleTypes: ["经济型", "中型车", "SUV", "豪华车"],
    rating: 4.4
  },
  {
    id: "enterprise",
    name: "Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Enterprise_Rent-A-Car_logo.svg/200px-Enterprise_Rent-A-Car_logo.svg.png",
    description: "北美最大租车公司，服务口碑极佳",
    website: "https://www.enterprise.com",
    features: ["免费接送", "无限里程", "新车型", "企业优惠"],
    coverage: ["北美", "欧洲", "亚太"],
    vehicleTypes: ["轿车", "SUV", "卡车", "商务车"],
    rating: 4.7
  },
  {
    id: "budget",
    name: "Budget",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Budget_Rent_a_Car_logo.svg/200px-Budget_Rent_a_Car_logo.svg.png",
    description: "经济实惠的租车选择",
    website: "https://www.budget.com",
    features: ["低价保证", "快速预订", "长期租赁", "企业账户"],
    coverage: ["全球"],
    vehicleTypes: ["经济型", "紧凑型", "中型车"],
    rating: 4.3
  },
  {
    id: "europcar",
    name: "Europcar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Europcar_logo.svg/200px-Europcar_logo.svg.png",
    description: "欧洲领先租车品牌，覆盖140+国家",
    website: "https://www.europcar.com",
    features: ["欧洲专家", "绿色车型", "灵活租期", "多语言服务"],
    coverage: ["欧洲", "全球"],
    vehicleTypes: ["小型车", "家庭车", "SUV", "电动车"],
    rating: 4.4
  },
  {
    id: "sixt",
    name: "SIXT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sixt_logo.svg/200px-Sixt_logo.svg.png",
    description: "德国高端租车品牌，车型新服务好",
    website: "https://www.sixt.com",
    features: ["新车保证", "豪华车型", "手机App", "机场服务"],
    coverage: ["全球"],
    vehicleTypes: ["豪华车", "跑车", "SUV", "商务车"],
    rating: 4.6
  },
  {
    id: "national",
    name: "National",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/National_Car_Rental_logo.svg/200px-National_Car_Rental_logo.svg.png",
    description: " Emerald Club会员专属通道",
    website: "https://www.nationalcar.com",
    features: ["Emerald Club", "自选车型", "快速还车", "企业优惠"],
    coverage: ["北美", "欧洲"],
    vehicleTypes: ["轿车", "SUV", "商务车"],
    rating: 4.5
  },
  {
    id: "alamo",
    name: "Alamo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Alamo_Rent_a_Car_logo.svg/200px-Alamo_Rent_a_Car_logo.svg.png",
    description: "休闲旅行租车专家，价格透明",
    website: "https://www.alamo.com",
    features: ["价格透明", "免费额外驾驶员", "在线Check-in", "家庭优惠"],
    coverage: ["北美", "欧洲", "南美"],
    vehicleTypes: ["经济型", "中型车", "SUV", "敞篷车"],
    rating: 4.4
  },
  {
    id: "thrifty",
    name: "Thrifty",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Thrifty_Car_Rental_logo.svg/200px-Thrifty_Car_Rental_logo.svg.png",
    description: "性价比租车首选",
    website: "https://www.thrifty.com",
    features: ["超值价格", "Blue Chip会员", "简单预订", "多地点还车"],
    coverage: ["全球"],
    vehicleTypes: ["经济型", "紧凑型", "SUV"],
    rating: 4.2
  },
  {
    id: "dollar",
    name: "Dollar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dollar_Rent_A_Car_logo.svg/200px-Dollar_Rent_A_Car_logo.svg.png",
    description: "经济实惠的租车服务",
    website: "https://www.dollar.com",
    features: ["低价租车", "Express会员", "简单流程", "多车型选择"],
    coverage: ["北美", "欧洲"],
    vehicleTypes: ["经济型", "中型车", "SUV"],
    rating: 4.1
  },
  {
    id: "rentalcars",
    name: "Rentalcars.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rentalcars.com_logo.svg/200px-Rentalcars.com_logo.svg.png",
    description: "全球租车比价平台，价格最优",
    website: "https://www.rentalcars.com",
    features: ["比价搜索", "免费取消", "价格保证", "中文客服"],
    coverage: ["全球"],
    vehicleTypes: ["全部类型"],
    rating: 4.5
  },
  {
    id: "zipcar",
    name: "Zipcar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zipcar_logo.svg/200px-Zipcar_logo.svg.png",
    description: "分时租车领导者，按小时计费",
    website: "https://www.zipcar.com",
    features: ["按小时租", "城市网点", "包含保险", "即时预订"],
    coverage: ["北美", "欧洲城市"],
    vehicleTypes: ["小型车", "SUV", "电动车"],
    rating: 4.3
  },
  {
    id: "turo",
    name: "Turo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Turo_logo.svg/200px-Turo_logo.svg.png",
    description: "P2P汽车共享平台，车型丰富独特",
    website: "https://www.turo.com",
    features: ["独特车型", "本地车主", "灵活取还", "全险保障"],
    coverage: ["北美", "欧洲", "英国"],
    vehicleTypes: ["全部类型", "跑车", "经典车"],
    rating: 4.6
  },
  {
    id: "getaround",
    name: "Getaround",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Getaround_logo.svg/200px-Getaround_logo.svg.png",
    description: "即时汽车共享，无需见面取钥匙",
    website: "https://www.getaround.com",
    features: ["即时预订", "Connect技术", "按分钟计费", "城市便捷"],
    coverage: ["北美", "欧洲城市"],
    vehicleTypes: ["经济型", "SUV", "豪华车"],
    rating: 4.4
  },
  {
    id: "carzonrent",
    name: "Carzonrent",
    logo: "https://via.placeholder.com/200x60?text=Carzonrent",
    description: "印度最大租车公司",
    website: "https://www.carzonrent.com",
    features: ["印度全境", "带司机服务", "机场接送", "企业方案"],
    coverage: ["印度"],
    vehicleTypes: ["轿车", "SUV", "豪华车"],
    rating: 4.2
  }
];

// 热门租车城市
export interface CarRentalCity {
  id: string;
  city: string;
  country: string;
  image: string;
  avgPrice: number;
  currency: string;
  rating: number;
  supplierCount: number;
  popularRoutes: string[];
  tags: string[];
}

export const carRentalCities: CarRentalCity[] = [
  {
    id: "losangeles",
    city: "Los Angeles",
    country: "United States",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800",
    avgPrice: 45,
    currency: "USD",
    rating: 4.6,
    supplierCount: 25,
    popularRoutes: ["洛杉矶-旧金山", "洛杉矶-拉斯维加斯", "洛杉矶-圣地亚哥"],
    tags: ["自驾天堂", "好莱坞", "海滩"]
  },
  {
    id: "miami",
    city: "Miami",
    country: "United States",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800",
    avgPrice: 40,
    currency: "USD",
    rating: 4.5,
    supplierCount: 22,
    popularRoutes: ["迈阿密-奥兰多", "迈阿密-基韦斯特", "迈阿密-坦帕"],
    tags: ["海滩", "夜生活", "艺术装饰"]
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    avgPrice: 55,
    currency: "EUR",
    rating: 4.4,
    supplierCount: 18,
    popularRoutes: ["巴黎-凡尔赛", "巴黎-卢瓦尔河谷", "巴黎-香槟区"],
    tags: ["浪漫", "艺术", "美食"]
  },
  {
    id: "rome",
    city: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    avgPrice: 50,
    currency: "EUR",
    rating: 4.5,
    supplierCount: 16,
    popularRoutes: ["罗马-佛罗伦萨", "罗马-那不勒斯", "罗马-托斯卡纳"],
    tags: ["古迹", "美食", "自驾"]
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    avgPrice: 60,
    currency: "GBP",
    rating: 4.3,
    supplierCount: 20,
    popularRoutes: ["伦敦-牛津", "伦敦-剑桥", "伦敦-巴斯"],
    tags: ["历史", "皇室", "文化"]
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    avgPrice: 35,
    currency: "AED",
    rating: 4.7,
    supplierCount: 15,
    popularRoutes: ["迪拜-阿布扎比", "迪拜-沙迦", "迪拜-富查伊拉"],
    tags: ["奢华", "沙漠", "购物"]
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    avgPrice: 50,
    currency: "AUD",
    rating: 4.6,
    supplierCount: 14,
    popularRoutes: ["悉尼-蓝山", "悉尼-堪培拉", "悉尼-猎人谷"],
    tags: ["海滩", "自然", "自驾"]
  },
  {
    id: "capetown",
    city: "Capetown",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800",
    avgPrice: 30,
    currency: "ZAR",
    rating: 4.5,
    supplierCount: 12,
    popularRoutes: ["开普敦-花园大道", "开普敦-斯泰伦博斯", "开普敦-赫曼努斯"],
    tags: ["海景", "葡萄酒", "野生动物"]
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    avgPrice: 70,
    currency: "JPY",
    rating: 4.4,
    supplierCount: 17,
    popularRoutes: ["东京-富士山", "东京-箱根", "东京-轻井泽"],
    tags: ["现代", "传统", "美食"]
  },
  {
    id: "shanghai",
    city: "Shanghai",
    country: "China",
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800",
    avgPrice: 40,
    currency: "CNY",
    rating: 4.5,
    supplierCount: 19,
    popularRoutes: ["上海-杭州", "上海-苏州", "上海-乌镇"],
    tags: ["都市", "江南", "美食"]
  },
  {
    id: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    avgPrice: 25,
    currency: "THB",
    rating: 4.3,
    supplierCount: 13,
    popularRoutes: ["曼谷-芭提雅", "曼谷-华欣", "曼谷-大城"],
    tags: ["寺庙", "美食", "按摩"]
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
    avgPrice: 45,
    currency: "EUR",
    rating: 4.6,
    supplierCount: 15,
    popularRoutes: ["巴塞罗那-蒙特塞拉特", "巴塞罗那-锡切斯", "巴塞罗那-赫罗纳"],
    tags: ["建筑", "海滩", "美食"]
  }
];

// 按覆盖区域获取平台
export function getPlatformsByCoverage(coverage: string): CarPlatform[] {
  return carPlatforms.filter(p => p.coverage.includes(coverage) || p.coverage.includes("全球"));
}
