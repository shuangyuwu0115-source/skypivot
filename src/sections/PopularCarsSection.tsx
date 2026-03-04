import { Car, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularCarsSectionProps {
  language?: 'zh' | 'en';
  onCityClick?: (city: string) => void;
}

export default function PopularCarsSection({ language = 'zh', onCityClick }: PopularCarsSectionProps) {
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
      image: 'https://www.tripsavvy.com/thmb/UfG0_2WB67pErEqfIQMvEjV4W20=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-947698310-1729da81e58f40058a9e45ba82532d57-2f992696318c42cbbd595ef3ec1043fd.jpg',
      url: 'https://www.hertz.com/rentacar/reservation/home',
      domestic: false
    },
    { 
      city: '三亚', 
      country: '中国', 
      price: 180, 
      carCount: 80,
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/2c/1f/f5/fe/overview-of-mandarin.jpg',
      url: 'https://www.zuche.com',
      domestic: true
    },
    { 
      city: '成都', 
      country: '中国', 
      price: 150, 
      carCount: 95,
      image: 'https://media.istockphoto.com/id/510901343/photo/chengdu-china-on-the-jin-river.jpg?s=612x612&w=0',
      url: 'https://www.1hai.cn',
      domestic: true
    },
    { 
      city: '大理', 
      country: '中国', 
      price: 120, 
      carCount: 45,
      image: 'https://www.bivou.com/wp-content/uploads/2011/12/710c8f866d137c08587bbe5378fc87f5.jpg',
      url: 'https://car.ctrip.com',
      domestic: true
    },
    { 
      city: '乌鲁木齐', 
      country: '中国', 
      price: 200, 
      carCount: 35,
      image: 'https://news.cgtn.com/news/35457a4e3067544f3559444d7a51544d32676a4e31457a6333566d54/img/83bb0caa02b14900bda73f5aa4c4049b/83bb0caa02b14900bda73f5aa4c4049b.png',
      url: 'https://www.zuche.com',
      domestic: true
    },
    { 
      city: '奥兰多', 
      country: '美国', 
      price: 220, 
      carCount: 150,
      image: 'https://iconparkorlando.com/bc/wp-content/uploads/wheel-gallery-night2.webp',
      url: 'https://www.enterprise.com',
      domestic: false
    },
  ];

  const handleClick = (url: string, cityName?: string) => {
    if (cityName && onCityClick) {
      onCityClick(cityName);
    } else {
      window.open(url, '_blank');
    }
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
              onClick={() => handleClick(city.url, city.city)}
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
                    handleClick(city.url, city.city);
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
