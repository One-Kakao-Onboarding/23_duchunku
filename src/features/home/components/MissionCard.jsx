import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

const MissionCard = () => {
  return (
    <div className="bg-[#3C1E1E] text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-sm opacity-80 mb-1">오늘의 안부 미션</p>
        <h2 className="text-2xl font-bold">아빠에게 연락할 시간이에요! 💡</h2>
        <div className="mt-4 flex items-center text-xs bg-white/20 w-fit px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
          <Calendar size={12} className="mr-1" /> 목표 달성률 65% (분석 완료)
        </div>
      </div>
      <Sparkles className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 rotate-12" />
    </div>
  );
};

export default MissionCard;
