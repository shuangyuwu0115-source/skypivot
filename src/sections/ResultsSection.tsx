import { useState } from 'react';
import { Plane, Clock, Luggage, ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { flightPlatforms } from '@/data/platforms';
import { randomPrice } from '@/lib/utils';

interface ResultsSectionProps {
  language?: 'zh' | 'en';
}

export function ResultsSection({ language = 'zh' }: ResultsSectionProps) {
  const [sortBy, setSortBy] = useState<'recommended' | 'cheapest' | 'fastest'>('recommended');
  
  const t = {
    zh: {
      title: '机票比价结果',
      subtitle: '为您找到以下平台的优惠价格',
      recommended: '推荐',
      cheapest: '最便宜',
      fastest: '最快',
      bookNow: '立即预订',
      viewDeal: '查看优惠',
      direct: '直飞',
      stops: '经停',
      from: '起',
      baggage: '行李'
    },
    en: {
      title: 'Flight Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      cheapest: 'Cheapest',
      fastest: 'Fastest',
      bookNow: 'Book Now',
      viewDeal: 'View Deal',
      direct: 'Direct',
      stops: 'stops',
      from: 'from',
      baggage: 'Baggage'
    }
  }[language];

  const flights = [
    { airline: '中国国航', flightNo: 'CA1234', from: '北京', to: '上海', dep: '08:00', arr: '10:30', duration: '2h30m', price: 880, stops: 0 },
    { airline: '东方航空', flightNo: 'MU5678', from: '北京', to: '上海', dep: '10:00', arr: '12:30', duration: '2h30m', price: 760, stops: 0 },
    { airline: '南方航空', flightNo: 'CZ9012', from: '北京', to: '上海', dep: '14:00', arr: '16:45', duration: '2h45m', price: 690, stops: 1 },
  ];

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === 'cheapest') return a.price - b.price;
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-slate-500">{t.subtitle}</p>
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

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sky-600">¥{flight.price}</div>
                    <div className="text-xs text-slate-400">{t.from}</div>
                  </div>
                  <Button className="bg-sky-500 hover:bg-sky-600">
                    {t.bookNow}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
