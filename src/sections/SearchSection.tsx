import { useState } from 'react';
import { Search, Calendar, Users, MapPin, Car, Train, Plane, Building2, ArrowRightLeft, Hotel, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

const domesticCities = [
  '北京', '上海', '广州', '深圳', '成都', '杭州', '西安', '重庆', '武汉', '南京',
  '天津', '苏州', '长沙', '郑州', '沈阳', '青岛', '宁波', '东莞', '无锡', '厦门',
  '福州', '济南', '大连', '昆明', '合肥', '佛山', '哈尔滨', '长春', '石家庄', '南宁',
  '贵阳', '南昌', '乌鲁木齐', '兰州', '海口', '三亚', '呼和浩特', '银川', '西宁', '拉萨',
  '台北', '香港', '澳门'
];

const hotelBrands = [
  { name: '万豪', nameEn: 'Marriott' },
  { name: '希尔顿', nameEn: 'Hilton' },
  { name: '洲际', nameEn: 'IHG' },
  { name: '雅高', nameEn: 'Accor' },
  { name: '凯悦', nameEn: 'Hyatt' },
  { name: '香格里拉', nameEn: 'Shangri-La' },
  { name: '锦江', nameEn: 'Jinjiang' },
  { name: '华住', nameEn: 'Huazhu' },
  { name: '如家', nameEn: 'Home Inn' },
  { name: '全季', nameEn: 'Ji Hotel' },
  { name: '亚朵', nameEn: 'Atour' },
  { name: '喜来登', nameEn: 'Sheraton' },
  { name: '威斯汀', nameEn: 'Westin' },
  { name: '丽思卡尔顿', nameEn: 'Ritz-Carlton' },
  { name: '四季', nameEn: 'Four Seasons' }
];

// 热门城市列表
const popularCities = [
  { city: '北京', code: 'PEK', country: '中国' },
  { city: '上海', code: 'SHA', country: '中国' },
  { city: '广州', code: 'CAN', country: '中国' },
  { city: '深圳', code: 'SZX', country: '中国' },
  { city: '成都', code: 'CTU', country: '中国' },
  { city: '杭州', code: 'HGH', country: '中国' },
  { city: '东京', code: 'NRT', country: '日本' },
  { city: '大阪', code: 'KIX', country: '日本' },
  { city: '首尔', code: 'ICN', country: '韩国' },
  { city: '新加坡', code: 'SIN', country: '新加坡' },
  { city: '曼谷', code: 'BKK', country: '泰国' },
  { city: '伦敦', code: 'LHR', country: '英国' },
  { city: '巴黎', code: 'CDG', country: '法国' },
  { city: '纽约', code: 'JFK', country: '美国' },
  { city: '洛杉矶', code: 'LAX', country: '美国' },
];

export function SearchSection({ serviceType, onSearch, language = 'zh' }: SearchSectionProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [hotelBrand, setHotelBrand] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [tripType, setTripType] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const [cabinClass, setCabinClass] = useState<'economy' | 'business' | 'first'>('economy');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [fromResults, setFromResults] = useState<typeof popularCities>([]);
  const [toResults, setToResults] = useState<typeof popularCities>([]);

  const t = {
    zh: {
      from: '出发地',
      to: '目的地',
      destination: '目的地',
      hotelBrand: '酒店品牌',
      departure: '出发日期',
      return: '返回日期',
      checkIn: '入住日期',
      checkOut: '离店日期',
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
      selectBrand: '选择酒店品牌',
      selectDate: '选择日期',
      adult: '成人',
      pleaseEnter: '请输入城市',
      allBrands: '全部品牌',
      popularDestinations: '热门目的地'
    },
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
      c.city.includes(query) || c.code.toLowerCase().includes(query.toLowerCase())
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
      c.city.includes(query) || c.code.toLowerCase().includes(query.toLowerCase())
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
      b.name.includes(query) || b.nameEn.toLowerCase().includes(query.toLowerCase())
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
    return domesticCities.some(dc => cityName.includes(dc));
  };

  const today = new Date().toISOString().split('T')[0];

  const handleSearchClick = () => {
    onSearch({
      from,
      to,
      hotelBrand,
      departureDate,
      returnDate,
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
        {/* 服务类型标签 - Skyscanner 风格 */}
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

        {/* 搜索表单 - Skyscanner 风格 */}
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
                        <span className="text-sm text-slate-400">{brand.nameEn}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 日期 */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
              {serviceType === 'hotels' ? t.checkIn : serviceType === 'cars' ? t.pickup : t.departure}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="date"
                value={departureDate}
                min={today}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-base font-medium focus:border-sky-500 focus:ring-0 transition-colors"
              />
            </div>
          </div>

          {/* 返回日期 */}
          {(serviceType !== 'flights' || tripType === 'roundTrip') && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                {serviceType === 'hotels' ? t.checkOut : serviceType === 'cars' ? t.dropoff : t.return}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="date"
                  value={returnDate}
                  min={departureDate || today}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="pl-10 h-14 bg-white border-2 border-slate-200 rounded-xl text-base font-medium focus:border-sky-500 focus:ring-0 transition-colors"
                />
              </div>
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
                    <option key={n} value={n}>{n} 间</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 搜索按钮 - Skyscanner 风格 */}
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
