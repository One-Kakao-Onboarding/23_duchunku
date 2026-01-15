import React from 'react';
import { Heart } from 'lucide-react';

const GiftTips = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-sm text-gray-800 mb-4 flex items-center">
        <Heart size={16} className="mr-2 text-red-400" />
        선물 타이밍 TIP
      </h3>
      <div className="space-y-3 text-xs text-gray-600">
        <div className="flex items-start gap-2">
          <span className="text-base flex-shrink-0">🎯</span>
          <p className="leading-relaxed">
            <span className="font-bold text-gray-800">장기 미연락 관계</span>에게는 선물이 자연스러운
            연결 고리가 될 수 있어요.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-base flex-shrink-0">💝</span>
          <p className="leading-relaxed">
            <span className="font-bold text-gray-800">특별한 날</span>이 없어도 "생각나서"라는 말과 함께
            보내면 더 감동적이에요.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-base flex-shrink-0">📦</span>
          <p className="leading-relaxed">
            선물과 함께 <span className="font-bold text-gray-800">AI가 생성한 안부 메시지</span>를 보내면
            완벽해요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftTips;
