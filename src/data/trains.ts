// 火车票预订平台数据
export interface TrainPlatform {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  features: string[];
  coverage: string[];
  trainTypes: string[];
  rating: number;
}

export const trainPlatforms: TrainPlatform[] = [
  {
    id: "amtrak",
    name: "Amtrak",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Amtrak_logo.svg/200px-Amtrak_logo.svg.png",
    description: "美国国家铁路客运公司，覆盖500+目的地",
    website: "https://www.amtrak.com",
    features: ["观景车厢", "餐车服务", "卧铺车厢", "学生优惠"],
    coverage: ["美国", "加拿大"],
    trainTypes: ["Acela特快", "东北区域号", "加州和风号", "日落特快"],
    rating: 4.3
  },
  {
    id: "via",
    name: "VIA Rail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/VIA_Rail_logo.svg/200px-VIA_Rail_logo.svg.png",
    description: "加拿大国家客运铁路",
    website: "https://www.viarail.ca",
    features: ["加拿大人号", "全景车厢", "卧铺服务", "青年优惠"],
    coverage: ["加拿大"],
    trainTypes: ["加拿大人号", "海洋号", "走廊号"],
    rating: 4.4
  },
  {
    id: "eurostar",
    name: "Eurostar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eurostar_logo.svg/200px-Eurostar_logo.svg.png",
    description: "欧洲之星，连接英国与欧洲大陆",
    website: "https://www.eurostar.com",
    features: ["海底隧道", "2小时15分直达巴黎", "商务休息室", "灵活改签"],
    coverage: ["英国", "法国", "比利时", "荷兰", "德国"],
    trainTypes: ["Eurostar e320", "Eurostar e300"],
    rating: 4.6
  },
  {
    id: "sncf",
    name: "SNCF Connect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SNCF_logo.svg/200px-SNCF_logo.svg.png",
    description: "法国国家铁路，TGV高铁网络",
    website: "https://www.sncf-connect.com",
    features: ["TGV高速列车", "青年卡", "周末优惠", "家庭票"],
    coverage: ["法国", "欧洲"],
    trainTypes: ["TGV", "OUIGO", "Intercités", "TER"],
    rating: 4.4
  },
  {
    id: "db",
    name: "Deutsche Bahn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Deutsche_Bahn_AG_logo.svg/200px-Deutsche_Bahn_AG_logo.svg.png",
    description: "德国联邦铁路，欧洲最大铁路运营商",
    website: "https://www.bahn.com",
    features: ["ICE高速列车", "德铁通票", "早鸟优惠", "自行车运输"],
    coverage: ["德国", "欧洲"],
    trainTypes: ["ICE", "IC/EC", "IRE", "S-Bahn"],
    rating: 4.5
  },
  {
    id: "trenitalia",
    name: "Trenitalia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trenitalia_logo.svg/200px-Trenitalia_logo.svg.png",
    description: "意大利国家铁路，Frecciarossa红箭高铁",
    website: "https://www.trenitalia.com",
    features: ["Frecciarossa", "意铁通票", "餐车服务", "家庭优惠"],
    coverage: ["意大利", "欧洲"],
    trainTypes: ["Frecciarossa", "Frecciargento", "Frecciabianca", "InterCity"],
    rating: 4.3
  },
  {
    id: "renfe",
    name: "Renfe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Renfe_logo.svg/200px-Renfe_logo.svg.png",
    description: "西班牙国家铁路，AVE高速铁路",
    website: "https://www.renfe.com",
    features: ["AVE高速列车", "青年卡", "四人同行", "+Renfe积分"],
    coverage: ["西班牙"],
    trainTypes: ["AVE", "Alvia", "Euromed", "Media Distancia"],
    rating: 4.4
  },
  {
    id: "sbb",
    name: "SBB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SBB_logo.svg/200px-SBB_logo.svg.png",
    description: "瑞士联邦铁路，准时率全球第一",
    website: "https://www.sbb.ch",
    features: ["瑞士通票", "全景列车", "冰川快车", "黄金列车"],
    coverage: ["瑞士"],
    trainTypes: ["IC", "IR", "RE", "S-Bahn"],
    rating: 4.8
  },
  {
    id: "jr",
    name: "JR Pass",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/JR_logo_%28west%29.svg/200px-JR_logo_%28west%29.svg.png",
    description: "日本铁路通票，外国游客专属优惠",
    website: "https://www.jrpass.com",
    features: ["JR全线路", "新干线", "7/14/21日通票", "绿色车厢"],
    coverage: ["日本"],
    trainTypes: ["新干线", "特急", "急行", "普通"],
    rating: 4.7
  },
  {
    id: "korail",
    name: "KORAIL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Korail_logo.svg/200px-Korail_logo.svg.png",
    description: "韩国铁路，KTX高速列车",
    website: "https://www.letskorail.com",
    features: ["KTX高速列车", "铁路通票", "外国人优惠", "在线选座"],
    coverage: ["韩国"],
    trainTypes: ["KTX", "ITX", "无穷花号", "新村号"],
    rating: 4.5
  },
  {
    id: "cr",
    name: "中国铁路12306",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/China_Railways_logo.svg/200px-China_Railways_logo.svg.png",
    description: "中国铁路官方购票平台",
    website: "https://www.12306.cn",
    features: ["高铁动车", "在线选座", "候补购票", "中铁银通卡"],
    coverage: ["中国"],
    trainTypes: ["G高铁", "D动车", "C城际", "Z直达", "T特快", "K快速"],
    rating: 4.2
  },
  {
    id: "trip",
    name: "Trip.com 火车票",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trip.com_logo.svg/200px-Trip.com_logo.svg.png",
    description: "携程国际版，全球火车票预订",
    website: "https://www.trip.com/trains",
    features: ["全球火车", "中文界面", "电子票", "24/7客服"],
    coverage: ["全球"],
    trainTypes: ["全部类型"],
    rating: 4.4
  },
  {
    id: "trainline",
    name: "Trainline",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trainline_logo.svg/200px-Trainline_logo.svg.png",
    description: "欧洲火车票比价平台，覆盖45个国家",
    website: "https://www.thetrainline.com",
    features: ["比价搜索", "电子票", "实时信息", "移动App"],
    coverage: ["欧洲", "英国"],
    trainTypes: ["全部类型"],
    rating: 4.5
  },
  {
    id: "omio",
    name: "Omio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Omio_logo.svg/200px-Omio_logo.svg.png",
    description: "欧洲交通搜索平台，火车+巴士+飞机",
    website: "https://www.omio.com",
    features: ["多交通方式", "比价", "电子票", "中文支持"],
    coverage: ["欧洲", "美国"],
    trainTypes: ["全部类型"],
    rating: 4.4
  },
  {
    id: "raileurope",
    name: "Rail Europe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rail_Europe_logo.svg/200px-Rail_Europe_logo.svg.png",
    description: "欧洲铁路专家，通票和点对点票",
    website: "https://www.raileurope.com",
    features: ["欧洲通票", "多国通票", "单国通票", "专家咨询"],
    coverage: ["欧洲"],
    trainTypes: ["全部类型"],
    rating: 4.3
  }
];

