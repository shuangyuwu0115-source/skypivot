import { useTranslation } from 'react-i18next'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { popularRoutes } from '@/data/platforms'

interface PopularRoutesSectionProps {
  onRouteClick?: (from: string, to: string) => void
}

export default function PopularRoutesSection({ onRouteClick }: PopularRoutesSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('popular.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('popular.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, index) => (
            <Card key={index} className="group overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
              onClick={() => onRouteClick?.(route.from, route.to)}>
              <div className="relative h-40 overflow-hidden">
                <img src={route.image} alt={`${route.from} to ${route.to}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{route.from}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-semibold">{route.to}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{route.fromCode} → {route.toCode}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">{t('popular.lowestPrice')}</span>
                    </div>
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
            {t('popular.viewMore')}<ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
