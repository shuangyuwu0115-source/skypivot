import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, TrendingDown, Star, Shield, Check, ArrowUpDown, Filter, Train } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { trainPlatforms, generateTrainSearchUrl } from '@/data/trains'
import type { TrainSearchParams, PlatformPrice } from '@/types'

interface TrainResultsSectionProps {
  searchParams: TrainSearchParams | null
}

const generateMockTrainPrices = (from: string, to: string): PlatformPrice[] => {
  const basePrice = Math.random() * 500 + 100
  
  return trainPlatforms.map((platform) => {
    const variance = (Math.random() - 0.5) * 0.2
    const price = Math.round(basePrice * (1 + variance))
    const bookingFee = Math.random() > 0.8 ? Math.round(price * 0.02) : 0
    
    return {
      platform: platform.id,
      name: platform.name,
      nameEn: platform.nameEn,
      price: price + bookingFee,
      currency: 'CNY',
      logo: platform.logo,
      url: generateTrainSearchUrl(platform, { from, to }),
      tags: platform.features.slice(0, 2),
      rating: platform.rating,
      bookingFee
    }
  }).sort((a, b) => a.price - b.price)
}

export default function TrainResultsSection({ searchParams }: TrainResultsSectionProps) {
  const { t } = useTranslation()
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('price')
  const [filterRegion, setFilterRegion] = useState<'all' | 'domestic' | 'international'>('all')

  const prices = useMemo(() => {
    if (!searchParams) return []
    return generateMockTrainPrices(searchParams.from, searchParams.to)
  }, [searchParams])

  const filteredPrices = useMemo(() => {
    let filtered = prices
    
    if (filterRegion !== 'all') {
      filtered = filtered.filter(p => {
        const platform = trainPlatforms.find(pl => pl.id === p.platform)
        return platform?.region === filterRegion || platform?.region === 'both'
      })
    }
    
    return filtered.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      return b.rating - a.rating
    })
  }, [prices, sortBy, filterRegion])

  const lowestPrice = filteredPrices[0]?.price
  const savings = filteredPrices.length > 1 ? filteredPrices[filteredPrices.length - 1].price - lowestPrice : 0

  if (!searchParams) return null

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t('results.title')}</h2>
          <p className="text-gray-600">
            {searchParams.from} → {searchParams.to} · {searchParams.date}
            · {searchParams.passengers} {t('search.passengers')}
          </p>
        </div>

        {lowestPrice && (
          <Card className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-green-100 text-sm">{t('results.bestDeal')}</p>
                  <p className="text-3xl font-bold">¥{lowestPrice.toLocaleString()}</p>
                  <p className="text-green-100 text-sm">{filteredPrices[0]?.name}</p>
                </div>
              </div>
              {savings > 0 && (
                <div className="text-center md:text-right">
                  <p className="text-green-100 text-sm">{t('results.saveUpTo')}</p>
                  <p className="text-2xl font-bold">¥{savings.toLocaleString()}</p>
                </div>
              )}
            </div>
          </Card>
        )}

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{t('results.filter')}:</span>
          </div>
          <Select value={filterRegion} onValueChange={(v: any) => setFilterRegion(v)}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('results.allPlatforms')}</SelectItem>
              <SelectItem value="domestic">{t('results.domestic')}</SelectItem>
              <SelectItem value="international">{t('results.international')}</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
            <SelectTrigger className="w-32">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">{t('results.sortByPrice')}</SelectItem>
              <SelectItem value="rating">{t('results.sortByRating')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredPrices.map((price, index) => {
            const isLowest = index === 0
            const platform = trainPlatforms.find(p => p.id === price.platform)
            
            return (
              <Card key={price.platform} className={`p-6 transition-all hover:shadow-lg ${isLowest ? 'ring-2 ring-green-500 bg-green-50/50' : ''}`}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: platform?.color || '#333' }}>
                      <Train className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{price.name}</h3>
                      <p className="text-sm text-gray-500">{price.nameEn}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{price.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 flex-1">
                    {price.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        <Check className="w-3 h-3 mr-1" />{tag}
                      </Badge>
                    ))}
                    {price.bookingFee === 0 && (
                      <Badge variant="outline" className="text-xs text-green-600 border-green-600">{t('results.noBookingFee')}</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-6 ml-auto">
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">¥{price.price.toLocaleString()}</p>
                      {price.bookingFee && price.bookingFee > 0 && (
                        <p className="text-sm text-gray-500">含服务费 ¥{price.bookingFee}</p>
                      )}
                      {isLowest && <Badge className="bg-green-500 text-white mt-1">{t('results.lowestPrice')}</Badge>}
                    </div>
                    <a href={price.url} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className={isLowest ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}>
                        {t('results.bookNow')}<ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Train className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">{t('results.tips.priceChange')}</p>
                <p className="text-sm text-blue-700">火车票价格固定，建议提前购买确保有座</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-green-50 border-green-200">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">{t('results.tips.official')}</p>
                <p className="text-sm text-green-700">所有链接均指向官方售票平台</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-purple-50 border-purple-200">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-purple-900">{t('results.tips.saveTips')}</p>
                <p className="text-sm text-purple-700">高铁早鸟票和通票可能更优惠</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
