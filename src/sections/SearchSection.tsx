import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  Plane, 
  Calendar, 
  Users, 
  ArrowRightLeft, 
  Search,
  MapPin,
  Hotel,
  Car,
  Train,
  BedDouble,
  User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { airports } from '@/data/airports'
import { trainStations } from '@/data/trainStations'
import type { ServiceType, FlightSearchParams, HotelSearchParams, CarSearchParams, TrainSearchParams } from '@/types'

interface SearchSectionProps {
  activeService: ServiceType
  onServiceChange: (service: ServiceType) => void
  onFlightSearch: (params: FlightSearchParams) => void
  onHotelSearch: (params: HotelSearchParams) => void
  onCarSearch: (params: CarSearchParams) => void
  onTrainSearch: (params: TrainSearchParams) => void
  isLoading?: boolean
}

const services = [
  { id: 'flights' as ServiceType, icon: Plane, labelKey: 'nav.flights' },
  { id: 'hotels' as ServiceType, icon: Hotel, labelKey: 'nav.hotels' },
  { id: 'cars' as ServiceType, icon: Car, labelKey: 'nav.cars' },
  { id: 'trains' as ServiceType, icon: Train, labelKey: 'nav.trains' },
]

export default function SearchSection({ 
  activeService, 
  onServiceChange,
  onFlightSearch,
  onHotelSearch,
  onCarSearch,
  onTrainSearch,
  isLoading 
}: SearchSectionProps) {
  const { t } = useTranslation()
  
  const [tripType, setTripType] = useState<'oneWay' | 'roundTrip'>('roundTrip')
  const [flightFrom, setFlightFrom] = useState('')
  const [flightTo, setFlightTo] = useState('')
  const [flightDepartDate, setFlightDepartDate] = useState('')
  const [flightReturnDate, setFlightReturnDate] = useState('')
  const [flightPassengers, setFlightPassengers] = useState('1')
  const [cabinClass, setCabinClass] = useState<'economy' | 'business' | 'first'>('economy')
  
  const [hotelDestination, setHotelDestination] = useState('')
  const [hotelCheckIn, setHotelCheckIn] = useState('')
  const [hotelCheckOut, setHotelCheckOut] = useState('')
  const [hotelGuests, setHotelGuests] = useState('2')
  const [hotelRooms, setHotelRooms] = useState('1')
  
  const [carPickup, setCarPickup] = useState('')
  const [carReturn, setCarReturn] = useState('')
  const [carPickupDate, setCarPickupDate] = useState('')
  const [carReturnDate, setCarReturnDate] = useState('')
  const [carDriverAge, setCarDriverAge] = useState('25')
  
  const [trainFrom, setTrainFrom] = useState('')
  const [trainTo, setTrainTo] = useState('')
  const [trainDate, setTrainDate] = useState('')
  const [trainPassengers, setTrainPassengers] = useState('1')

  const today = new Date().toISOString().split('T')[0]

  const handleSwapLocations = () => {
    if (activeService === 'flights') {
      setFlightFrom(flightTo)
      setFlightTo(flightFrom)
    } else if (activeService === 'trains') {
      setTrainFrom(trainTo)
      setTrainTo(trainFrom)
    }
  }

  const handleSearch = () => {
    switch (activeService) {
      case 'flights':
        if (flightFrom && flightTo && flightDepartDate) {
          onFlightSearch({
            from: flightFrom,
            to: flightTo,
            departDate: flightDepartDate,
            returnDate: tripType === 'roundTrip' ? flightReturnDate : undefined,
            passengers: parseInt(flightPassengers),
            cabinClass,
            tripType
          })
        }
        break
      case 'hotels':
        if (hotelDestination && hotelCheckIn && hotelCheckOut) {
          onHotelSearch({
            destination: hotelDestination,
            checkIn: hotelCheckIn,
            checkOut: hotelCheckOut,
            guests: parseInt(hotelGuests),
            rooms: parseInt(hotelRooms)
          })
        }
        break
      case 'cars':
        if (carPickup && carPickupDate && carReturnDate) {
          onCarSearch({
            pickupLocation: carPickup,
            returnLocation: carReturn || carPickup,
            pickupDate: carPickupDate,
            returnDate: carReturnDate,
            driverAge: parseInt(carDriverAge)
          })
        }
        break
      case 'trains':
        if (trainFrom && trainTo && trainDate) {
          onTrainSearch({
            from: trainFrom,
            to: trainTo,
            date: trainDate,
            passengers: parseInt(trainPassengers)
          })
        }
        break
    }
  }

  const groupedAirports = airports.reduce((acc, airport) => {
    if (!acc[airport.country]) {
      acc[airport.country] = []
    }
    acc[airport.country].push(airport)
    return acc
  }, {} as Record<string, typeof airports>)

  const groupedTrainStations = trainStations.reduce((acc, station) => {
    if (!acc[station.country]) {
      acc[station.country] = []
    }
    acc[station.country].push(station)
    return acc
  }, {} as Record<string, typeof trainStations>)

  const renderFlightSearch = () => (
    <>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTripType('roundTrip')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            tripType === 'roundTrip'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {t('search.roundTrip')}
        </button>
        <button
          onClick={() => setTripType('oneWay')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            tripType === 'oneWay'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {t('search.oneWay')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.from')}</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Select value={flightFrom} onValueChange={setFlightFrom}>
              <SelectTrigger className="pl-10 h-12">
                <SelectValue placeholder={t('search.from')} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {Object.entries(groupedAirports).map(([country, countryAirports]) => (
                  <div key={country}>
                    <div className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100">{country}</div>
                    {countryAirports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.city}>
                        {airport.city} ({airport.code})
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="md:col-span-1 flex items-end justify-center pb-3">
          <button onClick={handleSwapLocations} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ArrowRightLeft className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="md:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.to')}</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Select value={flightTo} onValueChange={setFlightTo}>
              <SelectTrigger className="pl-10 h-12">
                <SelectValue placeholder={t('search.to')} />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {Object.entries(groupedAirports).map(([country, countryAirports]) => (
                  <div key={country}>
                    <div className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100">{country}</div>
                    {countryAirports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.city}>
                        {airport.city} ({airport.code})
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.departDate')}</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input type="date" value={flightDepartDate} min={today} onChange={(e) => setFlightDepartDate(e.target.value)} className="pl-10 h-12" />
          </div>
        </div>

        {tripType === 'roundTrip' && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.returnDate')}</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input type="date" value={flightReturnDate} min={flightDepartDate || today} onChange={(e) => setFlightReturnDate(e.target.value)} className="pl-10 h-12" />
            </div>
          </div>
        )}

        <div className="md:col-span-6 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.passengers')}</label>
            <Select value={flightPassengers} onValueChange={setFlightPassengers}>
              <SelectTrigger className="h-12">
                <Users className="w-5 h-5 text-gray-400 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.cabinClass')}</label>
            <Select value={cabinClass} onValueChange={(v) => setCabinClass(v as any)}>
              <SelectTrigger className="h-12">
                <Plane className="w-5 h-5 text-gray-400 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">{t('cabin.economy')}</SelectItem>
                <SelectItem value="business">{t('cabin.business')}</SelectItem>
                <SelectItem value="first">{t('cabin.first')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-transparent mb-2">.</label>
          <Button onClick={handleSearch} disabled={isLoading || !flightFrom || !flightTo || !flightDepartDate}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl">
            {isLoading ? <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t('search.searching')}</span>
              : <span className="flex items-center gap-2"><Search className="w-5 h-5" />{t('search.searchButton')}</span>}
          </Button>
        </div>
      </div>
    </>
  )

  const renderHotelSearch = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('hotel.destination')}</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder={t('hotel.searchPlaceholder')}
            value={hotelDestination}
            onChange={(e) => setHotelDestination(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.checkIn')}</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input type="date" value={hotelCheckIn} min={today} onChange={(e) => setHotelCheckIn(e.target.value)} className="pl-10 h-12" />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.checkOut')}</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input type="date" value={hotelCheckOut} min={hotelCheckIn || today} onChange={(e) => setHotelCheckOut(e.target.value)} className="pl-10 h-12" />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.guests')}</label>
        <Select value={hotelGuests} onValueChange={setHotelGuests}>
          <SelectTrigger className="h-12">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.rooms')}</label>
        <Select value={hotelRooms} onValueChange={setHotelRooms}>
          <SelectTrigger className="h-12">
            <BedDouble className="w-5 h-5 text-gray-400 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-12">
        <Button onClick={handleSearch} disabled={isLoading || !hotelDestination || !hotelCheckIn || !hotelCheckOut}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl">
          {isLoading ? <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t('search.searching')}</span>
            : <span className="flex items-center gap-2"><Search className="w-5 h-5" />{t('search.searchButton')}</span>}
        </Button>
      </div>
    </div>
  )

  const renderCarSearch = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('car.pickupLocation')}</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder={t('car.pickupLocation')}
            value={carPickup}
            onChange={(e) => setCarPickup(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      <div className="md:col-span-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('car.returnLocation')}</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder={t('car.returnLocation')}
            value={carReturn}
            onChange={(e) => setCarReturn(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.pickupDate')}</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input type="date" value={carPickupDate} min={today} onChange={(e) => setCarPickupDate(e.target.value)} className="pl-10 h-12" />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.returnCarDate')}</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input type="date" value={carReturnDate} min={carPickupDate || today} onChange={(e) => setCarReturnDate(e.target.value)} className="pl-10 h-12" />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('car.driverAge')}</label>
        <Select value={carDriverAge} onValueChange={setCarDriverAge}>
          <SelectTrigger className="h-12">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-12">
        <Button onClick={handleSearch} disabled={isLoading || !carPickup || !carPickupDate || !carReturnDate}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl">
          {isLoading ? <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t('search.searching')}</span>
            : <span className="flex items-center gap-2"><Search className="w-5 h-5" />{t('search.searchButton')}</span>}
        </Button>
      </div>
    </div>
  )

  const renderTrainSearch = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.from')}</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Select value={trainFrom} onValueChange={setTrainFrom}>
            <SelectTrigger className="pl-10 h-12">
              <SelectValue placeholder={t('search.from')} />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {Object.entries(groupedTrainStations).map(([country, countryStations]) => (
                <div key={
