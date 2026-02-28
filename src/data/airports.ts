// 全球主要机场数据
export interface Airport {
  code: string;
  city: string;
  country: string;
  name: string;
  region: string;
}

export const airports: Airport[] = [
  // 中国 - 大陆
  { code: "PEK", city: "北京", country: "中国", name: "北京首都国际机场", region: "亚洲" },
  { code: "PKX", city: "北京", country: "中国", name: "北京大兴国际机场", region: "亚洲" },
  { code: "PVG", city: "上海", country: "中国", name: "上海浦东国际机场", region: "亚洲" },
  { code: "SHA", city: "上海", country: "中国", name: "上海虹桥国际机场", region: "亚洲" },
  { code: "CAN", city: "广州", country: "中国", name: "广州白云国际机场", region: "亚洲" },
  { code: "SZX", city: "深圳", country: "中国", name: "深圳宝安国际机场", region: "亚洲" },
  { code: "CTU", city: "成都", country: "中国", name: "成都天府国际机场", region: "亚洲" },
  { code: "TFU", city: "成都", country: "中国", name: "成都双流国际机场", region: "亚洲" },
  { code: "HGH", city: "杭州", country: "中国", name: "杭州萧山国际机场", region: "亚洲" },
  { code: "XIY", city: "西安", country: "中国", name: "西安咸阳国际机场", region: "亚洲" },
  { code: "CKG", city: "重庆", country: "中国", name: "重庆江北国际机场", region: "亚洲" },
  { code: "KMG", city: "昆明", country: "中国", name: "昆明长水国际机场", region: "亚洲" },
  { code: "NKG", city: "南京", country: "中国", name: "南京禄口国际机场", region: "亚洲" },
  { code: "XMN", city: "厦门", country: "中国", name: "厦门高崎国际机场", region: "亚洲" },
  { code: "TAO", city: "青岛", country: "中国", name: "青岛胶东国际机场", region: "亚洲" },
  { code: "WUH", city: "武汉", country: "中国", name: "武汉天河国际机场", region: "亚洲" },
  { code: "CSX", city: "长沙", country: "中国", name: "长沙黄花国际机场", region: "亚洲" },
  { code: "DLC", city: "大连", country: "中国", name: "大连周水子国际机场", region: "亚洲" },
  { code: "SHE", city: "沈阳", country: "中国", name: "沈阳桃仙国际机场", region: "亚洲" },
  { code: "TSN", city: "天津", country: "中国", name: "天津滨海国际机场", region: "亚洲" },
  { code: "CGO", city: "郑州", country: "中国", name: "郑州新郑国际机场", region: "亚洲" },
  { code: "HAK", city: "海口", country: "中国", name: "海口美兰国际机场", region: "亚洲" },
  { code: "SYX", city: "三亚", country: "中国", name: "三亚凤凰国际机场", region: "亚洲" },
  { code: "HRB", city: "哈尔滨", country: "中国", name: "哈尔滨太平国际机场", region: "亚洲" },
  { code: "URC", city: "乌鲁木齐", country: "中国", name: "乌鲁木齐地窝堡国际机场", region: "亚洲" },
  { code: "LHW", city: "兰州", country: "中国", name: "兰州中川国际机场", region: "亚洲" },
  { code: "TYN", city: "太原", country: "中国", name: "太原武宿国际机场", region: "亚洲" },
  { code: "NNG", city: "南宁", country: "中国", name: "南宁吴圩国际机场", region: "亚洲" },
  { code: "FOC", city: "福州", country: "中国", name: "福州长乐国际机场", region: "亚洲" },
  { code: "JHG", city: "西双版纳", country: "中国", name: "西双版纳嘎洒国际机场", region: "亚洲" },
  { code: "LXA", city: "拉萨", country: "中国", name: "拉萨贡嘎国际机场", region: "亚洲" },
  { code: "KWE", city: "贵阳", country: "中国", name: "贵阳龙洞堡国际机场", region: "亚洲" },
  { code: "NGB", city: "宁波", country: "中国", name: "宁波栎社国际机场", region: "亚洲" },
  { code: "WUX", city: "无锡", country: "中国", name: "无锡硕放机场", region: "亚洲" },
  { code: "YNT", city: "烟台", country: "中国", name: "烟台蓬莱国际机场", region: "亚洲" },
  { code: "WEH", city: "威海", country: "中国", name: "威海大水泊国际机场", region: "亚洲" },
  { code: "ZUH", city: "珠海", country: "中国", name: "珠海金湾机场", region: "亚洲" },
  { code: "SWA", city: "汕头", country: "中国", name: "揭阳潮汕国际机场", region: "亚洲" },
  { code: "CGQ", city: "长春", country: "中国", name: "长春龙嘉国际机场", region: "亚洲" },
  { code: "KHN", city: "南昌", country: "中国", name: "南昌昌北国际机场", region: "亚洲" },
  { code: "HET", city: "呼和浩特", country: "中国", name: "呼和浩特白塔国际机场", region: "亚洲" },
  { code: "INC", city: "银川", country: "中国", name: "银川河东国际机场", region: "亚洲" },
  { code: "XNN", city: "西宁", country: "中国", name: "西宁曹家堡国际机场", region: "亚洲" },
  { code: "LJG", city: "丽江", country: "中国", name: "丽江三义机场", region: "亚洲" },
  { code: "DYG", city: "张家界", country: "中国", name: "张家界荷花国际机场", region: "亚洲" },
  { code: "BHY", city: "北海", country: "中国", name: "北海福成机场", region: "亚洲" },
  { code: "MFM", city: "澳门", country: "中国", name: "澳门国际机场", region: "亚洲" },

  // 中国香港、台湾
  { code: "HKG", city: "香港", country: "中国香港", name: "香港国际机场", region: "亚洲" },
  { code: "TPE", city: "台北", country: "中国台湾", name: "台湾桃园国际机场", region: "亚洲" },
  { code: "TSA", city: "台北", country: "中国台湾", name: "台北松山机场", region: "亚洲" },
  { code: "KHH", city: "高雄", country: "中国台湾", name: "高雄国际机场", region: "亚洲" },

  // 日本
  { code: "NRT", city: "东京", country: "日本", name: "成田国际机场", region: "亚洲" },
  { code: "HND", city: "东京", country: "日本", name: "羽田机场", region: "亚洲" },
  { code: "KIX", city: "大阪", country: "日本", name: "关西国际机场", region: "亚洲" },
  { code: "ITM", city: "大阪", country: "日本", name: "伊丹机场", region: "亚洲" },
  { code: "CTS", city: "札幌", country: "日本", name: "新千岁机场", region: "亚洲" },
  { code: "FUK", city: "福冈", country: "日本", name: "福冈机场", region: "亚洲" },
  { code: "OKA", city: "冲绳", country: "日本", name: "那霸机场", region: "亚洲" },
  { code: "NGO", city: "名古屋", country: "日本", name: "中部国际机场", region: "亚洲" },
  { code: "KOJ", city: "鹿儿岛", country: "日本", name: "鹿儿岛机场", region: "亚洲" },
  { code: "HIJ", city: "广岛", country: "日本", name: "广岛机场", region: "亚洲" },
  { code: "SDJ", city: "仙台", country: "日本", name: "仙台机场", region: "亚洲" },

  // 韩国
  { code: "ICN", city: "首尔", country: "韩国", name: "仁川国际机场", region: "亚洲" },
  { code: "GMP", city: "首尔", country: "韩国", name: "金浦国际机场", region: "亚洲" },
  { code: "PUS", city: "釜山", country: "韩国", name: "金海国际机场", region: "亚洲" },
  { code: "CJU", city: "济州", country: "韩国", name: "济州国际机场", region: "亚洲" },

  // 新加坡
  { code: "SIN", city: "新加坡", country: "新加坡", name: "樟宜机场", region: "亚洲" },

  // 泰国
  { code: "BKK", city: "曼谷", country: "泰国", name: "素万那普机场", region: "亚洲" },
  { code: "DMK", city: "曼谷", country: "泰国", name: "廊曼国际机场", region: "亚洲" },
  { code: "HKT", city: "普吉", country: "泰国", name: "普吉国际机场", region: "亚洲" },
  { code: "CNX", city: "清迈", country: "泰国", name: "清迈国际机场", region: "亚洲" },

  // 马来西亚
  { code: "KUL", city: "吉隆坡", country: "马来西亚", name: "吉隆坡国际机场", region: "亚洲" },
  { code: "PEN", city: "槟城", country: "马来西亚", name: "槟城国际机场", region: "亚洲" },
  { code: "JHB", city: "新山", country: "马来西亚", name: "士乃国际机场", region: "亚洲" },

  // 印度尼西亚
  { code: "CGK", city: "雅加达", country: "印度尼西亚", name: "苏加诺-哈达机场", region: "亚洲" },
  { code: "DPS", city: "巴厘岛", country: "印度尼西亚", name: "伍拉·赖国际机场", region: "亚洲" },

  // 菲律宾
  { code: "MNL", city: "马尼拉", country: "菲律宾", name: "尼诺伊·阿基诺国际机场", region: "亚洲" },
  { code: "CEB", city: "宿务", country: "菲律宾", name: "宿务国际机场", region: "亚洲" },

  // 越南
  { code: "SGN", city: "胡志明市", country: "越南", name: "新山一国际机场", region: "亚洲" },
  { code: "HAN", city: "河内", country: "越南", name: "内排国际机场", region: "亚洲" },
  { code: "DAD", city: "岘港", country: "越南", name: "岘港国际机场", region: "亚洲" },

  // 印度
  { code: "DEL", city: "新德里", country: "印度", name: "英迪拉·甘地国际机场", region: "亚洲" },
  { code: "BOM", city: "孟买", country: "印度", name: "贾特拉帕蒂·希瓦吉机场", region: "亚洲" },
  { code: "MAA", city: "金奈", country: "印度", name: "金奈国际机场", region: "亚洲" },
  { code: "BLR", city: "班加罗尔", country: "印度", name: "班加罗尔国际机场", region: "亚洲" },
  { code: "HYD", city: "海得拉巴", country: "印度", name: "拉吉夫·甘地国际机场", region: "亚洲" },

  // 阿联酋
  { code: "DXB", city: "迪拜", country: "阿联酋", name: "迪拜国际机场", region: "亚洲" },
  { code: "AUH", city: "阿布扎比", country: "阿联酋", name: "阿布扎比国际机场", region: "亚洲" },

  // 卡塔尔
  { code: "DOH", city: "多哈", country: "卡塔尔", name: "哈马德国际机场", region: "亚洲" },

  // 沙特阿拉伯
  { code: "JED", city: "吉达", country: "沙特阿拉伯", name: "阿卜杜勒-阿齐兹国王机场", region: "亚洲" },
  { code: "RUH", city: "利雅得", country: "沙特阿拉伯", name: "哈立德国王国际机场", region: "亚洲" },

  // 以色列
  { code: "TLV", city: "特拉维夫", country: "以色列", name: "本-古里安国际机场", region: "亚洲" },

  // 土耳其
  { code: "IST", city: "伊斯坦布尔", country: "土耳其", name: "伊斯坦布尔机场", region: "亚洲" },
  { code: "SAW", city: "伊斯坦布尔", country: "土耳其", name: "萨比哈·格克琴机场", region: "亚洲" },
  { code: "AYT", city: "安塔利亚", country: "土耳其", name: "安塔利亚机场", region: "亚洲" },

  // 美国
  { code: "JFK", city: "纽约", country: "美国", name: "约翰·肯尼迪国际机场", region: "北美洲" },
  { code: "EWR", city: "纽约", country: "美国", name: "纽瓦克自由国际机场", region: "北美洲" },
  { code: "LGA", city: "纽约", country: "美国", name: "拉瓜迪亚机场", region: "北美洲" },
  { code: "LAX", city: "洛杉矶", country: "美国", name: "洛杉矶国际机场", region: "北美洲" },
  { code: "ORD", city: "芝加哥", country: "美国", name: "奥黑尔国际机场", region: "北美洲" },
  { code: "MDW", city: "芝加哥", country: "美国", name: "中途国际机场", region: "北美洲" },
  { code: "DFW", city: "达拉斯", country: "美国", name: "达拉斯-沃斯堡国际机场", region: "北美洲" },
  { code: "DEN", city: "丹佛", country: "美国", name: "丹佛国际机场", region: "北美洲" },
  { code: "ATL", city: "亚特兰大", country: "美国", name: "哈茨菲尔德-杰克逊机场", region: "北美洲" },
  { code: "SFO", city: "旧金山", country: "美国", name: "旧金山国际机场", region: "北美洲" },
  { code: "SEA", city: "西雅图", country: "美国", name: "西雅图-塔科马国际机场", region: "北美洲" },
  { code: "LAS", city: "拉斯维加斯", country: "美国", name: "麦卡伦国际机场", region: "北美洲" },
  { code: "MIA", city: "迈阿密", country: "美国", name: "迈阿密国际机场", region: "北美洲" },
  { code: "BOS", city: "波士顿", country: "美国", name: "洛根国际机场", region: "北美洲" },
  { code: "PHX", city: "凤凰城", country: "美国", name: "天港国际机场", region: "北美洲" },
  { code: "IAH", city: "休斯顿", country: "美国", name: "乔治·布什洲际机场", region: "北美洲" },
  { code: "MCO", city: "奥兰多", country: "美国", name: "奥兰多国际机场", region: "北美洲" },
  { code: "MSP", city: "明尼阿波利斯", country: "美国", name: "明尼阿波利斯-圣保罗机场", region: "北美洲" },
  { code: "DTW", city: "底特律", country: "美国", name: "底特律都会韦恩县机场", region: "北美洲" },
  { code: "PHL", city: "费城", country: "美国", name: "费城国际机场", region: "北美洲" },
  { code: "SAN", city: "圣迭戈", country: "美国", name: "圣迭戈国际机场", region: "北美洲" },
  { code: "TPA", city: "坦帕", country: "美国", name: "坦帕国际机场", region: "北美洲" },
  { code: "BWI", city: "巴尔的摩", country: "美国", name: "巴尔的摩-华盛顿机场", region: "北美洲" },
  { code: "SLC", city: "盐湖城", country: "美国", name: "盐湖城国际机场", region: "北美洲" },
  { code: "AUS", city: "奥斯汀", country: "美国", name: "奥斯汀-伯格斯特罗姆机场", region: "北美洲" },
  { code: "PDX", city: "波特兰", country: "美国", name: "波特兰国际机场", region: "北美洲" },
  { code: "RDU", city: "罗利", country: "美国", name: "罗利-达勒姆国际机场", region: "北美洲" },
  { code: "HNL", city: "檀香山", country: "美国", name: "丹尼尔·井上国际机场", region: "北美洲" },

  // 加拿大
  { code: "YYZ", city: "多伦多", country: "加拿大", name: "多伦多皮尔逊国际机场", region: "北美洲" },
  { code: "YVR", city: "温哥华", country: "加拿大", name: "温哥华国际机场", region: "北美洲" },
  { code: "YUL", city: "蒙特利尔", country: "加拿大", name: "蒙特利尔-特鲁多机场", region: "北美洲" },
  { code: "YYC", city: "卡尔加里", country: "加拿大", name: "卡尔加里国际机场", region: "北美洲" },
  { code: "YEG", city: "埃德蒙顿", country: "加拿大", name: "埃德蒙顿国际机场", region: "北美洲" },
  { code: "YOW", city: "渥太华", country: "加拿大", name: "渥太华麦克唐纳-卡蒂埃机场", region: "北美洲" },

  // 墨西哥
  { code: "MEX", city: "墨西哥城", country: "墨西哥", name: "墨西哥城国际机场", region: "北美洲" },
  { code: "CUN", city: "坎昆", country: "墨西哥", name: "坎昆国际机场", region: "北美洲" },

  // 英国
  { code: "LHR", city: "伦敦", country: "英国", name: "伦敦希思罗机场", region: "欧洲" },
  { code: "LGW", city: "伦敦", country: "英国", name: "伦敦盖特威克机场", region: "欧洲" },
  { code: "STN", city: "伦敦", country: "英国", name: "伦敦斯坦斯特德机场", region: "欧洲" },
  { code: "MAN", city: "曼彻斯特", country: "英国", name: "曼彻斯特机场", region: "欧洲" },
  { code: "EDI", city: "爱丁堡", country: "英国", name: "爱丁堡机场", region: "欧洲" },
  { code: "BHX", city: "伯明翰", country: "英国", name: "伯明翰机场", region: "欧洲" },
  { code: "GLA", city: "格拉斯哥", country: "英国", name: "格拉斯哥机场", region: "欧洲" },

  // 法国
  { code: "CDG", city: "巴黎", country: "法国", name: "巴黎戴高乐机场", region: "欧洲" },
  { code: "ORY", city: "巴黎", country: "法国", name: "巴黎奥利机场", region: "欧洲" },
  { code: "NCE", city: "尼斯", country: "法国", name: "尼斯蔚蓝海岸机场", region: "欧洲" },
  { code: "LYS", city: "里昂", country: "法国", name: "里昂圣埃克絮佩里机场", region: "欧洲" },
  { code: "MRS", city: "马赛", country: "法国", name: "马赛普罗旺斯机场", region: "欧洲" },

  // 德国
  { code: "FRA", city: "法兰克福", country: "德国", name: "法兰克福机场", region: "欧洲" },
  { code: "MUC", city: "慕尼黑", country: "德国", name: "慕尼黑机场", region: "欧洲" },
  { code: "BER", city: "柏林", country: "德国", name: "柏林勃兰登堡机场", region: "欧洲" },
  { code: "HAM", city: "汉堡", country: "德国", name: "汉堡机场", region: "欧洲" },
  { code: "DUS", city: "杜塞尔多夫", country: "德国", name: "杜塞尔多夫机场", region: "欧洲" },
  { code: "CGN", city: "科隆", country: "德国", name: "科隆/波恩机场", region: "欧洲" },
  { code: "STR", city: "斯图加特", country: "德国", name: "斯图加特机场", region: "欧洲" },

  // 意大利
  { code: "FCO", city: "罗马", country: "意大利", name: "菲乌米奇诺机场", region: "欧洲" },
  { code: "MXP", city: "米兰", country: "意大利", name: "马尔彭萨机场", region: "欧洲" },
  { code: "VCE", city: "威尼斯", country: "意大利", name: "威尼斯马可波罗机场", region: "欧洲" },
  { code: "NAP", city: "那不勒斯", country: "意大利", name: "那不勒斯国际机场", region: "欧洲" },
  { code: "FLR", city: "佛罗伦萨", country: "意大利", name: "佛罗伦萨-佩雷托拉机场", region: "欧洲" },

  // 西班牙
  { code: "MAD", city: "马德里", country: "西班牙", name: "阿道弗·苏亚雷斯机场", region: "欧洲" },
  { code: "BCN", city: "巴塞罗那", country: "西班牙", name: "何塞普·塔拉德利亚斯机场", region: "欧洲" },
  { code: "AGP", city: "马拉加", country: "西班牙", name: "马拉加-太阳海岸机场", region: "欧洲" },
  { code: "PMI", city: "马略卡岛", country: "西班牙", name: "马略卡岛帕尔马机场", region: "欧洲" },
  { code: "VLC", city: "瓦伦西亚", country: "西班牙", name: "瓦伦西亚机场", region: "欧洲" },

  // 荷兰
  { code: "AMS", city: "阿姆斯特丹", country: "荷兰", name: "史基浦机场", region: "欧洲" },
  { code: "RTM", city: "鹿特丹", country: "荷兰", name: "鹿特丹海牙机场", region: "欧洲" },

  // 瑞士
  { code: "ZRH", city: "苏黎世", country: "瑞士", name: "苏黎世机场", region: "欧洲" },
  { code: "GVA", city: "日内瓦", country: "瑞士", name: "日内瓦机场", region: "欧洲" },

  // 奥地利
  { code: "VIE", city: "维也纳", country: "奥地利", name: "维也纳国际机场", region: "欧洲" },
  { code: "SZG", city: "萨尔茨堡", country: "奥地利", name: "萨尔茨堡机场", region: "欧洲" },

  // 比利时
  { code: "BRU", city: "布鲁塞尔", country: "比利时", name: "布鲁塞尔机场", region: "欧洲" },

  // 瑞典
  { code: "ARN", city: "斯德哥尔摩", country: "瑞典", name: "斯德哥尔摩-阿兰达机场", region: "欧洲" },
  { code: "GOT", city: "哥德堡", country: "瑞典", name: "哥德堡-兰德维特机场", region: "欧洲" },

  // 挪威
  { code: "OSL", city: "奥斯陆", country: "挪威", name: "奥斯陆加勒穆恩机场", region: "欧洲" },
  { code: "BGO", city: "卑尔根", country: "挪威", name: "卑尔根机场", region: "欧洲" },

  // 丹麦
  { code: "CPH", city: "哥本哈根", country: "丹麦", name: "哥本哈根机场", region: "欧洲" },

  // 芬兰
  { code: "HEL", city: "赫尔辛基", country: "芬兰", name: "赫尔辛基-万塔机场", region: "欧洲" },

  // 俄罗斯
  { code: "SVO", city: "莫斯科", country: "俄罗斯", name: "谢列梅捷沃国际机场", region: "欧洲" },
  { code: "DME", city: "莫斯科", country: "俄罗斯", name: "多莫杰多沃机场", region: "欧洲" },
  { code: "LED", city: "圣彼得堡", country: "俄罗斯", name: "普尔科沃机场", region: "欧洲" },

  // 波兰
  { code: "WAW", city: "华沙", country: "波兰", name: "华沙肖邦机场", region: "欧洲" },
  { code: "KRK", city: "克拉科夫", country: "波兰", name: "克拉科夫-巴利采机场", region: "欧洲" },

  // 捷克
  { code: "PRG", city: "布拉格", country: "捷克", name: "布拉格瓦茨拉夫·哈维尔机场", region: "欧洲" },

  // 匈牙利
  { code: "BUD", city: "布达佩斯", country: "匈牙利", name: "布达佩斯李斯特·费伦茨机场", region: "欧洲" },

  // 希腊
  { code: "ATH", city: "雅典", country: "希腊", name: "雅典国际机场", region: "欧洲" },
  { code: "JTR", city: "圣托里尼", country: "希腊", name: "圣托里尼机场", region: "欧洲" },
  { code: "HER", city: "伊拉克利翁", country: "希腊", name: "伊拉克利翁机场", region: "欧洲" },

  // 葡萄牙
  { code: "LIS", city: "里斯本", country: "葡萄牙", name: "里斯本机场", region: "欧洲" },
  { code: "OPO", city: "波尔图", country: "葡萄牙", name: "波尔图机场", region: "欧洲" },

  // 爱尔兰
  { code: "DUB", city: "都柏林", country: "爱尔兰", name: "都柏林机场", region: "欧洲" },

  // 冰岛
  { code: "KEF", city: "雷克雅未克", country: "冰岛", name: "凯夫拉维克国际机场", region: "欧洲" },

  // 澳大利亚
  { code: "SYD", city: "悉尼", country: "澳大利亚", name: "悉尼金斯福德·史密斯机场", region: "大洋洲" },
  { code: "MEL", city: "墨尔本", country: "澳大利亚", name: "墨尔本机场", region: "大洋洲" },
  { code: "BNE", city: "布里斯班", country: "澳大利亚", name: "布里斯班机场", region: "大洋洲" },
  { code: "PER", city: "珀斯", country: "澳大利亚", name: "珀斯机场", region: "大洋洲" },
  { code: "ADL", city: "阿德莱德", country: "澳大利亚", name: "阿德莱德机场", region: "大洋洲" },
  { code: "CBR", city: "堪培拉", country: "澳大利亚", name: "堪培拉机场", region: "大洋洲" },
  { code: "CNS", city: "凯恩斯", country: "澳大利亚", name: "凯恩斯机场", region: "大洋洲" },

  // 新西兰
  { code: "AKL", city: "奥克兰", country: "新西兰", name: "奥克兰机场", region: "大洋洲" },
  { code: "CHC", city: "基督城", country: "新西兰", name: "基督城机场", region: "大洋洲" },
  { code: "WLG", city: "惠灵顿", country: "新西兰", name: "惠灵顿机场", region: "大洋洲" },

  // 巴西
  { code: "GRU", city: "圣保罗", country: "巴西", name: "圣保罗/瓜鲁柳斯机场", region: "南美洲" },
  { code: "GIG", city: "里约热内卢", country: "巴西", name: "里约热内卢/加利昂机场", region: "南美洲" },
  { code: "BSB", city: "巴西利亚", country: "巴西", name: "巴西利亚国际机场", region: "南美洲" },

  // 阿根廷
  { code: "EZE", city: "布宜诺斯艾利斯", country: "阿根廷", name: "埃塞萨国际机场", region: "南美洲" },

  // 智利
  { code: "SCL", city: "圣地亚哥", country: "智利", name: "阿图罗·梅里诺·贝尼特斯机场", region: "南美洲" },

  // 秘鲁
  { code: "LIM", city: "利马", country: "秘鲁", name: "豪尔赫·查韦斯国际机场", region: "南美洲" },

  // 哥伦比亚
  { code: "BOG", city: "波哥大", country: "哥伦比亚", name: "埃尔多拉多国际机场", region: "南美洲" },

  // 南非
  { code: "JNB", city: "约翰内斯堡", country: "南非", name: "奥利弗·坦博国际机场", region: "非洲" },
  { code: "CPT", city: "开普敦", country: "南非", name: "开普敦国际机场", region: "非洲" },

  // 埃及
  { code: "CAI", city: "开罗", country: "埃及", name: "开罗国际机场", region: "非洲" },
  { code: "HRG", city: "赫尔格达", country: "埃及", name: "赫尔格达国际机场", region: "非洲" },

  // 摩洛哥
  { code: "CMN", city: "卡萨布兰卡", country: "摩洛哥", name: "穆罕默德五世国际机场", region: "非洲" },
  { code: "RAK", city: "马拉喀什", country: "摩洛哥", name: "马拉喀什-迈纳拉机场", region: "非洲" },

  // 肯尼亚
  { code: "NBO", city: "内罗毕", country: "肯尼亚", name: "乔莫·肯雅塔国际机场", region: "非洲" },

  // 埃塞俄比亚
  { code: "ADD", city: "亚的斯亚贝巴", country: "埃塞俄比亚", name: "博莱国际机场", region: "非洲" },

  // 尼日利亚
  { code: "LOS", city: "拉各斯", country: "尼日利亚", name: "穆尔塔拉·穆罕默德机场", region: "非洲" },
];

// 按区域分组
export const airportsByRegion = airports.reduce((acc, airport) => {
  if (!acc[airport.region]) {
    acc[airport.region] = [];
  }
  acc[airport.region].push(airport);
  return acc;
}, {} as Record<string, Airport[]>);

// 按国家分组
export const airportsByCountry = airports.reduce((acc, airport) => {
  if (!acc[airport.country]) {
    acc[airport.country] = [];
  }
  acc[airport.country].push(airport);
  return acc;
}, {} as Record<string, Airport[]>);

// 搜索机场
export function searchAirports(query: string): Airport[] {
  const lowerQuery = query.toLowerCase();
  return airports.filter(
    (airport) =>
      airport.city.toLowerCase().includes(lowerQuery) ||
      airport.code.toLowerCase().includes(lowerQuery) ||
      airport.country.toLowerCase().includes(lowerQuery) ||
      airport.name.toLowerCase().includes(lowerQuery)
  );
}

// 获取热门机场
export function getPopularAirports(limit: number = 10): Airport[] {
  const popularCodes = ["PEK", "PVG", "HKG", "HND", "SIN", "DXB", "LHR", "JFK", "LAX", "CDG"];
  return airports.filter((a) => popularCodes.includes(a.code)).slice(0, limit);
}
