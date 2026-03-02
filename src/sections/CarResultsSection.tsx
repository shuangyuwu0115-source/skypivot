import { useState } from 'react';
import { Car, Users, Briefcase, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarResultsSectionProps {
  language?: 'zh' | 'en';
}

export function CarResultsSection({ language = 'zh' }: CarResultsSectionProps) {
  const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'rating'>('recommended');
  
  const t = {
    zh: {
      title: '租车比价结果',
      subtitle: '为您找到以下平台的优惠价格',
      recommended: '推荐',
      price: '价格',
      rating: '评分',
      bookNow: '去预订',
      perDay: '每天',
      platforms: {
        hertz: 'Hertz',
        enterprise: 'Enterprise',
        rentalcars: 'Rentalcars',
        sixt: 'SIXT'
      }
    },
    en: {
      title: 'Car Rental Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      price: 'Price',
      rating: 'Rating',
      bookNow: 'Book Now',
      perDay: 'per day',
      platforms: {
        hertz: 'Hertz',
        enterprise: 'Enterprise',
        rentalcars: 'Rentalcars',
        sixt: 'SIXT'
      }
    }
  }[language];

  // 纯跳转链接（无联盟追踪）
  const carPlatforms = [
    { name: t.platforms.hertz, url: 'https://www.hertz.com', color: 'bg-yellow-500' },
    { name: t.platforms.enterprise, url: 'https://www.enterprise.com', color: 'bg-green-600' },
    { name: t.platforms.rentalcars, url: 'https://www.rentalcars.com', color: 'bg-orange-500' },
    { name: t.platforms.sixt, url: 'https://www.sixt.com', color: 'bg-red-600' }
  ];

  const cars = [
    { model: '丰田卡罗拉', type: '经济型', seats: 5, luggage: 2, price: 280, rating: 4.6 },
    { model: '本田CR-V', type: 'SUV', seats: 5, luggage: 4, price: 450, rating: 4.8 },
    { model: '奔驰E级', type: '豪华型', seats: 5, luggage: 3, price: 880, rating: 4.9 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-slate-500">{t.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {(['recommended', 'price', 'rating'] as const).map((sort) => (
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
        {cars.map((car, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="text-6xl">🚗</div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-slate-800">{car.model}</h3>
                  <p className="text-slate-500 mb-3">{car.type}</p>
                  <div className="flex gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" />{car.seats}座</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{car.luggage}行李</span>
                    <Badge variant="outline" className="text-xs">自动挡</Badge>
                    <Badge variant="outline" className="text-xs">无限里程</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-sky-600">¥{car.price}</div>
                  <div className="text-sm text-slate-400 mb-3">/{t.perDay}</div>
                  <div className="flex gap-2 flex-wrap">
                    {carPlatforms.map((platform, idx) => (
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
