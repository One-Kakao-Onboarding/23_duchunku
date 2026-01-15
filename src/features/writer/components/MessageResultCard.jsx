import React from 'react';
import { MessageCircle } from 'lucide-react';

const MessageResultCard = ({ person, message }) => {
  return (
    <div className="bg-blue-50/30 p-5 rounded-3xl border border-blue-100 relative shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-inner">
            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-[12px] font-bold text-blue-800">{person.name}</span>
          <span
            className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
              person.tone === 'casual' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {person.tone === 'casual' ? '반말' : '존댓말'}
          </span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl text-[13px] leading-relaxed text-gray-700 shadow-sm relative z-10 font-medium">
        "{message}"
        <div className="absolute -left-2 top-4 w-4 h-4 bg-white rotate-45 transform border-b border-l border-white"></div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-white/80 text-gray-500 text-[10px] font-bold py-2.5 rounded-xl border border-blue-100">
          내용 수정
        </button>
        <button className="flex-1 bg-blue-500 text-white text-[10px] font-bold py-2.5 rounded-xl shadow-md flex items-center justify-center">
          <MessageCircle size={12} className="mr-1" /> 카톡 발송
        </button>
      </div>
    </div>
  );
};

export default MessageResultCard;