// 热门火车线路
export interface TrainRoute {
  id: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  image: string;
  duration: string;
  distance: string;
  operator: string;
  trainType: string;
  highlights: string[];
  bestSeason: string;
}

export const trainRoutes: TrainRoute[] = [
  {
    id: "beijing-shanghai",
    from: "Beijing",
    to: "Shanghai",
    fromCode: "BJX",
    toCode: "SHH",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800",
    duration: "4小时18分",
    distance: "1,318公里",
    operator: "中国铁路",
    trainType: "G1/G3",
    highlights: ["复兴号", "时速350km", "京沪高铁", "商务座"],
    bestSeason: "全年"
  },
  {
    id: "tokyo-osaka",
    from: "Tokyo",
    to: "Osaka",
    fromCode: "TYO",
    toCode: "Shin-Osaka",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
    duration: "2小时30分",
    distance: "515公里",
    operator: "JR东海",
    trainType: "新干线のぞみ",
    highlights: ["东海道新干线", "富士山景", "便当文化", "自由席"],
    bestSeason: "全年"
  },
  {
    id: "paris-london",
    from: "Paris",
    to: "London",
    fromCode: "PAR",
    toCode: "KGX",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    duration: "2小时16分",
    distance: "495公里",
    operator: "Eurostar",
    trainType: "Eurostar e320",
    highlights: ["海底隧道", "英法海峡", "市中心到市中心", "商务舱"],
    bestSeason: "全年"
  },
  {
    id: "paris-nice",
    from: "Paris",
    to: "Nice",
    fromCode: "PAR",
    toCode: "NCE",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    duration: "5小时58分",
    distance: "932公里",
    operator: "SNCF",
    trainType: "TGV",
    highlights: ["南法风光", "地中海", "蔚蓝海岸", "餐车"],
    bestSeason: "春夏季"
  },
  {
    id: "rome-milan",
    from: "Rome",
    to: "Milan",
    fromCode: "ROM",
    toCode: "MIL",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    duration: "2小时55分",
    distance: "580公里",
    operator: "Trenitalia",
    trainType: "Frecciarossa",
    highlights: ["红箭高铁", "意式风情", "商务舱", "餐车服务"],
    bestSeason: "全年"
  },
  {
    id: "madrid-barcelona",
    from: "Madrid",
    to: "Barcelona",
    fromCode: "MAD",
    toCode: "BCN",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
    duration: "2小时30分",
    distance: "621公里",
    operator: "Renfe",
    trainType: "AVE",
    highlights: ["AVE高速", "西班牙风情", "地中海", "商务舱"],
    bestSeason: "全年"
  },
  {
    id: "frankfurt-munich",
    from: "Frankfurt",
    to: "Munich",
    fromCode: "FRA",
    toCode: "MUC",
    image: "https://images.unsplash.com/photo-1595867865354-20d2ab2a1ac0?w=800",
    duration: "3小时30分",
    distance: "390公里",
    operator: "Deutsche Bahn",
    trainType: "ICE",
    highlights: ["ICE高速", "巴伐利亚", "啤酒文化", "准点率"],
    bestSeason: "全年"
  },
  {
    id: "zurich-milan",
    from: "Zurich",
    to: "Milan",
    fromCode: "ZUR",
    toCode: "MIL",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
    duration: "3小时26分",
    distance: "293公里",
    operator: "SBB/Trenitalia",
    trainType: "EuroCity",
    highlights: ["圣哥达隧道", "阿尔卑斯山", "瑞士意大利", "景观列车"],
    bestSeason: "全年"
  },
  {
    id: "london-edinburgh",
    from: "London",
    to: "Edinburgh",
    fromCode: "KGX",
    toCode: "EDB",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    duration: "4小时20分",
    distance: "632公里",
    operator: "LNER",
    trainType: "Azuma",
    highlights: ["东海岸主线", "苏格兰高地", "一等座", "餐车"],
    bestSeason: "全年"
  },
  {
    id: "newyork-washington",
    from: "New York",
    to: "Washington",
    fromCode: "NYP",
    toCode: "WAS",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    duration: "2小时45分",
    distance: "362公里",
    operator: "Amtrak",
    trainType: "Acela",
    highlights: ["Acela特快", "东北走廊", "商务舱", "免费WiFi"],
    bestSeason: "全年"
  },
  {
    id: "sydney-melbourne",
    from: "Sydney",
    to: "Melbourne",
    fromCode: "SYD",
    toCode: "MEL",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    duration: "11小时",
    distance: "878公里",
    operator: "NSW TrainLink",
    trainType: "XPT",
    highlights: ["澳洲内陆", "卧铺车厢", "餐车", "风景"],
    bestSeason: "全年"
  },
  {
    id: "moscow-stpetersburg",
    from: "Moscow",
    to: "St.Perersburg",
    fromCode: "MOW",
    toCode: "LED",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800",
    duration: "3小时30分",
    distance: "650公里",
    operator: "RZD",
    trainType: "Sapsan",
    highlights: ["游隼号", "俄罗斯高铁", "双城记", "商务舱"],
    bestSeason: "全年"
  }
];

// 按覆盖区域获取平台
export function getPlatformsByCoverage(coverage: string): TrainPlatform[] {
  return trainPlatforms.filter(p => p.coverage.includes(coverage) || p.coverage === "全球");
}

// 按国家获取线路
export function getRoutesByCountry(country: string): TrainRoute[] {
  const countryRoutes: Record<string, string[]> = {
    "中国": ["beijing-shanghai"],
    "日本": ["tokyo-osaka"],
    "法国": ["paris-london", "paris-nice"],
    "意大利": ["rome-milan"],
    "西班牙": ["madrid-barcelona"],
    "德国": ["frankfurt-munich"],
    "瑞士": ["zurich-milan"],
    "英国": ["london-edinburgh"],
    "美国": ["newyork-washington"],
    "澳大利亚": ["sydney-melbourne"],
    "俄罗斯": ["moscow-stpetersburg"]
  };
  
  const routeIds = countryRoutes[country] || [];
  return trainRoutes.filter(r => routeIds.includes(r.id));
}
