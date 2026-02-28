// 全球主要火车站数据
export interface TrainStation {
  code: string;
  city: string;
  country: string;
  name: string;
  region: string;
}

export const trainStations: TrainStation[] = [
  // 中国 - 高铁主要车站
  { code: "BJX", city: "北京", country: "中国", name: "北京西站", region: "亚洲" },
  { code: "BJN", city: "北京", country: "中国", name: "北京南站", region: "亚洲" },
  { code: "BJZ", city: "北京", country: "中国", name: "北京站", region: "亚洲" },
  { code: "SHH", city: "上海", country: "中国", name: "上海虹桥站", region: "亚洲" },
  { code: "SHZ", city: "上海", country: "中国", name: "上海站", region: "亚洲" },
  { code: "CAN", city: "广州", country: "中国", name: "广州南站", region: "亚洲" },
  { code: "GZZ", city: "广州", country: "中国", name: "广州站", region: "亚洲" },
  { code: "SZN", city: "深圳", country: "中国", name: "深圳北站", region: "亚洲" },
  { code: "CTU", city: "成都", country: "中国", name: "成都东站", region: "亚洲" },
  { code: "TFU", city: "成都", country: "中国", name: "成都南站", region: "亚洲" },
  { code: "HGH", city: "杭州", country: "中国", name: "杭州东站", region: "亚洲" },
  { code: "XIY", city: "西安", country: "中国", name: "西安北站", region: "亚洲" },
  { code: "CKG", city: "重庆", country: "中国", name: "重庆北站", region: "亚洲" },
  { code: "KMG", city: "昆明", country: "中国", name: "昆明南站", region: "亚洲" },
  { code: "NKG", city: "南京", country: "中国", name: "南京南站", region: "亚洲" },
  { code: "XMN", city: "厦门", country: "中国", name: "厦门北站", region: "亚洲" },
  { code: "TAO", city: "青岛", country: "中国", name: "青岛北站", region: "亚洲" },
  { code: "WUH", city: "武汉", country: "中国", name: "武汉站", region: "亚洲" },
  { code: "CSX", city: "长沙", country: "中国", name: "长沙南站", region: "亚洲" },
  { code: "DLC", city: "大连", country: "中国", name: "大连北站", region: "亚洲" },
  { code: "SHE", city: "沈阳", country: "中国", name: "沈阳北站", region: "亚洲" },
  { code: "TSN", city: "天津", country: "中国", name: "天津西站", region: "亚洲" },
  { code: "CGO", city: "郑州", country: "中国", name: "郑州东站", region: "亚洲" },
  { code: "HRB", city: "哈尔滨", country: "中国", name: "哈尔滨西站", region: "亚洲" },
  { code: "URC", city: "乌鲁木齐", country: "中国", name: "乌鲁木齐站", region: "亚洲" },
  { code: "LHW", city: "兰州", country: "中国", name: "兰州西站", region: "亚洲" },
  { code: "TYN", city: "太原", country: "中国", name: "太原南站", region: "亚洲" },
  { code: "NNG", city: "南宁", country: "中国", name: "南宁东站", region: "亚洲" },
  { code: "FOC", city: "福州", country: "中国", name: "福州站", region: "亚洲" },
  { code: "KWE", city: "贵阳", country: "中国", name: "贵阳北站", region: "亚洲" },
  { code: "NGB", city: "宁波", country: "中国", name: "宁波站", region: "亚洲" },
  { code: "WUX", city: "无锡", country: "中国", name: "无锡东站", region: "亚洲" },
  { code: "YNT", city: "烟台", country: "中国", name: "烟台站", region: "亚洲" },
  { code: "ZUH", city: "珠海", country: "中国", name: "珠海站", region: "亚洲" },
  { code: "CGQ", city: "长春", country: "中国", name: "长春站", region: "亚洲" },
  { code: "KHN", city: "南昌", country: "中国", name: "南昌西站", region: "亚洲" },
  { code: "HET", city: "呼和浩特", country: "中国", name: "呼和浩特东站", region: "亚洲" },
  { code: "INC", city: "银川", country: "中国", name: "银川站", region: "亚洲" },
  { code: "XNN", city: "西宁", country: "中国", name: "西宁站", region: "亚洲" },
  { code: "LJG", city: "丽江", country: "中国", name: "丽江站", region: "亚洲" },
  { code: "DYG", city: "张家界", country: "中国", name: "张家界西站", region: "亚洲" },
  { code: "BHY", city: "北海", country: "中国", name: "北海站", region: "亚洲" },
  { code: "MFM", city: "澳门", country: "中国", name: "澳门轻轨站", region: "亚洲" },

  // 中国香港、台湾
  { code: "HKG", city: "香港", country: "中国香港", name: "香港西九龙站", region: "亚洲" },
  { code: "TPE", city: "台北", country: "中国台湾", name: "台北车站", region: "亚洲" },
  { code: "KHH", city: "高雄", country: "中国台湾", name: "高雄车站", region: "亚洲" },
  { code: "TXG", city: "台中", country: "中国台湾", name: "台中车站", region: "亚洲" },

  // 日本 - 新干线主要车站
  { code: "TYO", city: "东京", country: "日本", name: "东京站", region: "亚洲" },
  { code: " Shinagawa", city: "东京", country: "日本", name: "品川站", region: "亚洲" },
  { code: "Shin-Osaka", city: "大阪", country: "日本", name: "新大阪站", region: "亚洲" },
  { code: "Kyoto", city: "京都", country: "日本", name: "京都站", region: "亚洲" },
  { code: "Nagoya", city: "名古屋", country: "日本", name: "名古屋站", region: "亚洲" },
  { code: "Hakata", city: "福冈", country: "日本", name: "博多站", region: "亚洲" },
  { code: "Sapporo", city: "札幌", country: "日本", name: "札幌站", region: "亚洲" },
  { code: "Sendai", city: "仙台", country: "日本", name: "仙台站", region: "亚洲" },
  { code: "Hiroshima", city: "广岛", country: "日本", name: "广岛站", region: "亚洲" },
  { code: "Kagoshima", city: "鹿儿岛", country: "日本", name: "鹿儿岛中央站", region: "亚洲" },

  // 韩国 - KTX主要车站
  { code: "Seoul", city: "首尔", country: "韩国", name: "首尔站", region: "亚洲" },
  { code: "Busan", city: "釜山", country: "韩国", name: "釜山站", region: "亚洲" },
  { code: "Gwangju", city: "光州", country: "韩国", name: "光州松汀站", region: "亚洲" },
  { code: "Daegu", city: "大邱", country: "韩国", name: "东大邱站", region: "亚洲" },

  // 新加坡/马来西亚
  { code: "SG", city: "新加坡", country: "新加坡", name: "兀兰关卡", region: "亚洲" },
  { code: "JB", city: "新山", country: "马来西亚", name: "新山中央车站", region: "亚洲" },
  { code: "KL", city: "吉隆坡", country: "马来西亚", name: "吉隆坡中央车站", region: "亚洲" },

  // 泰国
  { code: "BKK", city: "曼谷", country: "泰国", name: "华蓝蓬车站", region: "亚洲" },
  { code: "CNX", city: "清迈", country: "泰国", name: "清迈火车站", region: "亚洲" },

  // 印度
  { code: "NDLS", city: "新德里", country: "印度", name: "新德里火车站", region: "亚洲" },
  { code: "CSTM", city: "孟买", country: "印度", name: "贾特拉帕蒂·希瓦吉终点站", region: "亚洲" },
  { code: "MAS", city: "金奈", country: "印度", name: "金奈中央车站", region: "亚洲" },

  // 欧洲 - 英国
  { code: "KGX", city: "伦敦", country: "英国", name: "伦敦国王十字车站", region: "欧洲" },
  { code: "PAD", city: "伦敦", country: "英国", name: "伦敦帕丁顿车站", region: "欧洲" },
  { code: "EUS", city: "伦敦", country: "英国", name: "伦敦尤斯顿车站", region: "欧洲" },
  { code: "WAT", city: "伦敦", country: "英国", name: "伦敦滑铁卢车站", region: "欧洲" },
  { code: "STP", city: "伦敦", country: "英国", name: "伦敦圣潘克拉斯国际车站", region: "欧洲" },
  { code: "MAN", city: "曼彻斯特", country: "英国", name: "曼彻斯特皮卡迪利站", region: "欧洲" },
  { code: "BHM", city: "伯明翰", country: "英国", name: "伯明翰新街站", region: "欧洲" },
  { code: "EDB", city: "爱丁堡", country: "英国", name: "爱丁堡威瓦利站", region: "欧洲" },
  { code: "GLC", city: "格拉斯哥", country: "英国", name: "格拉斯哥中央车站", region: "欧洲" },

  // 欧洲 - 法国
  { code: "PAR", city: "巴黎", country: "法国", name: "巴黎北站", region: "欧洲" },
  { code: "LYN", city: "里昂", country: "法国", name: "里昂帕尔迪厄站", region: "欧洲" },
  { code: "MRS", city: "马赛", country: "法国", name: "马赛圣夏尔站", region: "欧洲" },
  { code: "NCE", city: "尼斯", country: "法国", name: "尼斯城站", region: "欧洲" },
  { code: "BOD", city: "波尔多", country: "法国", name: "波尔多圣让站", region: "欧洲" },
  { code: "TLS", city: "图卢兹", country: "法国", name: "图卢兹马塔比尤站", region: "欧洲" },
  { code: "STR", city: "斯特拉斯堡", country: "法国", name: "斯特拉斯堡站", region: "欧洲" },

  // 欧洲 - 德国
  { code: "FRA", city: "法兰克福", country: "德国", name: "法兰克福中央火车站", region: "欧洲" },
  { code: "MUC", city: "慕尼黑", country: "德国", name: "慕尼黑中央火车站", region: "欧洲" },
  { code: "BER", city: "柏林", country: "德国", name: "柏林中央火车站", region: "欧洲" },
  { code: "HAM", city: "汉堡", country: "德国", name: "汉堡中央火车站", region: "欧洲" },
  { code: "CGN", city: "科隆", country: "德国", name: "科隆中央火车站", region: "欧洲" },
  { code: "DUS", city: "杜塞尔多夫", country: "德国", name: "杜塞尔多夫中央火车站", region: "欧洲" },
  { code: "STR", city: "斯图加特", country: "德国", name: "斯图加特中央火车站", region: "欧洲" },

  // 欧洲 - 意大利
  { code: "ROM", city: "罗马", country: "意大利", name: "罗马特米尼站", region: "欧洲" },
  { code: "MIL", city: "米兰", country: "意大利", name: "米兰中央车站", region: "欧洲" },
  { code: "VEN", city: "威尼斯", country: "意大利", name: "威尼斯圣塔露西亚站", region: "欧洲" },
  { code: "FLR", city: "佛罗伦萨", country: "意大利", name: "佛罗伦萨新圣母车站", region: "欧洲" },
  { code: "NAP", city: "那不勒斯", country: "意大利", name: "那不勒斯中央车站", region: "欧洲" },

  // 欧洲 - 西班牙
  { code: "MAD", city: "马德里", country: "西班牙", name: "马德里阿托查站", region: "欧洲" },
  { code: "BCN", city: "巴塞罗那", country: "西班牙", name: "巴塞罗那圣徒站", region: "欧洲" },
  { code: "SVQ", city: "塞维利亚", country: "西班牙", name: "塞维利亚圣胡斯塔站", region: "欧洲" },
  { code: "VLC", city: "瓦伦西亚", country: "西班牙", name: "瓦伦西亚华金·索罗拉站", region: "欧洲" },

  // 欧洲 - 瑞士
  { code: "ZUR", city: "苏黎世", country: "瑞士", name: "苏黎世中央火车站", region: "欧洲" },
  { code: "GVA", city: "日内瓦", country: "瑞士", name: "日内瓦科尔纳万车站", region: "欧洲" },

  // 欧洲 - 荷兰
  { code: "AMS", city: "阿姆斯特丹", country: "荷兰", name: "阿姆斯特丹中央车站", region: "欧洲" },
  { code: "RTM", city: "鹿特丹", country: "荷兰", name: "鹿特丹中央车站", region: "欧洲" },

  // 欧洲 - 比利时
  { code: "BRU", city: "布鲁塞尔", country: "比利时", name: "布鲁塞尔南站", region: "欧洲" },

  // 欧洲 - 奥地利
  { code: "VIE", city: "维也纳", country: "奥地利", name: "维也纳中央火车站", region: "欧洲" },
  { code: "SZG", city: "萨尔茨堡", country: "奥地利", name: "萨尔茨堡中央火车站", region: "欧洲" },

  // 欧洲 - 瑞典
  { code: "STO", city: "斯德哥尔摩", country: "瑞典", name: "斯德哥尔摩中央车站", region: "欧洲" },
  { code: "GOT", city: "哥德堡", country: "瑞典", name: "哥德堡中央车站", region: "欧洲" },

  // 欧洲 - 挪威
  { code: "OSL", city: "奥斯陆", country: "挪威", name: "奥斯陆中央车站", region: "欧洲" },
  { code: "BGO", city: "卑尔根", country: "挪威", name: "卑尔根车站", region: "欧洲" },

  // 欧洲 - 丹麦
  { code: "CPH", city: "哥本哈根", country: "丹麦", name: "哥本哈根中央车站", region: "欧洲" },

  // 欧洲 - 俄罗斯
  { code: "MOW", city: "莫斯科", country: "俄罗斯", name: "莫斯科雅罗斯拉夫尔车站", region: "欧洲" },
  { code: "LED", city: "圣彼得堡", country: "俄罗斯", name: "莫斯科车站", region: "欧洲" },

  // 北美 - 美国
  { code: "NYP", city: "纽约", country: "美国", name: "纽约宾夕法尼亚车站", region: "北美洲" },
  { code: "WAS", city: "华盛顿", country: "美国", name: "华盛顿联合车站", region: "北美洲" },
  { code: "CHI", city: "芝加哥", country: "美国", name: "芝加哥联合车站", region: "北美洲" },
  { code: "LAX", city: "洛杉矶", country: "美国", name: "洛杉矶联合车站", region: "北美洲" },
  { code: "SFO", city: "旧金山", country: "美国", name: "旧金山4th & King街车站", region: "北美洲" },
  { code: "BOS", city: "波士顿", country: "美国", name: "波士顿南站", region: "北美洲" },
  { code: "PHL", city: "费城", country: "美国", name: "费城30街车站", region: "北美洲" },
  { code: "SEA", city: "西雅图", country: "美国", name: "西雅图国王街车站", region: "北美洲" },
  { code: "MIA", city: "迈阿密", country: "美国", name: "迈阿密车站", region: "北美洲" },
  { code: "DEN", city: "丹佛", country: "美国", name: "丹佛联合车站", region: "北美洲" },

  // 北美 - 加拿大
  { code: "TOR", city: "多伦多", country: "加拿大", name: "多伦多联合车站", region: "北美洲" },
  { code: "MTL", city: "蒙特利尔", country: "加拿大", name: "蒙特利尔中央车站", region: "北美洲" },
  { code: "VAN", city: "温哥华", country: "加拿大", name: "温哥华太平洋中央车站", region: "北美洲" },

  // 大洋洲 - 澳大利亚
  { code: "SYD", city: "悉尼", country: "澳大利亚", name: "悉尼中央车站", region: "大洋洲" },
  { code: "MEL", city: "墨尔本", country: "澳大利亚", name: "南十字星车站", region: "大洋洲" },
  { code: "BNE", city: "布里斯班", country: "澳大利亚", name: "罗马街车站", region: "大洋洲" },
  { code: "PER", city: "珀斯", country: "澳大利亚", name: "珀斯车站", region: "大洋洲" },

  // 大洋洲 - 新西兰
  { code: "AKL", city: "奥克兰", country: "新西兰", name: "奥克兰布里托马特车站", region: "大洋洲" },
  { code: "WLG", city: "惠灵顿", country: "新西兰", name: "惠灵顿车站", region: "大洋洲" },
  { code: "CHC", city: "基督城", country: "新西兰", name: "基督城车站", region: "大洋洲" },
];

// 按区域分组
export const stationsByRegion = trainStations.reduce((acc, station) => {
  if (!acc[station.region]) {
    acc[station.region] = [];
  }
  acc[station.region].push(station);
  return acc;
}, {} as Record<string, TrainStation[]>);

// 按国家分组
export const stationsByCountry = trainStations.reduce((acc, station) => {
  if (!acc[station.country]) {
    acc[station.country] = [];
  }
  acc[station.country].push(station);
  return acc;
}, {} as Record<string, TrainStation[]>);

// 搜索车站
export function searchStations(query: string): TrainStation[] {
  const lowerQuery = query.toLowerCase();
  return trainStations.filter(
    (station) =>
      station.city.toLowerCase().includes(lowerQuery) ||
      station.code.toLowerCase().includes(lowerQuery) ||
      station.country.toLowerCase().includes(lowerQuery) ||
      station.name.toLowerCase().includes(lowerQuery)
  );
}

// 获取热门车站
export function getPopularStations(limit: number = 10): TrainStation[] {
  const popularCodes = ["BJX", "SHH", "CAN", "TYO", "HKG", "KGX", "PAR", "FRA", "NYP", "TOR"];
  return trainStations.filter((s) => popularCodes.includes(s.code)).slice(0, limit);
}
