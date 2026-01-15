import React from 'react';
import { Flower2, Sparkles } from 'lucide-react';
import PlantCard from './components/PlantCard';
import { gardenPlants } from '@/data/garden';

const GardenTab = ({ onNavigateToWriter }) => {
  const handleWater = (plant) => {
    // 물주기 버튼 클릭 시 AI 비서 페이지로 이동하며 해당 사람 선택
    onNavigateToWriter(plant.name);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-24">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-3xl border-2 border-green-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flower2 size={24} className="text-green-600" />
            <h2 className="text-2xl font-black text-gray-800">나의 정원</h2>
          </div>
          <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-green-200">
            <Sparkles size={12} className="text-yellow-500" />
            <span className="text-xs font-bold text-gray-700">관계 정원 가꾸기</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          소중한 사람들과의 관계를 꽃으로 키워보세요. 💐<br />
          물주기(안부 전하기)를 통해 관계의 꽃을 피워보세요!
        </p>
      </div>

      {/* 꽃 카드 그리드 */}
      <div className="grid grid-cols-2 gap-4">
        {gardenPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onWater={handleWater}
          />
        ))}
      </div>

      {/* 안내 메시지 */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-bold text-sm text-gray-800 mb-1">관계 점수란?</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              최근 연락 빈도, 대화의 깊이, 관심 표현 등을 종합하여 AI가 분석한 관계의 친밀도입니다.
              정기적으로 안부를 전하면 점수가 올라가요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenTab;
