import { useState } from 'react';
import { Search, Calendar, Users, MapPin, Car, Train, Plane, Building2, ArrowRightLeft } from 'lucide-react';
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
      adult: '成人'
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
      adult: 'Adult'
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
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

          <div className="hidden md:flex md:col-span-1 items-end justify-center pb-3">
            <button 
              onClick={swapLocations}
              className="p-2 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-500 hover:text-sky-600 transition-colors"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

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
                    <option key={n} value={n}>{n} {t.adult}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

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
