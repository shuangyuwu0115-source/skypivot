import { Plane, ArrowRight, TrendingUp, ExternalLink } from 'lucide-react';
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
    { from: '北京', to: '上海', price: 580, image: '🌆', url: 'https://flights.ctrip.com' },
    { from: '上海', to: '东京', price: 1280, image: '🗼', url: 'https://www.expedia.com' },
    { from: '广州', to: '新加坡', price: 980, image: '🦁', url: 'https://www.skyscanner.com' },
    { from: '深圳', to: '曼谷', price: 680, image: '🏯', url: 'https://www.agoda.com/flights' },
    { from: '成都', to: '巴黎', price: 3680, image: '🗼', url: 'https://www.booking.com/flights' },
    { from: '杭州', to: '悉尼', price: 2580, image: '🦘', url: 'https://www.trip.com' },
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
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleClick(route.url)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{route.image}</div>
                  <button 
                    className="px-3 py-1 bg-sky-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(route.url);
                    }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    {t.book}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <span>{route.from}</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>{route.to}</span>
                </div>
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
