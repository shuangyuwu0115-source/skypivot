import { Train, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface PopularTrainsSectionProps {
  language?: 'zh' | 'en';
}

export function PopularTrainsSection({ language = 'zh' }: PopularTrainsSectionProps) {
  const t = {
    zh: {
      title: '热门火车线路',
      subtitle: '体验世界经典铁路之旅',
      duration: '时长'
    },
    en: {
      title: 'Popular Train Routes',
      subtitle: 'Experience classic railway journeys around the world',
      duration: 'Duration'
    }
  }[language];

  const routes = [
    { from: '北京', to: '上海', duration: '4h28m', type: '高铁', image: '🚄' },
    { from: '东京', to: '大阪', duration: '2h30m', type: '新干线', image: '🚅' },
    { from: '巴黎', to: '伦敦', duration: '2h16m', type: '欧洲之星', image: '🚂' },
    { from: '罗马', to: '米兰', duration: '2h55m', type: '高铁', image: '🚆' },
  ];

  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{t.title}</h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">{route.image}</div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-800 font-semibold">
                        <span>{route.from}</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>{route.to}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Train className="w-4 h-4" />
                        <span>{route.type}</span>
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
