import { useTranslation } from 'react-i18next'
import { ArrowRight, MapPin, Building2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { popularHotelDestinations } from '@/data/hotels'

interface PopularHotelsSectionProps {
  onDestinationClick?: (destination: string) => void
}

export default function PopularHotelsSection({ onDestinationClick }: PopularHotelsSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('popularHotels.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('popularHotels.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularHotelDestinations.map((dest, index) => (
            <Card key={index} className="group overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
              onClick={() => onDestinationClick?.(dest.city)}>
              <div className="relative h-40 overflow-hidden">
                <img src={dest.image} alt={dest.city} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{dest.city}</span>
                  </div>
                  <p className="text-white/80 text-sm">{dest.country}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{dest.hotelCount.toLocaleString()}+ 酒店</span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">¥{dest.lowestPrice}</p>
                    <p className="text-xs text-gray-400">{t('popularHotels.perNight')}起</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            {t('popularHotels.viewMore')}<ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
