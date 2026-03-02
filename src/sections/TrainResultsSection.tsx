import { useState } from 'react';
import { Train, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TrainResultsSectionProps {
  language?: 'zh' | 'en';
}

export function TrainResultsSection({ language = 'zh' }: TrainResultsSectionProps) {
  const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'time'>('recommended');
  
  const t = {
    zh: {
      title: '火车票比价结果',
      subtitle: '为您找到以下平台的优惠价格',
      recommended: '推荐',
      price: '价格',
      time: '时间',
      bookNow: '去预订',
      second: '二等座',
      platforms: {
        cr: '12306',
        ctrip: '携程',
        qunar: '去哪儿',
        trip: 'Trip.com'
      }
    },
    en: {
      title: 'Train Ticket Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      price: 'Price',
      time: 'Time',
      bookNow: 'Book Now',
      second: 'Second Class',
      platforms: {
        cr: '12306',
        ctrip: 'Ctrip',
        qunar: 'Qunar',
        trip: 'Trip.com'
      }
    }
  }[language];

  // 纯跳转链接（无联盟追踪）
  const trainPlatforms = [
    { name: t.platforms.cr, url: 'https://www.12306.cn', color: 'bg-red-600' },
    { name: t.platforms.ctrip, url: 'https://www.ctrip.com', color: 'bg-blue-500' },
    { name: t.platforms.qunar, url: 'https://www.qunar.com', color: 'bg-green-500' },
    { name: t.platforms.trip, url: 'https://www.trip.com', color: 'bg-sky-500' }
  ];

  const trains = [
    { trainNo: 'G1', type: '复兴号', from: '北京南', to: '上海虹桥', dep: '09:00', arr: '13:28', duration: '4h28m', price: 626, seat: '二等座' },
    { trainNo: 'G3', type: '复兴号', from: '北京南', to: '上海虹桥', dep: '14:00', arr: '18:28', duration: '4h28m', price: 598, seat: '二等座' },
    { trainNo: 'G101', type: '和谐号', from: '北京南', to: '上海虹桥', dep: '07:00', arr: '12:15', duration: '5h15m', price: 553, seat: '二等座' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-slate-500">{t.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {(['recommended', 'price', 'time'] as const).map((sort) => (
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
        {trains.map((train, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Train className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{train.trainNo}</div>
                    <div className="text-sm text-slate-500">{train.type}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 flex-1 justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{train.dep}</div>
                    <div className="text-sm text-slate-500">{train.from}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-slate-400">{train.duration}</div>
                    <div className="w-24 h-px bg-slate-300 relative">
                      <Train className="w-4 h-4 text-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-600">{train.seat}</Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-800">{train.arr}</div>
                    <div className="text-sm text-slate-500">{train.to}</div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sky-600">¥{train.price}</div>
                    <div className="text-xs text-slate-400">{t.second}</div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {trainPlatforms.map((platform, idx) => (
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
