import React from 'react';
import { Droplet } from 'lucide-react';

const PlantCard = ({ plant, onWater }) => {
  // 꽃 성장 단계별 SVG 컴포넌트
  const renderPlant = () => {
    const { percentage } = plant;

    if (percentage >= 80) {
      // 만개 - 큰 주황색 꽃
      return (
        <div className="relative w-32 h-32 flex items-end justify-center">
          {/* 화분 */}
          <div className="absolute bottom-0 w-20 h-10 bg-gradient-to-b from-[#C4A57B] to-[#B8956A] rounded-b-lg"
               style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}>
            <div className="w-full h-1 bg-[#8B7355] mt-0"></div>
          </div>
          {/* 줄기 */}
          <div className="absolute bottom-8 w-1.5 h-16 bg-green-600 rounded-full"></div>
          {/* 꽃 */}
          <div className="absolute bottom-20 text-5xl">🌻</div>
        </div>
      );
    }

    if (percentage >= 60) {
      // 성장기 - 초록 줄기와 잎
      return (
        <div className="relative w-32 h-32 flex items-end justify-center">
          {/* 화분 */}
          <div className="absolute bottom-0 w-20 h-10 bg-gradient-to-b from-[#C4A57B] to-[#B8956A] rounded-b-lg"
               style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}>
            <div className="w-full h-1 bg-[#8B7355] mt-0"></div>
          </div>
          {/* 줄기 */}
          <div className="absolute bottom-8 w-1.5 h-12 bg-green-600 rounded-full"></div>
          {/* 잎 */}
          <div className="absolute bottom-12 left-1/2 -translate-x-8">
            <div className="w-8 h-6 bg-green-500 rounded-full transform -rotate-45"></div>
          </div>
          <div className="absolute bottom-14 left-1/2 translate-x-2">
            <div className="w-8 h-6 bg-green-500 rounded-full transform rotate-45"></div>
          </div>
        </div>
      );
    }

    if (percentage >= 40) {
      // 새싹
      return (
        <div className="relative w-32 h-32 flex items-end justify-center">
          {/* 화분 */}
          <div className="absolute bottom-0 w-20 h-10 bg-gradient-to-b from-[#C4A57B] to-[#B8956A] rounded-b-lg"
               style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}>
            <div className="w-full h-1 bg-[#8B7355] mt-0"></div>
          </div>
          {/* 작은 새싹 */}
          <div className="absolute bottom-8 flex gap-1">
            <div className="w-3 h-8 bg-green-400 rounded-full"></div>
            <div className="w-3 h-6 bg-green-400 rounded-full mt-2"></div>
          </div>
        </div>
      );
    }

    // 시듦 - 검은 꽃
    return (
      <div className="relative w-32 h-32 flex items-end justify-center">
        {/* 화분 */}
        <div className="absolute bottom-0 w-20 h-10 bg-gradient-to-b from-[#C4A57B] to-[#B8956A] rounded-b-lg"
             style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}>
          <div className="w-full h-1 bg-[#8B7355] mt-0"></div>
        </div>
        {/* 시든 줄기 */}
        <div className="absolute bottom-8 w-1.5 h-10 bg-gray-400 rounded-full opacity-60"></div>
        {/* 시든 꽃 */}
        <div className="absolute bottom-14 text-3xl opacity-70">🥀</div>
      </div>
    );
  };

  return (
    <div className={`${plant.bgColor} p-6 rounded-3xl border-2 ${plant.borderColor} shadow-sm transition-all hover:shadow-lg`}>
      {/* 퍼센트 배지 */}
      <div className="flex justify-center mb-4">
        <span className={`${plant.badgeColor} text-white font-black text-sm px-4 py-1.5 rounded-full shadow-md`}>
          {plant.relationship}
        </span>
      </div>

      {/* 꽃 화분 */}
      <div className="flex justify-center mb-6">
        {renderPlant()}
      </div>

      {/* 이름 */}
      <h3 className="text-xl font-black text-gray-800 text-center mb-1">
        {plant.name}
      </h3>

      {/* 상태 */}
      <p className={`text-sm font-bold ${plant.statusColor} text-center mb-6`}>
        {plant.status}
      </p>

      {/* 물주기 버튼 */}
      <button
        onClick={() => onWater(plant)}
        className={`w-full ${plant.buttonBg} ${plant.buttonText} font-black py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all`}
      >
        <Droplet size={18} fill="currentColor" />
        물주기
      </button>
    </div>
  );
};

export default PlantCard;
