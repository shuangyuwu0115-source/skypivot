import { Train, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularTrainsSectionProps {
  language?: 'zh' | 'en';
}

export function PopularTrainsSection({ language = 'zh' }: PopularTrainsSectionProps) {
  const t = {
    zh: {
      title: '热门火车线路',
      subtitle: '体验世界经典铁路之旅',
      duration: '时长',
      book: '去预订',
      domestic: '国内',
      international: '国际'
    },
    en: {
      title: 'Popular Train Routes',
      subtitle: 'Experience classic railway journeys around the world',
      duration: 'Duration',
      book: 'Book Now',
      domestic: 'Domestic',
      international: 'International'
    }
  }[language];

  const routes = [
    { 
      from: '北京', 
      to: '上海', 
      duration: '4h28m', 
      type: '高铁', 
      image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&h=300&fit=crop',
      url: 'https://www.12306.cn',
      region: '国内'
    },
    { 
      from: '上海', 
      to: '杭州', 
      duration: '1h', 
      type: '高铁', 
      image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=400&h=300&fit=crop',
      url: 'https://www.ctrip.com',
      region: '国内'
    },
    { 
      from: '广州', 
      to: '深圳', 
      duration: '0.5h', 
      type: '高铁', 
      image: 'https://images.unsplash.com/photo-1598255281883-13b172667d58?w=400&h=300&fit=crop',
      url: 'https://www.12306.cn',
      region: '国内'
    },
    { 
      from: '东京', 
      to: '大阪', 
      duration: '2h30m', 
      type: '新干线', 
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=300&fit=crop',
      url: 'https://www.jrpass.com',
      region: '日本'
    },
    { 
      from: '伦敦', 
      to: '巴黎', 
      duration: '2h16m', 
      type: '欧洲之星', 
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop',
      url: 'https://www.eurostar.com',
      region: '欧洲'
    },
    { 
      from: '巴黎', 
      to: '尼斯', 
      duration: '5h58m', 
      type: 'TGV', 
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop',
      url: 'https://www.sncf-connect.com',
      region: '法国'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onClick={() => handleClick(route.url)}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <img 
                    src={route.image} 
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      route.region === '国内' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {route.region === '国内' ? t.domestic : route.region}
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Train className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                          <span>{route.from}</span>
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                          <span>{route.to}</span>
                        </div>
                        <div className="text-sm text-slate-500">{route.type}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{route.duration}</span>
                    </div>
                    <button 
                      className="px-4 py-2 bg-sky-500 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(route.url);
                      }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t.book}
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
