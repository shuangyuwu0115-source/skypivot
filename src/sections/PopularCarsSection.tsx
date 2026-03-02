import { Car, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularCarsSectionProps {
  language?: 'zh' | 'en';
}

export function PopularCarsSection({ language = 'zh' }: PopularCarsSectionProps) {
  const t = {
    zh: {
      title: '热门租车城市',
      subtitle: '自驾游最佳目的地推荐',
      from: '起',
      book: '去预订',
      cars: '款车型'
    },
    en: {
      title: 'Popular Car Rental Cities',
      subtitle: 'Best destinations for self-driving adventures',
      from: 'from',
      book: 'Book Now',
      cars: 'car models'
    }
  }[language];

  const cities = [
    { 
      city: '洛杉矶', 
      country: '美国', 
      price: 280, 
      carCount: 120,
      image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&h=300&fit=crop',
      url: 'https://www.hertz.com/rentacar/reservation/home',
      domestic: false
    },
    { 
      city: '三亚', 
      country: '中国', 
      price: 180, 
      carCount: 80,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      url: 'https://www.zuche.com',
      domestic: true
    },
    { 
      city: '成都', 
      country: '中国', 
      price: 150, 
      carCount: 95,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      url: 'https://www.1hai.cn',
      domestic: true
    },
    { 
      city: '大理', 
      country: '中国', 
      price: 120, 
      carCount: 45,
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop',
      url: 'https://car.ctrip.com',
      domestic: true
    },
    { 
      city: '乌鲁木齐', 
      country: '中国', 
      price: 200, 
      carCount: 35,
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=300&fit=crop',
      url: 'https://www.zuche.com',
      domestic: true
    },
    { 
      city: '奥兰多', 
      country: '美国', 
      price: 220, 
      carCount: 150,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
      url: 'https://www.enterprise.com',
      domestic: false
    },
  ];

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{t.title}</h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onClick={() => handleClick(city.url)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{city.city}</h3>
                  <p className="text-sm text-white/80">{city.country}</p>
                </div>
                <button 
                  className="absolute top-4 right-4 px-3 py-1.5 bg-sky-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(city.url);
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  {t.book}
                </button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Car className="w-4 h-4" />
                    <span>{city.carCount} {t.cars}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">{t.from}</span>
                    <span className="text-xl font-bold text-sky-600 ml-1">¥{city.price}</span>
                    <span className="text-xs text-slate-400">/天</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
