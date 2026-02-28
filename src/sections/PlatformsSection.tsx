import { ExternalLink, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PlatformsSectionProps {
  language?: 'zh' | 'en';
}

export function PlatformsSection({ language = 'zh' }: PlatformsSectionProps) {
  const t = {
    zh: {
      title: '合作伙伴',
      subtitle: '我们与全球领先的旅行服务商合作，为您提供最全面的比价服务',
      view: '访问网站'
    },
    en: {
      title: 'Our Partners',
      subtitle: 'We partner with leading global travel service providers',
      view: 'Visit Website'
    }
  }[language];

  const platforms = [
    { name: 'Booking.com', category: '酒店', color: 'bg-blue-600' },
    { name: 'Expedia', category: '综合', color: 'bg-yellow-500' },
    { name: '携程', category: '综合', color: 'bg-sky-500' },
    { name: '去哪儿', category: '机票', color: 'bg-green-500' },
    { name: 'Hertz', category: '租车', color: 'bg-yellow-400' },
    { name: '12306', category: '火车票', color: 'bg-red-500' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{t.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${platform.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold`}>
                  {platform.name[0]}
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-slate-500 mb-3">{platform.category}</p>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {t.view}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
