import { useState } from 'react';
import { Search, Calendar, Users, MapPin, Car, Train, Plane, Building2, ArrowRightLeft, Hotel, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

interface SearchParams {
  from: string;
  to: string;
  hotelBrand: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  tripType: 'roundTrip' | 'oneWay';
  cabinClass: 'economy' | 'business' | 'first';
  isDomestic: boolean;
}

interface SearchSectionProps {
  serviceType: 'flights' | 'hotels' | 'cars' | 'trains';
  onSearch: (params: SearchParams) => void;
  language?: 'zh' | 'en';
}

// 英文城市列表
const popularCities = [
  { city: 'Beijing', code: 'PEK', country: 'China' },
  { city: 'Shanghai', code: 'SHA', country: 'China' },
  { city: 'Guangzhou', code: 'CAN', country: 'China' },
  { city: 'Shenzhen', code: 'SZX', country: 'China' },
  { city: 'Chengdu', code: 'CTU', country: 'China' },
  { city: 'Hangzhou', code: 'HGH', country: 'China' },
  { city: 'Tokyo', code: 'NRT', country: 'Japan' },
  { city: 'Osaka', code: 'KIX', country: 'Japan' },
  { city: 'Seoul', code: 'ICN', country: 'Korea' },
  { city: 'Singapore', code: 'SIN', country: 'Singapore' },
  { city: 'Bangkok', code: 'BKK', country: 'Thailand' },
  { city: 'London', code: 'LHR', country: 'UK' },
  { city: 'Paris', code: 'CDG', country: 'France' },
  { city: 'New York', code: 'JFK', country: 'USA' },
  { city: 'Los Angeles', code: 'LAX', country: 'USA' },
];

const hotelBrands = [
  { name: 'Marriott', nameEn: 'Marriott' },
  { name: 'Hilton', nameEn: 'Hilton' },
  { name: 'IHG', nameEn: 'IHG' },
  { name: 'Accor', nameEn: 'Accor' },
  { name: 'Hyatt', nameEn: 'Hyatt' },
  { name: 'Shangri-La', nameEn: 'Shangri-La' },
  { name: 'Sheraton', nameEn: 'Sheraton' },
  { name: 'Westin', nameEn: 'Westin' },
  { name: 'Ritz-Carlton', nameEn: 'Ritz-Carlton' },
  { name: 'Four Seasons', nameEn: 'Four Seasons' }
];

export function SearchSection({ serviceType, onSearch, language = 'en' }: SearchSectionProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [hotelBrand, setHotelBrand] = useState('');
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState(1);
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [cabinClass, setCabinClass] = useState<'economy' | 'business' | 'first'>('economy');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [fromResults, setFromResults] = useState<typeof popularCities>([]);
  const [toResults, setToResults] = useState<typeof popularCities>([]);

  const t = {
    en: {
      from: 'From',
      to: 'To',
      destination: 'Destination',
      hotelBrand: 'Hotel Brand',
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
      selectBrand: 'Select hotel brand',
      selectDate: 'Select date',
      adult: 'Adult',
      pleaseEnter: 'Enter city',
      allBrands: 'All Brands',
      popularDestinations: 'Popular Destinations'
    }
  }[language];

  const handleFromSearch = (query: string) => {
    setFrom(query);
    if (query.trim() === '') {
      setFromResults([]);
      setShowFromDropdown(false);
      return;
    }
    const results = popularCities.filter(c => 
      c.city.toLowerCase().includes(query.toLowerCase()) || 
      c.code.toLowerCase().includes(query.toLowerCase())
    );
    setFromResults(results);
    setShowFromDropdown(results.length > 0);
  };

  const handleToSearch = (query: string) => {
    setTo(query);
    if (query.trim() === '') {
      setToResults([]);
      setShowToDropdown(false);
      return;
    }
    const results = popularCities.filter(c => 
      c.city.toLowerCase().includes(query.toLowerCase()) || 
      c.code.toLowerCase().includes(query.toLowerCase())
    );
    setToResults(results);
    setShowToDropdown(results.length > 0);
  };

  const handleBrandSearch = (query: string) => {
    setHotelBrand(query);
    if (query.trim() === '') {
      setShowBrandDropdown(false);
      return;
    }
    const results = hotelBrands.filter(b => 
      b.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowBrandDropdown(results.length > 0);
  };

  const selectFrom = (city: string, code: string) => {
    setFrom(`${city} (${code})`);
    setShowFromDropdown(false);
    setFromResults([]);
  };

  const selectTo = (city: string, code: string) => {
    setTo(`${city} (${code})`);
    setShowToDropdown(false);
    setToResults([]);
  };

  const selectBrand = (brand: string) => {
    setHotelBrand(brand);
    setShowBrandDropdown(false);
  };

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const isDomesticDestination = (city: string): boolean => {
    const cityName = city.split('(')[0].trim();
    const domesticCities = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hangzhou', 'Xi\'an', 'Chongqing', 'Wuhan', 'Nanjing'];
    return domesticCities.some(dc => cityName.toLowerCase().includes(dc.toLowerCase()));
  };

  const formatDateMMDDYYYY = (date: Date | undefined): string => {
    if (!date) return '';
    return format(date, 'MM/dd/yyyy');
  };

  const handleSearchClick = () => {
    onSearch({
      from,
      to,
      hotelBrand,
      departureDate: formatDateMMDDYYYY(departureDate),
      returnDate: formatDateMMDDYYYY(returnDate),
      passengers,
      tripType,
      cabinClass,
      isDomestic: serviceType === 'cars' ? isDomesticDestination(to) : true
    });
  };

  const getServiceIcon = () => {
    switch (serviceType) {
      case 'flights': return <Plane className="w-5 h-5" />;
      case 'hotels': return <Building2 className="w-5 h-5" />;
      case 'cars': return <Car className="w-5 h-5" />;
      case 'trains': return <Train className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-12">
      <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
        {/* 服务类型标签 */}
        {serviceType === 'flights' && (
          <div className="flex gap-2 mb-6">
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button 
                onClick={() => setTripType('roundTrip')}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  tripType === 'roundTrip'
                    ? 'bg-white text-sky-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {t.roundTrip}
              </button>
              <button 
                onClick={() => setTripType('oneWay')}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  tripType === 'oneWay'
                    ? 'bg-white text-sky-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {t.oneWay}
              </button>
            </div>
            <select 
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value as typeof cabinClass)}
              className="px-4 py-2.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-semibold border-none outline-none cursor-pointer hover:bg-slate-200"
            >
              <option value="economy">{t.economy}</option>
              <option value="business">{t.business}</option>
              <option value="first">{t.firstClass}</option>
            </select>
          </div>
        )}

        {/* 搜索表单 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* 出发地 */}
          {serviceType !== 'hotels' && (
            <>
              <div className="md:col-span-3 relative">
                <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                  {serviceType === 'cars' ? t.pickupLocation : t.from}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="text"
                    value={from}
                    onChange={(e) => handleFromSearch(e.target.value)}
                    onFocus={() => setShowFromDropdown(true)}
                    placeholder={t.pleaseEnter}
                    className="pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-lg font-medium focus:border-sky-500 focus:ring-0 transition-colors"
                  />
                  {from && (
                    <button 
                      onClick={() => setFrom('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  {showFromDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-72 overflow-auto">
                      <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-50">
                        {t.popularDestinations}
                      </div>
                      {popularCities.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => selectFrom(item.city, item.code)}
                          className="w-full px-4 py-3 text-left hover:bg-sky-50 border-b border-slate-50 last:border-0 flex items-center justify-between group"
                        >
                          <div>
                            <div className="font-semibold text-slate-800 group-hover:text-sky-600">{item.city}</div>
                            <div className="text-sm text-slate-400">{item.country}</div>
                          </div>
                          <span className="text-sm text-slate-400 font-mono">{item.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden md:flex md:col-span-1 items-center justify-center pt-6">
                <button 
                  onClick={swapLocations}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-500 hover:text-sky-600 transition-colors border border-slate-200"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* 目的地 */}
          <div className={`${serviceType === 'hotels' ? 'md:col-span-4' : 'md:col-span-3'} relative`}>
            <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
              {serviceType === 'cars' ? t.dropoffLocation : t.destination}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                value={to}
                onChange={(e) => handleToSearch(e.target.value)}
                onFocus={() => setShowToDropdown(true)}
                placeholder={serviceType === 'hotels' ? t.enterDestination : t.pleaseEnter}
                className="pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-lg font-medium focus:border-sky-500 focus:ring-0 transition-colors"
              />
              {to && (
                <button 
                  onClick={() => setTo('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {showToDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-72 overflow-auto">
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-50">
                    {t.popularDestinations}
                  </div>
                  {popularCities.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => selectTo(item.city, item.code)}
                      className="w-full px-4 py-3 text-left hover:bg-sky-50 border-b border-slate-50 last:border-0 flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-semibold text-slate-800 group-hover:text-sky-600">{item.city}</div>
                        <div className="text-sm text-slate-400">{item.country}</div>
                      </div>
                      <span className="text-sm text-slate-400 font-mono">{item.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 酒店品牌 */}
          {serviceType === 'hotels' && (
            <div className="md:col-span-4 relative">
              <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                {t.hotelBrand}
              </label>
              <div className="relative">
                <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  value={hotelBrand}
                  onChange={(e) => handleBrandSearch(e.target.value)}
                  onFocus={() => setShowBrandDropdown(true)}
                  placeholder={t.selectBrand}
                  className="pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-lg font-medium focus:border-sky-500 focus:ring-0 transition-colors"
                />
                {hotelBrand && (
                  <button 
                    onClick={() => setHotelBrand('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                {showBrandDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-72 overflow-auto">
                    <button
                      onClick={() => selectBrand('')}
                      className="w-full px-4 py-3 text-left hover:bg-sky-50 border-b border-slate-50 font-medium text-slate-600"
                    >
                      {t.allBrands}
                    </button>
                    {hotelBrands.map((brand, index) => (
                      <button
                        key={index}
                        onClick={() => selectBrand(brand.name)}
                        className="w-full px-4 py-3 text-left hover:bg-sky-50 border-b border-slate-50 last:border-0 flex items-center justify-between"
                      >
                        <span className="font-semibold text-slate-800">{brand.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 日期选择器 - Popover 日历 */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
              {serviceType === 'hotels' ? t.checkIn : serviceType === 'cars' ? t.pickup : t.departure}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-full h-14 bg-white border-2 border-slate-200 rounded-xl text-left px-4 flex items-center gap-3 hover:border-sky-500 transition-colors">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <span className={`text-base font-medium ${departureDate ? 'text-slate-800' : 'text-slate-400'}`}>
                    {departureDate ? formatDateMMDDYYYY(departureDate) : t.selectDate}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 ml-auto" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* 返回日期 */}
          {(serviceType !== 'flights' || tripType === 'roundTrip') && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                {serviceType === 'hotels' ? t.checkOut : serviceType === 'cars' ? t.dropoff : t.return}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full h-14 bg-white border-2 border-slate-200 rounded-xl text-left px-4 flex items-center gap-3 hover:border-sky-500 transition-colors">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <span className={`text-base font-medium ${returnDate ? 'text-slate-800' : 'text-slate-400'}`}>
                      {returnDate ? formatDateMMDDYYYY(returnDate) : t.selectDate}
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400 ml-auto" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    disabled={(date) => date < (departureDate || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* 单程乘客数 */}
          {serviceType === 'flights' && tripType === 'oneWay' && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                {t.passengers}
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-base font-medium focus:border-sky-500 focus:ring-0 appearance-none"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {t.adult}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* 酒店房间数 */}
          {serviceType === 'hotels' && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                {t.rooms}
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-base font-medium focus:border-sky-500 focus:ring-0 appearance-none"
                >
                  {[1,2,3,4,5].map(n => (
                    <option key={n} value={n}>{n} Rooms</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 搜索按钮 */}
        <div className="mt-6">
          <Button 
            onClick={handleSearchClick}
            className="w-full md:w-auto px-16 py-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            {getServiceIcon()}
            {t.search}
          </Button>
        </div>
      </div>
    </div>
  );
}
