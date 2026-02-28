import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Toaster, toast } from 'sonner'
import '@/i18n';
import SearchSection from './sections/SearchSection'
import ResultsSection from './sections/ResultsSection'
import HotelResultsSection from './sections/HotelResultsSection'
import CarResultsSection from './sections/CarResultsSection'
import TrainResultsSection from './sections/TrainResultsSection'
import PopularRoutesSection from './sections/PopularRoutesSection'
import PopularHotelsSection from './sections/PopularHotelsSection'
import PopularCarsSection from './sections/PopularCarsSection'
import PopularTrainsSection from './sections/PopularTrainsSection'
import PlatformsSection from './sections/PlatformsSection'
import Footer from './sections/Footer'
import type { 
  ServiceType, 
  FlightSearchParams, 
  HotelSearchParams, 
  CarSearchParams, 
  TrainSearchParams 
} from './types'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [activeService, setActiveService] = useState<ServiceType>('flights')
  
  const [flightSearchParams, setFlightSearchParams] = useState<FlightSearchParams | null>(null)
  const [hotelSearchParams, setHotelSearchParams] = useState<HotelSearchParams | null>(null)
  const [carSearchParams, setCarSearchParams] = useState<CarSearchParams | null>(null)
  const [trainSearchParams, setTrainSearchParams] = useState<TrainSearchParams | null>(null)
  
  const [isLoading, setIsLoading] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleServiceChange = (service: ServiceType) => {
    setActiveService(service)
    setFlightSearchParams(null)
    setHotelSearchParams(null)
    setCarSearchParams(null)
    setTrainSearchParams(null)
  }

  const handleFlightSearch = async (params: FlightSearchParams) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFlightSearchParams(params)
    setHotelSearchParams(null)
    setCarSearchParams(null)
    setTrainSearchParams(null)
    setIsLoading(false)
    toast.success(t('results.title') + ' - ' + t('nav.flights'))
    scrollToResults()
  }

  const handleHotelSearch = async (params: HotelSearchParams) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setHotelSearchParams(params)
    setFlightSearchParams(null)
    setCarSearchParams(null)
    setTrainSearchParams(null)
    setIsLoading(false)
    toast.success(t('results.title') + ' - ' + t('nav.hotels'))
    scrollToResults()
  }

  const handleCarSearch = async (params: CarSearchParams) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setCarSearchParams(params)
    setFlightSearchParams(null)
    setHotelSearchParams(null)
    setTrainSearchParams(null)
    setIsLoading(false)
    toast.success(t('results.title') + ' - ' + t('nav.cars'))
    scrollToResults()
  }

  const handleTrainSearch = async (params: TrainSearchParams) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setTrainSearchParams(params)
    setFlightSearchParams(null)
    setHotelSearchParams(null)
    setCarSearchParams(null)
    setIsLoading(false)
    toast.success(t('results.title') + ' - ' + t('nav.trains'))
    scrollToResults()
  }

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleFlightRouteClick = (from: string, to: string) => {
    const today = new Date().toISOString().split('T')[0]
    handleFlightSearch({
      from, to, departDate: today,
      passengers: 1, cabinClass: 'economy', tripType: 'oneWay'
    })
  }

  const handleHotelDestinationClick = (destination: string) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    handleHotelSearch({
      destination,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0],
      guests: 2, rooms: 1
    })
  }

  const handleCarCityClick = (city: string) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    handleCarSearch({
      pickupLocation: city,
      returnLocation: city,
      pickupDate: today.toISOString().split('T')[0],
      returnDate: tomorrow.toISOString().split('T')[0],
      driverAge: 25
    })
  }

  const handleTrainRouteClick = (from: string, to: string) => {
    const today = new Date().toISOString().split('T')[0]
    handleTrainSearch({
      from, to, date: today, passengers: 1
    })
  }

  const renderResults = () => {
    return (
      <div ref={resultsRef}>
        <ResultsSection searchParams={flightSearchParams} />
        <HotelResultsSection searchParams={hotelSearchParams} />
        <CarResultsSection searchParams={carSearchParams} />
        <TrainResultsSection searchParams={trainSearchParams} />
      </div>
    )
  }

  const renderPopularSections = () => {
    if (flightSearchParams || hotelSearchParams || carSearchParams || trainSearchParams) {
      return null
    }

    return (
      <>
        {activeService === 'flights' && <PopularRoutesSection onRouteClick={handleFlightRouteClick} />}
        {activeService === 'hotels' && <PopularHotelsSection onDestinationClick={handleHotelDestinationClick} />}
        {activeService === 'cars' && <PopularCarsSection onCityClick={handleCarCityClick} />}
        {activeService === 'trains' && <PopularTrainsSection onRouteClick={handleTrainRouteClick} />}
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      
      <SearchSection 
        activeService={activeService}
        onServiceChange={handleServiceChange}
        onFlightSearch={handleFlightSearch}
        onHotelSearch={handleHotelSearch}
        onCarSearch={handleCarSearch}
        onTrainSearch={handleTrainSearch}
        isLoading={isLoading}
      />
      
      {renderResults()}
      {renderPopularSections()}
      <PlatformsSection />
      <Footer />
    </div>
  )
}

export default App
