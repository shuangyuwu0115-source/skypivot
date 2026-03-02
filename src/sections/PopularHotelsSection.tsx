import { Building2, MapPin, Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularHotelsSectionProps {
  language?: 'zh' | 'en';
}

export function PopularHotelsSection({ language = 'zh' }: PopularHotelsSectionProps) {
  const t = {
    zh: {
      title: '热门酒店目的地',
      subtitle: '发现全球最受欢迎的住宿城市',
      from: '起',
      book: '去预订',
      hotels: '家酒店'
    },
    en: {
      title: 'Popular Hotel Destinations',
      subtitle: 'Discover the world\'s most popular accommodation cities',
      from: 'from',
      book: 'Book Now',
      hotels: 'hotels'
    }
  }[language];

  const destinations = [
    { 
      city: '东京', 
      country: '日本', 
      price: 580, 
      rating: 4.8, 
      hotelCount: 2500,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      url: 'https://www.booking.com/searchresults.html?ss=Tokyo'
    },
    { 
      city: '巴黎', 
      country: '法国', 
      price: 980, 
      rating: 4.7, 
      hotelCount: 3200,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
      url: 'https://www.booking.com/searchresults.html?ss=Paris'
    },
    { 
      city: '纽约', 
      country: '美国', 
      price: 1280, 
      rating: 4.6, 
      hotelCount: 4500,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
      url: 'https://www.booking.com/searchresults.html?ss=New+York'
    },
    { 
      city: '新加坡', 
      country: '新加坡', 
      price: 680, 
      rating: 4.8, 
      hotelCount: 1800,
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      url: 'https://www.agoda.com/search?city=Singapore'
    },
    { 
      city: '迪拜', 
      country: '阿联酋', 
      price: 880, 
      rating: 4.9, 
      hotelCount: 2100,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      url: 'https://www.booking.com/searchresults.html?ss=Dubai'
    },
    { 
      city: '悉尼', 
      country: '澳大利亚', 
      price: 780, 
      rating: 4.7, 
      hotelCount: 2900,
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop',
      url: 'https://www.booking.com/searchresults.html?ss=Sydney'
    },
  ];

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{t.title}</h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onClick={() => handleClick(dest.url)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-slate-800">{dest.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.city}</h3>
                  <p className="text-sm text-white/80">{dest.country}</p>
                </div>
                <button 
                  className="absolute top-4 left-4 px-3 py-1.5 bg-sky-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(dest.url);
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  {t.book}
                </button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>{dest.hotelCount} {t.hotels}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">{t.from}</span>
                    <span className="text-xl font-bold text-sky-600 ml-1">¥{dest.price}</span>
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
