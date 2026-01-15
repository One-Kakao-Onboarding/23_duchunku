import React from 'react';
import { Clock, Send } from 'lucide-react';

const TemperatureCard = ({ person, onNavigateToWriter }) => {
  return (
    <div className={`${person.bgColor} p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md border-2 border-white">
            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">{person.name}</h3>
            <p className={`text-xs font-bold ${person.color}`}>{person.level}</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-black ${person.color}`}>{person.temperature}°</div>
          <div className="text-[9px] text-gray-400 font-bold">관계 온도</div>
        </div>
      </div>

      {/* 온도 바 */}
      <div className="mb-4">
        <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${person.barGradient}`}
            style={{ width: `${person.temperature}%` }}
          ></div>
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/60 p-3 rounded-xl text-center">
          <div className="text-xs text-gray-500 mb-1">실제 연락</div>
          <div className="text-lg font-black text-gray-800">{person.actual}회</div>
        </div>
        <div className="bg-white/60 p-3 rounded-xl text-center">
          <div className="text-xs text-gray-500 mb-1">목표 연락</div>
          <div className="text-lg font-black text-gray-800">{person.ideal}회</div>
        </div>
        <div className="bg-white/60 p-3 rounded-xl text-center">
          <div className="text-xs text-gray-500 mb-1">응답률</div>
          <div className="text-lg font-black text-gray-800">{person.responseRate}%</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-gray-600">
          <Clock size={12} />
          <span>마지막 연락: {person.lastContact}</span>
        </div>
        {person.temperature < 60 && (
          <button
            onClick={onNavigateToWriter}
            className="bg-[#3C1E1E] text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow-md active:scale-95 transition-all"
          >
            <Send size={12} /> 안부 보내기
          </button>
        )}
      </div>

      {/* 경고 메시지 */}
      {person.temperature < 40 && (
        <div className="mt-4 bg-white/80 p-3 rounded-xl border border-blue-200">
          <p className="text-xs text-gray-700 flex items-center gap-2">
            <span className="text-base">💡</span>
            <span className="font-medium">장기 미연락 상태입니다. 관계를 따뜻하게 유지해보세요!</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TemperatureCard;
