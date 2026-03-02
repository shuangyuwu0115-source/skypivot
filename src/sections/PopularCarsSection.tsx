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
      book: '去预订'
    },
    en: {
      title: 'Popular Car Rental Cities',
      subtitle: 'Best destinations for self-driving adventures',
      from: 'from',
      book: 'Book Now'
    }
  }[language];

  const cities = [
    { city: '洛杉矶', country: '美国', price: 280, image: '🌴', url: 'https://www.hertz.com/rentacar/reservation/home', domestic: false },
    { city: '奥兰多', country: '美国', price: 220, image: '🎢', url: 'https://www.enterprise.com/en/home.html', domestic: false },
    { city: '三亚', country: '中国', price: 180, image: '🏖️', url: 'https://www.zuche.com', domestic: true },
    { city: '成都', country: '中国', price: 150, image: '🐼', url: 'https://www.1hai.cn', domestic: true },
    { city: '大理', country: '中国', price: 120, image: '🏔️', url: 'https://car.ctrip.com', domestic: true },
    { city: '乌鲁木齐', country: '中国', price: 200, image: '🏜️', url: 'https://www.zuche.com', domestic: true },
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
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleClick(city.url)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform relative">
                    {city.image}
                    <button 
                      className="absolute -bottom-2 -right-2 px-2 py-1 bg-sky-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(city.url);
                      }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t.book}
                    </button>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800">{city.city}</h3>
                    <p className="text-slate-500 text-sm mb-2">{city.country}</p>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Car className="w-4 h-4" />
                      <span>50+ 车型</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">{t.from}</span>
                    <div className="text-xl font-bold text-sky-600">¥{city.price}</div>
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
