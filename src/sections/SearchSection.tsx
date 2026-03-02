import { useState } from 'react';
import { Search, Calendar, Users, MapPin, Car, Train, Plane, Building2, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { airports, searchAirports } from '@/data/airports';
import { trainStations, searchStations } from '@/data/trainStations';

interface SearchParams {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  tripType: 'roundTrip' | 'oneWay';
  cabinClass: 'economy' | 'business' | 'first';
}

interface SearchSectionProps {
  serviceType: 'flights' | 'hotels' | 'cars' | 'trains';
  onSearch: (params: SearchParams) => void;
  language?: 'zh' | 'en';
}

export function SearchSection({ serviceType, onSearch, language = 'zh' }: SearchSectionProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [cabinClass, setCabinClass] = useState<'economy' | 'business' | 'first'>('economy');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [fromResults, setFromResults] = useState<typeof airports>([]);
  const [toResults, setToResults] = useState<typeof airports>([]);

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
      pleaseEnter: '请输入城市或机场代码'
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
      pleaseEnter: 'Enter city or airport code'
    }
  }[language];

  const handleFromSearch = (query: string) => {
    setFrom(query);
    if (query.trim() === '') {
      setFromResults([]);
      setShowFromDropdown(false);
      return;
    }
    if (serviceType === 'trains') {
      const results = searchStations(query);
      setFromResults(results as unknown as typeof airports);
    } else {
      const results = searchAirports(query);
      setFromResults(results);
    }
    setShowFromDropdown(results.length > 0);
  };

  const handleToSearch = (query: string) => {
    setTo(query);
    if (query.trim() === '') {
      setToResults([]);
      setShowToDropdown(false);
      return;
    }
    if (serviceType === 'trains') {
      const results = searchStations(query);
      setToResults(results as unknown as typeof airports);
    } else {
      const results = searchAirports(query);
      setToResults(results);
    }
    setShowToDropdown(results.length > 0);
  };

  const selectFrom = (location: string) => {
    setFrom(location);
    setShowFromDropdown(false);
    setFromResults([]);
  };

  const selectTo = (location: string) => {
    setTo(location);
    setShowToDropdown(false);
    setToResults([]);
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

  const handleBlur = (type: 'from' | 'to') => {
    setTimeout(() => {
      if (type === 'from') setShowFromDropdown(false);
      else setShowToDropdown(false);
    }, 200);
  };

  // 修改：点击搜索时传递参数
  const handleSearchClick = () => {
    onSearch({
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      tripType,
      cabinClass
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-12">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-6 border border-white/50">
        {/* 机票选项：往返/单程 + 舱位等级 */}
        {serviceType === 'flights' && (
          <div className="flex gap-2 mb-4 flex-wrap">
            <div className="flex bg-slate-100 rounded-full p-1">
              <button 
                onClick={() => setTripType('roundTrip')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  tripType === 'roundTrip'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {t.roundTrip}
              </button>
              <button 
                onClick={() => setTripType('oneWay')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  tripType === 'oneWay'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {t.oneWay}
              </button>
            </div>
            <select 
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value as typeof cabinClass)}
              className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium border-none outline-none cursor-pointer hover:bg-slate-200"
            >
              <option value="economy">{t.economy}</option>
              <option value="business">{t.business}</option>
              <option value="first">{t.firstClass}</option>
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* 出发地 */}
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
                onFocus={() => from.trim() !== '' && setShowFromDropdown(fromResults.length > 0)}
                onBlur={() => handleBlur('from')}
                placeholder={serviceType === 'hotels' ? t.enterDestination : t.pleaseEnter}
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
                      <div className="font-medium text-slate-800">{item.city} ({item.code})</div>
                      <div className="text-sm text-slate-500">{item.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 交换按钮 */}
          <div className="hidden md:flex md:col-span-1 items-end justify-center pb-3">
            <button 
              onClick={swapLocations}
              className="p-2 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-500 hover:text-sky-600 transition-colors"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          {/* 目的地 */}
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
                onFocus={() => to.trim() !== '' && setShowToDropdown(toResults.length > 0)}
                onBlur={() => handleBlur('to')}
                placeholder={serviceType === 'hotels' ? t.enterCity : t.pleaseEnter}
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
                      <div className="font-medium text-slate-800">{item.city} ({item.code})</div>
                      <div className="text-sm text-slate-500">{item.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 出发日期 */}
          <div className="md:col-span-2">
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

          {/* 返回日期（仅往返显示） */}
          {(serviceType !== 'flights' || tripType === 'roundTrip') && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1">
                {serviceType === 'hotels' ? t.checkOut : serviceType === 'cars' ? t.dropoff : t.return}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="date"
                  value={returnDate}
                  min={departureDate || today}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
            </div>
          )}

          {/* 单程时显示乘客数 */}
          {serviceType === 'flights' && tripType === 'oneWay' && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1">
                {t.passengers}
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full pl-10 h-12 bg-slate-50 border border-slate-200 rounded-md focus:border-sky-500 focus:ring-sky-500"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {t.adult}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 搜索按钮 */}
        <div className="mt-4 flex justify-center">
          <Button 
            onClick={handleSearchClick}
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
