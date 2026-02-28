import { Building2, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularHotelsSectionProps {
  language?: 'zh' | 'en';
}

export function PopularHotelsSection({ language = 'zh' }: PopularHotelsSectionProps) {
  const t = {
    zh: {
      title: '热门酒店目的地',
      subtitle: '发现全球最受欢迎的住宿城市',
      from: '起'
    },
    en: {
      title: 'Popular Hotel Destinations',
      subtitle: 'Discover the world\'s most popular accommodation cities',
      from: 'from'
    }
  }[language];

  const destinations = [
    { city: '东京', country: '日本', price: 580, rating: 4.8, image: '🗼' },
    { city: '巴黎', country: '法国', price: 980, rating: 4.7, image: '🗼' },
    { city: '纽约', country: '美国', price: 1280, rating: 4.6, image: '🗽' },
    { city: '新加坡', country: '新加坡', price: 680, rating: 4.8, image: '🦁' },
    { city: '迪拜', country: '阿联酋', price: 880, rating: 4.9, image: '🏙️' },
    { city: '悉尼', country: '澳大利亚', price: 780, rating: 4.7, image: '🦘' },
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{t.title}</h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {dest.image}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-800">{dest.city}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">{dest.rating}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-3">{dest.country}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>1000+ 酒店</span>
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
