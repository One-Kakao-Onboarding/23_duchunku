import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const GiftHeader = ({ recommendationCount }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl shadow-sm border border-purple-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-black text-gray-800 flex items-center">
            <Gift size={24} className="mr-2 text-purple-500" />
            센스있게 나나
          </h2>
          <Sparkles size={20} className="text-purple-400 animate-pulse" />
        </div>
        <p className="text-xs text-gray-600">대화 맥락 AI 분석으로 똑똑한 선물 추천</p>
      </div>

      <div className="bg-white p-5 rounded-3xl shadow-sm border-2 border-purple-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-purple-500" />
            <span className="text-xs font-black text-purple-900">
              지금 선물하면 좋을 사람 {recommendationCount}명
            </span>
          </div>
          <p className="text-[11px] text-gray-600">
            장기 미연락, 특별한 날, 최근 이벤트를 고려해 우선순위를 계산했어요
          </p>
        </div>
      </div>
    </>
  );
};

export default GiftHeader;
