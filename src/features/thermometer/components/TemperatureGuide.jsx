import React from 'react';
import { Sparkles } from 'lucide-react';

const TemperatureGuide = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-sm text-gray-800 mb-4 flex items-center">
        <Sparkles size={16} className="mr-2 text-yellow-500" />
        온도 레벨 가이드
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-sm">
            ❤️
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-700">81-100° 뜨거움</div>
            <div className="text-[10px] text-gray-500">활발한 소통, 건강한 관계 유지 중</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center text-sm">
            🔥
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-700">61-80° 따뜻함</div>
            <div className="text-[10px] text-gray-500">적절한 연락 빈도, 좋은 관계</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-sm">
            💧
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-700">31-60° 미지근함</div>
            <div className="text-[10px] text-gray-500">연락이 필요한 시점, 안부 추천</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-sm">
            🧊
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-700">0-30° 차가움</div>
            <div className="text-[10px] text-gray-500">장기 미연락, 즉시 연락 권장</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureGuide;
