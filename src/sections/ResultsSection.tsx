import { useState } from 'react';
import { Plane, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SearchParams {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  tripType: 'roundTrip' | 'oneWay';
  cabinClass: 'economy' | 'business' | 'first';
}

interface ResultsSectionProps {
  language?: 'zh' | 'en';
  searchParams: SearchParams;
}

export function ResultsSection({ language = 'zh', searchParams }: ResultsSectionProps) {
  const [sortBy, setSortBy] = useState<'recommended' | 'cheapest' | 'fastest'>('recommended');
  
  const t = {
    zh: {
      title: '机票比价结果',
      subtitle: '为您找到以下平台的优惠价格',
      recommended: '推荐',
      cheapest: '最便宜',
      fastest: '最快',
      bookNow: '去预订',
      direct: '直飞',
      stops: '经停',
      from: '起',
      route: '航线',
      platforms: {
        ctrip: '携程',
        qunar: '去哪儿',
        expedia: 'Expedia',
        skyscanner: 'Skyscanner'
      }
    },
    en: {
      title: 'Flight Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      cheapest: 'Cheapest',
      fastest: 'Fastest',
      bookNow: 'Book Now',
      direct: 'Direct',
      stops: 'stops',
      from: 'from',
      route: 'Route',
      platforms: {
        ctrip: 'Ctrip',
        qunar: 'Qunar',
        expedia: 'Expedia',
        skyscanner: 'Skyscanner'
      }
    }
  }[language];

  // 纯跳转链接（无联盟追踪）
  const flightPlatforms = [
    { name: t.platforms.ctrip, url: 'https://www.ctrip.com', color: 'bg-blue-500' },
    { name: t.platforms.qunar, url: 'https://www.qunar.com', color: 'bg-green-500' },
    { name: t.platforms.expedia, url: 'https://www.expedia.com', color: 'bg-yellow-500' },
    { name: t.platforms.skyscanner, url: 'https://www.skyscanner.com', color: 'bg-sky-500' }
  ];

  // 从搜索参数中提取城市名称（去掉括号内容）
  const fromCity = searchParams.from.split('(')[0].trim() || '北京';
  const toCity = searchParams.to.split('(')[0].trim() || '上海';

  // 根据搜索参数动态生成航班数据
  const generateFlights = () => {
    const basePrice = 500 + Math.random() * 1000;
    const airlines = ['中国国航', '东方航空', '南方航空', '海南航空', '厦门航空'];
    
    return airlines.map((airline, index) => {
      const price = Math.round(basePrice + (index * 100) - 200);
      const depHour = 8 + index * 2;
      const duration = 2 + Math.floor(Math.random() * 2);
      const arrHour = depHour + duration;
      
      return {
        airline,
        flightNo: `${['CA', 'MU', 'CZ', 'HU', 'MF'][index]}${1000 + index * 1234}`,
        from: fromCity,
        to: toCity,
        dep: `${String(depHour).padStart(2, '0')}:00`,
        arr: `${String(arrHour).padStart(2, '0')}:30`,
        duration: `${duration}h30m`,
        price: Math.max(400, price),
        stops: index === 2 ? 1 : 0
      };
    });
  };

  const flights = generateFlights();

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === 'cheapest') return a.price - b.price;
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-slate-500">{fromCity} → {toCity} | {searchParams.departureDate || '2024-12-01'}</p>
        </div>
        <div className="flex gap-2">
          {(['recommended', 'cheapest', 'fastest'] as const).map((sort) => (
            <button
              key={sort}
              onClick={() => setSortBy(sort)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                sortBy === sort
                  ? 'bg-sky-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t[sort]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {sortedFlights.map((flight, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <Plane className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{flight.airline}</div>
                    <div className="text-sm text-slate-500">{flight.flightNo}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 flex-1 justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{flight.dep}</div>
                    <div className="text-sm text-slate-500">{flight.from}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-slate-400">{flight.duration}</div>
                    <div className="w-24 h-px bg-slate-300 relative">
                      <Plane className="w-4 h-4 text-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {flight.stops === 0 ? t.direct : `${flight.stops}${t.stops}`}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{flight.arr}</div>
                    <div className="text-sm text-slate-500">{flight.to}</div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sky-600">¥{flight.price}</div>
                    <div className="text-xs text-slate-400">{t.from}</div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {flightPlatforms.map((platform, idx) => (
                      <Button 
                        key={idx}
                        size="sm"
                        className={`${platform.color} text-white hover:opacity-90`}
                        onClick={() => window.open(platform.url, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {platform.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
