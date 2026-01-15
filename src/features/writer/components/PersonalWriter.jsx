import React from 'react';
import { MessageSquare, Send, RefreshCw, Sparkles } from 'lucide-react';

const PersonalWriter = ({
  recipient,
  context,
  recipientData,
  loading,
  onRecipientChange,
  onContextChange,
  onGenerate,
  getMessage
}) => {
  return (
    <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg flex items-center text-gray-800">
          <MessageSquare size={20} className="mr-2 text-[#3C1E1E]" /> 기억해 나나
        </h3>
        <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-bold">
          1:1 맞춤분석
        </span>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-3 rounded-xl border border-transparent focus-within:border-yellow-400 transition-all">
          <label className="text-[10px] font-bold text-gray-400 block mb-1">받는 사람</label>
          <select
            value={recipient}
            onChange={(e) => onRecipientChange(e.target.value)}
            className="bg-transparent w-full text-sm font-bold text-gray-700 outline-none border-none p-0 focus:ring-0 cursor-pointer"
          >
            {Object.keys(recipientData).map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl border border-transparent focus-within:border-yellow-400 transition-all">
          <label className="text-[10px] font-bold text-gray-400 block mb-1">최근 상황 맥락</label>
          <textarea
            value={context}
            onChange={(e) => onContextChange(e.target.value)}
            rows={2}
            className="bg-transparent w-full text-sm text-gray-600 leading-tight outline-none border-none p-0 focus:ring-0 resize-none font-medium"
          />
        </div>

        <button
          onClick={onGenerate}
          className="w-full bg-[#FEE500] text-[#3C1E1E] font-black py-4 rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-all text-sm"
        >
          {loading ? <RefreshCw className="animate-spin mr-2" size={18} /> : <Send className="mr-2" size={18} />}
          안부 문구 새롭게 생성
        </button>

        <div
          className={`bg-[#FEE500]/5 p-5 rounded-[28px] border-2 border-dashed border-[#FEE500]/30 transition-all relative ${
            loading ? 'opacity-30' : 'opacity-100'
          }`}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-[#3C1E1E] flex items-center gap-1">
              <Sparkles size={12} className="text-yellow-600" /> AI 말투 복제 완료
            </span>
            <span className="text-[9px] bg-white px-2 py-0.5 rounded-full font-bold text-gray-400 uppercase">
              {recipientData[recipient].tone === 'casual' ? '반말 모드' : '존댓말 모드'}
            </span>
          </div>
          <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
            "{getMessage()}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalWriter;
