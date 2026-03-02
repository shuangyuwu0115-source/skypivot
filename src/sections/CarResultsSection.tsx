import { useState } from 'react';
import { Car, Users, Briefcase, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SearchParams {
  from: string;
  to: string;
  hotelBrand: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  tripType: 'roundTrip' | 'oneWay';
  cabinClass: 'economy' | 'business' | 'first';
  isDomestic: boolean;
}

interface CarResultsSectionProps {
  language?: 'zh' | 'en';
  searchParams: SearchParams;
}

export function CarResultsSection({ language = 'zh', searchParams }: CarResultsSectionProps) {
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
      unlimited: '无限里程',
      insurance: '含保险',
      auto: '自动挡',
      domestic: '国内租车',
      international: '国际租车'
    },
    en: {
      title: 'Car Rental Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      price: 'Price',
      rating: 'Rating',
      bookNow: 'Book Now',
      perDay: 'per day',
      unlimited: 'Unlimited Miles',
      insurance: 'Insurance Included',
      auto: 'Automatic',
      domestic: 'Domestic Rental',
      international: 'International Rental'
    }
  }[language];

  // 国内租车平台
  const domesticPlatforms = [
    { name: '神州租车', url: 'https://www.zuche.com', color: 'bg-blue-600' },
    { name: '一嗨租车', url: 'https://www.1hai.cn', color: 'bg-green-600' },
    { name: '携程租车', url: 'https://car.ctrip.com', color: 'bg-blue-500' },
    { name: '悟空租车', url: 'https://www.wukongzuche.com', color: 'bg-orange-500' },
    { name: '凹凸租车', url: 'https://www.atzuche.com', color: 'bg-red-500' },
    { name: '大方租车', url: 'https://www.dafang24.com', color: 'bg-purple-600' }
  ];

  // 国际租车平台
  const internationalPlatforms = [
    { name: 'Hertz', url: 'https://www.hertz.com', color: 'bg-yellow-500' },
    { name: 'Enterprise', url: 'https://www.enterprise.com', color: 'bg-green-600' },
    { name: 'Avis', url: 'https://www.avis.com', color: 'bg-red-600' },
    { name: 'Budget', url: 'https://www.budget.com', color: 'bg-orange-500' },
    { name: 'Europcar', url: 'https://www.europcar.com', color: 'bg-green-500' },
    { name: 'SIXT', url: 'https://www.sixt.com', color: 'bg-red-700' }
  ];

  // 根据目的地判断使用国内还是国际平台
  const carPlatforms = searchParams.isDomestic ? domesticPlatforms : internationalPlatforms;
  const locationType = searchParams.isDomestic ? t.domestic : t.international;

  const cars = [
    { model: searchParams.isDomestic ? '大众朗逸' : 'Toyota Corolla', type: '经济型', seats: 5, luggage: 2, price: searchParams.isDomestic ? 180 : 45, rating: 4.6 },
    { model: searchParams.isDomestic ? '本田CR-V' : 'Honda CR-V', type: 'SUV', seats: 5, luggage: 4, price: searchParams.isDomestic ? 350 : 65, rating: 4.8 },
    { model: searchParams.isDomestic ? '奥迪A6L' : 'BMW 5 Series', type: '豪华型', seats: 5, luggage: 3, price: searchParams.isDomestic ? 680 : 120, rating: 4.9 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-slate-500">{searchParams.to || '目的地'} | {locationType}</p>
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
                    <Badge variant="outline" className="text-xs">{t.auto}</Badge>
                    <Badge variant="outline" className="text-xs">{t.unlimited}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-sky-600">
                    {searchParams.isDomestic ? '¥' : '$'}{car.price}
                  </div>
                  <div className="text-sm text-slate-400 mb-3">/{t.perDay}</div>
                  <div className="flex gap-2 flex-wrap max-w-xs justify-end">
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
