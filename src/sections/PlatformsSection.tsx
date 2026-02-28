import { useTranslation } from 'react-i18next'
import { Globe, Shield, Zap, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { platforms } from '@/data/platforms'
import { hotelPlatforms } from '@/data/hotels'
import { carPlatforms } from '@/data/cars'
import { trainPlatforms } from '@/data/trains'

export default function PlatformsSection() {
  const { t } = useTranslation()

  const features = [
    { icon: Globe, titleKey: 'platforms.features.global.title', descKey: 'platforms.features.global.desc' },
    { icon: Zap, titleKey: 'platforms.features.realtime.title', descKey: 'platforms.features.realtime.desc' },
    { icon: Shield, titleKey: 'platforms.features.safe.title', descKey: 'platforms.features.safe.desc' },
    { icon: Clock, titleKey: 'platforms.features.service.title', descKey: 'platforms.features.service.desc' },
  ]

  const allPlatforms = [...platforms, ...hotelPlatforms, ...carPlatforms, ...trainPlatforms]
  const uniquePlatforms = allPlatforms.filter((platform, index, self) => 
    index === self.findIndex((p) => p.id === platform.id)
  ).slice(0, 10)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
              <p className="text-sm text-gray-600">{t(feature.descKey)}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('platforms.title')}</h2>
          <p className="text-gray-600">{t('platforms.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {uniquePlatforms.map((platform) => (
            <a key={platform.id} href={platform.baseUrl} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3"
                  style={{ backgroundColor: platform.color }}>
                  {platform.name.charAt(0)}
                </div>
                <p className="font-medium text-gray-900 text-sm">{platform.name}</p>
                <p className="text-xs text-gray-500">{platform.nameEn}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-xs text-yellow-500">★</span>
                  <span className="text-xs text-gray-600">{platform.rating}</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
