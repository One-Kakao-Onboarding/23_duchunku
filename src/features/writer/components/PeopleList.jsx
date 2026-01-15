import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PeopleList = ({ people, selectedPeople, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {people.map((person) => (
        <button
          key={person.id}
          onClick={() => onToggle(person.id)}
          className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-sm font-bold ${
            selectedPeople.includes(person.id)
              ? 'bg-blue-50/50 border-blue-400 text-blue-700'
              : 'bg-gray-50 border-transparent text-gray-500'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <span>{person.name}</span>
          </div>
          {selectedPeople.includes(person.id) && <CheckCircle2 size={16} className="text-blue-500" />}
        </button>
      ))}
    </div>
  );
};

export default PeopleList;
