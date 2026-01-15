import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const PersonCard = ({ personData, isSelected, rank, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-2xl transition-all text-left relative ${
        isSelected
          ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 shadow-lg scale-[1.02]'
          : 'bg-gray-50 border-2 border-transparent hover:border-gray-200 hover:shadow-md'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* 프로필 아바타 */}
        <div className="relative flex-shrink-0">
          <div
            className={`w-14 h-14 ${personData.avatarBg} rounded-full flex items-center justify-center overflow-hidden shadow-md border-2 ${
              isSelected ? 'border-purple-400' : 'border-white'
            }`}
          >
            <img src={personData.image} alt={personData.person} className="w-full h-full object-cover" />
          </div>
          {/* 우선순위 뱃지 */}
          {rank < 3 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-black text-white shadow-md">
              {rank + 1}
            </div>
          )}
          {/* 온도 표시 */}
          <div
            className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] shadow-sm ${
              personData.temperature < 40
                ? 'bg-blue-500'
                : personData.temperature < 60
                ? 'bg-gray-400'
                : 'bg-orange-400'
            }`}
          >
            {personData.temperature < 40 ? '🧊' : personData.temperature < 60 ? '💧' : '🔥'}
          </div>
        </div>

        {/* 정보 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-black text-gray-800">{personData.person}</h3>
            <span className="text-[9px] text-gray-400">• {personData.lastContact}</span>
          </div>
          <p className="text-[11px] font-bold text-purple-600 mb-1 flex items-center gap-1">
            <Sparkles size={10} />
            {personData.recommendReason}
          </p>
          <p className="text-[10px] text-gray-500 truncate">{personData.recentContext}</p>
        </div>

        {/* 화살표 */}
        {isSelected && <ChevronRight size={20} className="text-purple-500 flex-shrink-0 animate-pulse" />}
      </div>
    </button>
  );
};

export default PersonCard;
