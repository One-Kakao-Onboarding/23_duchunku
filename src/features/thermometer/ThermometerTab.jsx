import React from 'react';
import { Thermometer, Heart } from 'lucide-react';
import TemperatureCard from './components/TemperatureCard';
import TemperatureGuide from './components/TemperatureGuide';
import { dashboardData } from '@/data/dashboard';
import { useTemperature } from './hooks/useTemperature';

const ThermometerTab = ({ onNavigateToWriter }) => {
  const relationshipTemperature = useTemperature(dashboardData);

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-24">
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-3xl shadow-sm border border-pink-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-black text-gray-800 flex items-center">
            <Thermometer size={24} className="mr-2 text-red-500" />
            관계 온도계
          </h2>
          <Heart size={20} className="text-red-400 animate-pulse" />
        </div>
        <p className="text-xs text-gray-600">연락 빈도로 측정한 관계의 따뜻함</p>
      </div>

      <div className="space-y-4">
        {relationshipTemperature.map((person, idx) => (
          <TemperatureCard
            key={idx}
            person={person}
            onNavigateToWriter={onNavigateToWriter}
          />
        ))}
      </div>

      <TemperatureGuide />
    </div>
  );
};

export default ThermometerTab;
