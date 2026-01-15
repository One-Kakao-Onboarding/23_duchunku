import React from 'react';
import { MessageCircle } from 'lucide-react';

const AnalysisInsight = ({ personData }) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-3xl border border-purple-100">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-lg flex-shrink-0">
          🤖
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-bold text-purple-900 mb-2 flex items-center gap-2">
            <span>{personData.person}님 대화 맥락 분석</span>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                personData.temperature < 40
                  ? 'bg-blue-100 text-blue-700'
                  : personData.temperature < 60
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-orange-100 text-orange-700'
              }`}
            >
              관계온도 {personData.temperature}°
            </span>
          </h3>
          <p className="text-xs text-gray-700 leading-relaxed mb-2">{personData.recentContext}</p>
          <div className="flex items-center gap-1 text-[10px] text-purple-600 font-bold">
            <MessageCircle size={12} />
            <span>선물 추천 {personData.gifts.length}개 준비됨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisInsight;
