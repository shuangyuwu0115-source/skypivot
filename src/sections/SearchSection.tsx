import { useState } from 'react';
import { Search, Calendar, Users, MapPin, Car, Train, Plane, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { airports, searchAirports } from '@/data/airports';
import { trainStations, searchStations } from '@/data/trainStations';

interface SearchSectionProps {
  serviceType: 'flights' | 'hotels' | 'cars' | 'trains';
  onSearch: () => void;
  language?: 'zh' | 'en';
}

export function SearchSection({ serviceType, onSearch, language = 'zh' }: SearchSectionProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [fromResults, setFromResults] = useState(airports.slice(0, 5));
  const [toResults, setToResults] = useState(airports.slice(5, 10));

  const t = {
    zh: {
      from: '出发地',
      to: '目的地',
      departure: '出发日期',
      return: '返回日期',
      checkIn: '入住日期',
      checkOut: '退房日期',
      pickup: '取车日期',
      dropoff: '还车日期',
      passengers: '乘客',
      rooms: '房间',
      travelers: '旅客',
      search: '搜索',
      roundTrip: '往返',
      oneWay: '单程',
      economy: '经济舱',
      business: '商务舱',
      firstClass: '头等舱',
      pickupLocation: '取车地点',
      dropoffLocation: '还车地点',
      driverAge: '驾驶员年龄',
      whereTo: '您想去哪里？',
      whereFrom: '您从哪里出发？',
      enterDestination: '输入目的地',
      enterCity: '输入城市',
      selectDate: '选择日期',
      adult: '成人',
      child: '儿童'
    },
    en: {
      from: 'From',
      to: 'To',
      departure: 'Departure',
      return: 'Return',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      pickup: 'Pick-up',
      dropoff: 'Drop-off',
      passengers: 'Passengers',
      rooms: 'Rooms',
      travelers: 'Travelers',
      search: 'Search',
      roundTrip: 'Round Trip',
      oneWay: 'One Way',
      economy: 'Economy',
      business: 'Business',
      firstClass: 'First Class',
      pickupLocation: 'Pick-up Location',
      dropoffLocation: 'Drop-off Location',
      driverAge: 'Driver Age',
      whereTo: 'Where to?',
      whereFrom: 'Where from?',
      enterDestination: 'Enter destination',
      enterCity: 'Enter city',
      selectDate: 'Select date',
      adult: 'Adult',
      child: 'Child'
    }
  }[language];

  const handleFromSearch = (query: string) => {
    setFrom(query);
    if (serviceType === 'trains') {
      setFromResults(searchStations(query).slice(0, 5));
    } else {
      setFromResults(searchAirports(query).slice(0, 5));
    }
    setShowFromDropdown(true);
  };

  const handleToSearch = (query: string) => {
    setTo(query);
    if (serviceType === 'trains') {
      setToResults(searchStations(query).slice(0, 5));
    } else {
      setToResults(searchAirports(query).slice(0, 5));
    }
    setShowToDropdown(true);
  };

  const selectFrom = (location: string) => {
    setFrom(location);
    setShowFromDropdown(false);
  };

  const selectTo = (location: string) => {
    setTo(location);
    setShowToDropdown(false);
  };

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const getServiceIcon = () => {
    switch (serviceType) {
      case 'flights': return <Plane className="w-5 h-5" />;
      case 'hotels': return <Building2 className="w-5 h-5" />;
      case 'cars': return <Car className="w-5 h-5" />;
      case 'trains': return <Train className="w-5 h-5" />;
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-12">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-6 border border-white/50">
        {/* Trip Type Selector - Only for flights */}
        {serviceType === 'flights' && (
          <div className="flex gap-2 mb-4 flex-wrap">
            <button className="px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-medium">
              {t.roundTrip}
            </button>
            <button className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200">
              {t.oneWay}
            </button>
            <select className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium border-none outline-none">
              <option>{t.economy}</option>
              <option>{t.business}</option>
              <option>{t.firstClass}</option>
            </select>
          </div>
        )}

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* From */}
          <div className="md:col-span-3 relative">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              {serviceType === 'cars' ? t.pickupLocation : t.from}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                value={from}
                onChange={(e) => handleFromSearch(e.target.value)}
                onFocus={() => setShowFromDropdown(true)}
                placeholder={serviceType === 'hotels' ? t.enterDestination : t.whereFrom}
                className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500"
              />
              {showFromDropdown && fromResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-slate-200 z-50 max-h-60 overflow-auto">
                  {fromResults.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => selectFrom(`${item.city} (${item.code})`)}
                      className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-0"
                    >
                      <div className="font-medium text-slate-800">{item.city}</div>
                      <div className="text-sm text-slate-500">{item.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Swap Button */}
          <div className="hidden md:flex md:col-span-1 items-end justify-center pb-3">
            <button 
              onClick={swapLocations}
              className="p-2 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-500 hover:text-sky-600 transition-colors"
            >
              ⇄
            </button>
          </div>

          {/* To */}
          <div className="md:col-span-3 relative">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              {serviceType === 'cars' ? t.dropoffLocation : t.to}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                value={to}
                onChange={(e) => handleToSearch(e.target.value)}
                onFocus={() => setShowToDropdown(true)}
                placeholder={serviceType === 'hotels' ? t.enterCity : t.whereTo}
                className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500"
              />
              {showToDropdown && toResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-slate-200 z-50 max-h-60 overflow-auto">
                  {toResults.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => selectTo(`${item.city} (${item.code})`)}
                      className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-0"
                    >
                      <div className="font-medium text-slate-800">{item.city}</div>
                      <div className="text-sm text-slate-500">{item.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Dates */}
          <div className="md:col-span-3">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              {serviceType === 'hotels' ? t.checkIn : serviceType === 'cars' ? t.pickup : t.departure}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="date"
                value={departureDate}
                min={today}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Passengers/Return Date */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              {serviceType === 'hotels' ? t.rooms : serviceType === 'cars' ? t.driverAge : t.passengers}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              {serviceType === 'cars' ? (
                <select className="w-full pl-10 h-12 bg-slate-50 border border-slate-200 rounded-md focus:border-sky-500 focus:ring-sky-500">
                  <option>25-70 {t.adult}</option>
                  <option>21-24</option>
                  <option>18-20</option>
                </select>
              ) : (
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full pl-10 h-12 bg-slate-50 border border-slate-200 rounded-md focus:border-sky-500 focus:ring-sky-500"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {t.adult}{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 flex justify-center">
          <Button 
            onClick={onSearch}
            className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-3"
          >
            {getServiceIcon()}
            {t.search}
          </Button>
        </div>
      </div>
    </div>
  );
}
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
                <div key={country}>
                  <div className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100">{country}</div>
                  {countryStations.map((station) => (
                    <SelectItem key={station.code} value={station.city}>
                      {station.city} ({station.code})
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
          <Select value={trainTo} onValueChange={setTrainTo}>
            <SelectTrigger className="pl-10 h-12">
              <SelectValue placeholder={t('search.to')} />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {Object.entries(groupedTrainStations).map(([country, countryStations]) => (
                <div key={country}>
                  <div className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100">{country}</div>
                  {countryStations.map((station) => (
                    <SelectItem key={station.code} value={station.city}>
                      {station.city} ({station.code})
                    </SelectItem>
                  ))}
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="md:col-span-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.departDate')}</label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input type="date" value={trainDate} min={today} onChange={(e) => setTrainDate(e.target.value)} className="pl-10 h-12" />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">{t('search.passengers')}</label>
        <Select value={trainPassengers} onValueChange={setTrainPassengers}>
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

      <div className="md:col-span-12">
        <Button onClick={handleSearch} disabled={isLoading || !trainFrom || !trainTo || !trainDate}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-xl">
          {isLoading ? <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t('search.searching')}</span>
            : <span className="flex items-center gap-2"><Search className="w-5 h-5" />{t('search.searchButton')}</span>}
        </Button>
      </div>
    </div>
  )

  return (
    <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('search.title', { highlight: '' }).replace('{{highlight}}', '')}
            <span className="text-blue-400">{t('search.title', { highlight: '' }).includes('比价') ? '比价' : 'Comparison'}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t('search.subtitle')}
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceChange(service.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <service.icon className="w-5 h-5" />
                {t(service.labelKey)}
              </button>
            ))}
          </div>

          {activeService === 'flights' && renderFlightSearch()}
          {activeService === 'hotels' && renderHotelSearch()}
          {activeService === 'cars' && renderCarSearch()}
          {activeService === 'trains' && renderTrainSearch()}
        </Card>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />{t('search.trust.realtime')}</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />{t('search.trust.transparent')}</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />{t('search.trust.official')}</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />{t('search.trust.noHidden')}</div>
        </div>
      </div>
    </section>
  )
}
