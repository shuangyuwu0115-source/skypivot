import { useState } from 'react';
import { SearchSection } from './sections/SearchSection';
import { ResultsSection } from './sections/ResultsSection';
import { HotelResultsSection } from './sections/HotelResultsSection';
import { CarResultsSection } from './sections/CarResultsSection';
import { TrainResultsSection } from './sections/TrainResultsSection';
import { PopularRoutesSection } from './sections/PopularRoutesSection';
import { PopularHotelsSection } from './sections/PopularHotelsSection';
import { PopularCarsSection } from './sections/PopularCarsSection';
import { PopularTrainsSection } from './sections/PopularTrainsSection';
import { PlatformsSection } from './sections/PlatformsSection';
import { Footer } from './sections/Footer';
import './App.css';

type ServiceType = 'flights' | 'hotels' | 'cars' | 'trains';

function App() {
  const [serviceType, setServiceType] = useState<ServiceType>('flights');
  const [hasSearched, setHasSearched] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const handleSearch = () => {
    setHasSearched(true);
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-slate-800">SkyPivot</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1 bg-slate-100/80 rounded-full p-1">
              {[
                { id: 'flights', label: language === 'zh' ? '机票' : 'Flights', icon: '✈️' },
                { id: 'hotels', label: language === 'zh' ? '酒店' : 'Hotels', icon: '🏨' },
                { id: 'cars', label: language === 'zh' ? '租车' : 'Cars', icon: '🚗' },
                { id: 'trains', label: language === 'zh' ? '火车票' : 'Trains', icon: '🚄' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setServiceType(item.id as ServiceType);
                    setHasSearched(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    serviceType === item.id
                      ? 'bg-white text-sky-600 shadow-md'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-white/50'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
            >
              <span>🌐</span>
              <span>{language === 'zh' ? '中文' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {language === 'zh' ? '全球旅行比价平台' : 'Global Travel Comparison'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
            {language === 'zh' 
              ? '一站式比较机票、酒店、租车和火车票价格，为您找到最优惠的选择' 
              : 'Compare flights, hotels, car rentals and train tickets to find the best deals'}
          </p>
        </div>
      </div>

      {/* Search Section */}
      <SearchSection 
        serviceType={serviceType} 
        onSearch={handleSearch}
        language={language}
      />

      {/* Results Section */}
      {hasSearched && (
        <div id="results-section" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {serviceType === 'flights' && <ResultsSection language={language} />}
            {serviceType === 'hotels' && <HotelResultsSection language={language} />}
            {serviceType === 'cars' && <CarResultsSection language={language} />}
            {serviceType === 'trains' && <TrainResultsSection language={language} />}
          </div>
        </div>
      )}

      {/* Popular Sections */}
      {!hasSearched && (
        <>
          <PopularRoutesSection language={language} />
          <PopularHotelsSection language={language} />
          <PopularCarsSection language={language} />
          <PopularTrainsSection language={language} />
        </>
      )}

      {/* Platforms Section */}
      <PlatformsSection language={language} />

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;
