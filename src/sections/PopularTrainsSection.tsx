import { useTranslation } from 'react-i18next'
import { ArrowRight, Clock, Train } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { popularTrainRoutes } from '@/data/trains'

interface PopularTrainsSectionProps {
  onRouteClick?: (from: string, to: string) => void
}

export default function PopularTrainsSection({ onRouteClick }: PopularTrainsSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('popularTrains.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('popularTrains.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTrainRoutes.map((route, index) => (
            <Card key={index} className="group overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
              onClick={() => onRouteClick?.(route.from, route.to)}>
              <div className="relative h-40 overflow-hidden">
                <img src={route.image} alt={`${route.from} to ${route.to}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white">{route.trainType}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-white">
                    <Train className="w-4 h-4" />
                    <span className="font-semibold">{route.from}</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-semibold">{route.to}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{route.duration}</span>
                    </div>
                    <p className="text-sm text-gray-500">{route.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">¥{route.lowestPrice}</p>
                    <p className="text-xs text-gray-400">起</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            {t('popularTrains.viewMore')}<ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
