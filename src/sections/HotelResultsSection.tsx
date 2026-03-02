import { useState } from 'react';
import { Building2, MapPin, Star, ExternalLink } from 'lucide-react';
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

interface HotelResultsSectionProps {
  language?: 'zh' | 'en';
  searchParams: SearchParams;
}

export function HotelResultsSection({ language = 'zh', searchParams }: HotelResultsSectionProps) {
  const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'rating'>('recommended');
  
  const t = {
    zh: {
      title: '酒店比价结果',
      subtitle: '为您找到以下平台的优惠价格',
      recommended: '推荐',
      price: '价格',
      rating: '评分',
      bookNow: '去预订',
      perNight: '每晚',
      brand: '品牌',
      allBrands: '全部品牌'
    },
    en: {
      title: 'Hotel Comparison Results',
      subtitle: 'Best prices found from these platforms',
      recommended: 'Recommended',
      price: 'Price',
      rating: 'Rating',
      bookNow: 'Book Now',
      perNight: 'per night',
      brand: 'Brand',
      allBrands: 'All Brands'
    }
  }[language];

  const hotelPlatforms = [
    { name: 'Booking.com', url: 'https://www.booking.com', color: 'bg-blue-600' },
    { name: '携程', url: 'https://www.ctrip.com', color: 'bg-blue-500' },
    { name: 'Agoda', url: 'https://www.agoda.com', color: 'bg-purple-500' },
    { name: 'Expedia', url: 'https://www.expedia.com', color: 'bg-yellow-500' }
  ];

  // 根据酒店品牌筛选酒店数据
  const destination = searchParams.to.split('(')[0].trim() || '上海';
  const selectedBrand = searchParams.hotelBrand;

  const allHotels = [
    { name: `${destination}万豪酒店`, brand: '万豪', location: `${destination}市中心`, rating: 4.8, reviews: 2341, price: 1280, stars: 5 },
    { name: `${destination}希尔顿酒店`, brand: '希尔顿', location: `${destination}商务区`, rating: 4.9, reviews: 1856, price: 1580, stars: 5 },
    { name: `${destination}洲际酒店`, brand: '洲际', location: `${destination}外滩`, rating: 4.7, reviews: 3210, price: 980, stars: 5 },
    { name: `${destination}香格里拉大酒店`, brand: '香格里拉', location: `${destination}金融区`, rating: 4.8, reviews: 2100, price: 1180, stars: 5 },
    { name: `${destination}凯悦酒店`, brand: '凯悦', location: `${destination}购物中心`, rating: 4.6, reviews: 1890, price: 880, stars: 4 },
    { name: `${destination}全季酒店`, brand: '全季', location: `${destination}火车站`, rating: 4.5, reviews: 4500, price: 380, stars: 3 },
    { name: `${destination}亚朵酒店`, brand: '亚朵', location: `${destination}机场附近`, rating: 4.7, reviews: 3200, price: 450, stars: 4 },
    { name: `${destination}如家快捷酒店`, brand: '如家', location: `${destination}老城区`, rating: 4.2, reviews: 5600, price: 280, stars: 2 },
  ];

  // 根据选择的品牌筛选
  const hotels = selectedBrand 
    ? allHotels.filter(h => h.brand === selectedBrand)
    : allHotels;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
          <p className="text-slate-500">
            {destination} 
            {selectedBrand && ` | ${t.brand}: ${selectedBrand}`}
          </p>
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
              🏨
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
                <Badge variant="outline" className="text-xs">{hotel.brand}</Badge>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-2xl font-bold text-sky-600">¥{hotel.price}</span>
                  <span className="text-sm text-slate-400">/{t.perNight}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {hotelPlatforms.map((platform, idx) => (
                  <Button 
                    key={idx}
                    size="sm"
                    variant="outline"
                    className={`${platform.color} text-white hover:opacity-90 border-0`}
                    onClick={() => window.open(platform.url, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {platform.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
