import React from 'react';
import PersonCard from './PersonCard';

const PersonSelector = ({ recommendations, selectedPerson, onSelect }) => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <label className="text-xs font-bold text-gray-800">추천 순위별 보기</label>
        <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold">
          총 {recommendations.length}명
        </span>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
        {recommendations.map((personData, index) => (
          <PersonCard
            key={personData.person}
            personData={personData}
            isSelected={selectedPerson === personData.person}
            rank={index}
            onClick={() => onSelect(personData.person)}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonSelector;
