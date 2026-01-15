import React from 'react';
import { Home, MessageSquare, Flower2, Gift } from 'lucide-react';

const Navigation = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[390px] bg-[#3C1E1E]/95 backdrop-blur-md rounded-[32px] p-2 flex justify-between items-center shadow-2xl z-20">
      <button
        onClick={() => onTabChange('home')}
        className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${
          activeTab === 'home' ? 'text-[#FEE500]' : 'text-white/40'
        }`}
      >
        <Home size={20} />
        <span className="text-[9px] font-bold">홈</span>
      </button>
      <button
        onClick={() => onTabChange('writer')}
        className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${
          activeTab === 'writer' ? 'text-[#FEE500]' : 'text-white/40'
        }`}
      >
        <MessageSquare size={20} />
        <span className="text-[9px] font-bold">AI 비서</span>
      </button>
      <button
        onClick={() => onTabChange('garden')}
        className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${
          activeTab === 'garden' ? 'text-[#FEE500]' : 'text-white/40'
        }`}
      >
        <Flower2 size={20} />
        <span className="text-[9px] font-bold">나의 정원</span>
      </button>
      <button
        onClick={() => onTabChange('gift')}
        className={`flex-1 py-3 flex flex-col items-center gap-1 transition-all ${
          activeTab === 'gift' ? 'text-[#FEE500]' : 'text-white/40'
        }`}
      >
        <Gift size={20} />
        <span className="text-[9px] font-bold">선물</span>
      </button>
    </nav>
  );
};

export default Navigation;
