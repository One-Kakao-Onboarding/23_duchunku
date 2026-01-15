import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';

const Timeline = ({ timelineData, onNavigateToWriter }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 flex items-center mb-6">
        <Clock size={18} className="mr-2 text-[#3C1E1E]" /> 챙겨줘 나나
      </h3>
      <div className="relative">
        <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className="w-20 pt-1 text-right">
                <span className="text-[10px] font-bold text-gray-400 block leading-none">
                  {item.date.split('(')[0]}
                </span>
                <span className="text-[9px] text-gray-300 font-medium">
                  ({item.date.split('(')[1]}
                </span>
              </div>
              <div className="relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm border-2 border-white ${
                    index === 0
                      ? 'bg-red-50'
                      : index === 1
                      ? 'bg-yellow-50'
                      : 'bg-blue-50'
                  }`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 bg-gray-50/50 p-4 rounded-2xl">
                <h4 className="font-bold text-sm text-gray-800 mb-1">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-tight mb-3">{item.desc}</p>
                <button
                  onClick={() => onNavigateToWriter(item.recipient)}
                  className="flex items-center text-[10px] font-bold text-[#3C1E1E] bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm"
                >
                  안부 보내기 <ChevronRight size={10} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
