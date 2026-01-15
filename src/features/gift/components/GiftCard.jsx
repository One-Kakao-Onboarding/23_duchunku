import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const GiftCard = ({ gift }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all">
      <div className="flex gap-4 mb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner flex-shrink-0 border-2 border-purple-100">
          {gift.image}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-base text-gray-800 mb-1">{gift.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                  {gift.category}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs font-bold text-gray-600">{gift.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-2 leading-relaxed flex items-start gap-2">
            <span className="text-sm flex-shrink-0">💡</span>
            <span className="font-medium">{gift.reason}</span>
          </p>
          <div className="text-lg font-black text-[#3C1E1E]">{gift.price}</div>
        </div>
      </div>

      {/* AI 인사이트 */}
      <div className="bg-purple-50/50 p-3 rounded-2xl border border-purple-100 mb-3">
        <div className="flex items-start gap-2">
          <Sparkles size={12} className="text-purple-500 mt-0.5 flex-shrink-0" />
          <p className="text-[11px] text-gray-700 leading-relaxed italic">{gift.aiInsight}</p>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex gap-2">
        <button className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all">
          상세보기
        </button>
        <button className="flex-1 bg-gradient-to-r from-[#FEE500] to-[#FFD700] text-[#3C1E1E] py-3 rounded-xl text-xs font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95">
          <Gift size={14} />
          선물하기
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
