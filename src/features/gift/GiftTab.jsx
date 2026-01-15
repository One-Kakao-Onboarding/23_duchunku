import React, { useState } from 'react';
import GiftHeader from './components/GiftHeader';
import PersonSelector from './components/PersonSelector';
import AnalysisInsight from './components/AnalysisInsight';
import GiftCard from './components/GiftCard';
import GiftTips from './components/GiftTips';
import { useGiftRecommendations } from './hooks/useGiftRecommendations';

const GiftTab = () => {
  const giftRecommendations = useGiftRecommendations();
  const [selectedGiftPerson, setSelectedGiftPerson] = useState('아빠');

  const currentPersonGifts = giftRecommendations.find(p => p.person === selectedGiftPerson);

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-24">
      <GiftHeader recommendationCount={giftRecommendations.length} />

      <PersonSelector
        recommendations={giftRecommendations}
        selectedPerson={selectedGiftPerson}
        onSelect={setSelectedGiftPerson}
      />

      {currentPersonGifts && (
        <>
          <AnalysisInsight personData={currentPersonGifts} />

          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm font-bold text-gray-800">맞춤 선물 추천</h3>
              <span className="text-[10px] text-gray-400">AI 분석 기반</span>
            </div>

            {currentPersonGifts.gifts.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>

          <GiftTips />
        </>
      )}
    </div>
  );
};

export default GiftTab;
