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
      book: '去预订'
    },
    en: {
      title: 'Popular Train Routes',
      subtitle: 'Experience classic railway journeys around the world',
      duration: 'Duration',
      book: 'Book Now'
    }
  }[language];

  const routes = [
    // 国内线路
    { from: '北京', to: '上海', duration: '4h28m', type: '高铁', image: '🚄', url: 'https://www.12306.cn', region: '国内' },
    { from: '上海', to: '杭州', duration: '1h', type: '高铁', image: '🚅', url: 'https://www.ctrip.com', region: '国内' },
    { from: '广州', to: '深圳', duration: '0.5h', type: '高铁', image: '🚆', url: 'https://www.12306.cn', region: '国内' },
    { from: '成都', to: '重庆', duration: '1.5h', type: '高铁', image: '🚂', url: 'https://www.qunar.com', region: '国内' },
    
    // 海外线路 - 日本
    { from: '东京', to: '大阪', duration: '2h30m', type: '新干线', image: '🚅', url: 'https://www.jrpass.com', region: '日本' },
    { from: '东京', to: '京都', duration: '2h15m', type: '新干线', image: '🚅', url: 'https://www.jrpass.com', region: '日本' },
    
    // 海外线路 - 欧洲
    { from: '伦敦', to: '巴黎', duration: '2h16m', type: '欧洲之星', image: '🚂', url: 'https://www.eurostar.com', region: '欧洲' },
    { from: '巴黎', to: '尼斯', duration: '5h58m', type: 'TGV', image: '🚄', url: 'https://www.sncf-connect.com', region: '法国' },
    { from: '法兰克福', to: '慕尼黑', duration: '3h30m', type: 'ICE', image: '🚆', url: 'https://www.bahn.com', region: '德国' },
    { from: '罗马', to: '米兰', duration: '2h55m', type: 'Frecciarossa', image: '🚄', url: 'https://www.trenitalia.com', region: '意大利' },
    { from: '马德里', to: '巴塞罗那', duration: '2h30m', type: 'AVE', image: '🚅', url: 'https://www.renfe.com', region: '西班牙' },
    { from: '苏黎世', to: '米兰', duration: '3h26m', type: 'EuroCity', image: '🚂', url: 'https://www.sbb.ch', region: '瑞士' },
    
    // 海外线路 - 其他
    { from: '莫斯科', to: '圣彼得堡', duration: '3h30m', type: '游隼号', image: '🚄', url: 'https://www.rzd.ru', region: '俄罗斯' },
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
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleClick(route.url)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform relative">
                      {route.image}
                      <button 
                        className="absolute -bottom-1 -right-1 px-2 py-1 bg-sky-500 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(route.url);
                        }}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {t.book}
                      </button>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-800 font-semibold">
                        <span>{route.from}</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>{route.to}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Train className="w-4 h-4" />
                        <span>{route.type}</span>
                        <span className="text-xs px-2 py-0.5 bg-slate-100 rounded-full">{route.region}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{route.duration}</span>
                    </div>
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
