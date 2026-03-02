import { Plane, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularRoutesSectionProps {
  language?: 'zh' | 'en';
}

export function PopularRoutesSection({ language = 'zh' }: PopularRoutesSectionProps) {
  const t = {
    zh: {
      title: '热门航线',
      subtitle: '探索最受欢迎的飞行目的地',
      from: '起',
      book: '去预订'
    },
    en: {
      title: 'Popular Routes',
      subtitle: 'Explore the most popular flight destinations',
      from: 'from',
      book: 'Book Now'
    }
  }[language];

  const routes = [
    { 
      from: '北京', 
      to: '上海', 
      price: 580, 
      image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=400&h=300&fit=crop',
      url: 'https://flights.ctrip.com'
    },
    { 
      from: '上海', 
      to: '东京', 
      price: 1280, 
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      url: 'https://www.expedia.com'
    },
    { 
      from: '广州', 
      to: '新加坡', 
      price: 980, 
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      url: 'https://www.skyscanner.com'
    },
    { 
      from: '深圳', 
      to: '曼谷', 
      price: 680, 
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=300&fit=crop',
      url: 'https://www.agoda.com/flights'
    },
    { 
      from: '成都', 
      to: '巴黎', 
      price: 3680, 
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
      url: 'https://www.booking.com/flights'
    },
    { 
      from: '杭州', 
      to: '悉尼', 
      price: 2580, 
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop',
      url: 'https://www.trip.com'
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
          {routes.map((route, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onClick={() => handleClick(route.url)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={route.image} 
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <span className="font-semibold">{route.from}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold">{route.to}</span>
                  </div>
                </div>
                <button 
                  className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-800 text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(route.url);
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  {t.book}
                </button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sky-600">
                    <Plane className="w-4 h-4" />
                    <span className="text-sm">直飞</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">{t.from}</span>
                    <span className="text-xl font-bold text-sky-600 ml-1">¥{route.price}</span>
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
