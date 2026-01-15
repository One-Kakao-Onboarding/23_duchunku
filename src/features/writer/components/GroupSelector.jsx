import React from 'react';
import { Briefcase, Heart, Smile } from 'lucide-react';

const GroupSelector = ({ selectedGroup, onGroupChange }) => {
  const groups = [
    { id: '회사동료', icon: Briefcase },
    { id: '가족', icon: Heart },
    { id: '친한친구', icon: Smile }
  ];

  return (
    <div className="mb-4">
      <div className="flex bg-gray-100 p-1.5 rounded-2xl gap-1">
        {groups.map((grp) => {
          const IconComponent = grp.icon;
          return (
            <button
              key={grp.id}
              onClick={() => onGroupChange(grp.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-bold transition-all ${
                selectedGroup === grp.id
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <IconComponent size={14} /> {grp.id}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GroupSelector;
