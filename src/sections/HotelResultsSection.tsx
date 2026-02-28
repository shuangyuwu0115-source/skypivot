import { useState } from 'react';
import { Building2, MapPin, Star, Wifi, Coffee, Car, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HotelResultsSectionProps {
  language?: 'zh' | 'en';
}

export function HotelResultsSection({ language = 'zh' }: HotelResultsSectionProps) {
  const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'rating'>('recommended');
  
  const t = {
    zh: {
      title: '酒店比价结果',
      subtitle: '为您找到以下平台的优惠价格',
      recommended: '推荐',
      price: '价格',
      rating: '评分',
      bookNow: '立即预订',
      perNight: '每晚',
      freeCancellation: '免费取消',
      breakfast: '含早餐',
      wifi: '免费WiFi'
    },
    en: {
      title: 'Hotel Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      price: 'Price',
      rating: 'Rating',
      bookNow: 'Book Now',
      perNight: 'per night',
      freeCancellation: 'Free Cancellation',
      breakfast: 'Breakfast Included',
      wifi: 'Free WiFi'
    }
  }[language];

  const hotels = [
    { name: '上海外滩茂悦大酒店', location: '上海外滩', rating: 4.8, reviews: 2341, price: 1280, stars: 5, image: '🏨' },
    { name: '北京国贸大酒店', location: '北京CBD', rating: 4.9, reviews: 1856, price: 1580, stars: 5, image: '🏨' },
    { name: '广州花园酒店', location: '广州天河', rating: 4.6, reviews: 3210, price: 680, stars: 4, image: '🏨' },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center text-6xl">
              {hotel.image}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(hotel.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">{hotel.name}</h3>
              <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                {hotel.location}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sky-600">{hotel.rating}</span>
                  <span className="text-sm text-slate-400">({hotel.reviews})</span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs"><Wifi className="w-3 h-3 mr-1" />{t.wifi}</Badge>
                  <Badge variant="outline" className="text-xs"><Coffee className="w-3 h-3 mr-1" />{t.breakfast}</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-sky-600">¥{hotel.price}</span>
                  <span className="text-sm text-slate-400">/{t.perNight}</span>
                </div>
                <Button className="bg-sky-500 hover:bg-sky-600">{t.bookNow}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
