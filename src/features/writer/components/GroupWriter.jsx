import React from 'react';
import { Users, Sparkles, RefreshCw } from 'lucide-react';
import GroupSelector from './GroupSelector';
import PeopleList from './PeopleList';
import MessageResultCard from './MessageResultCard';

const GroupWriter = ({
  selectedGroup,
  selectedPeople,
  allPeople,
  autoSeason,
  groupLoading,
  showGroupResults,
  onGroupChange,
  onTogglePerson,
  onGenerate,
  getMessage
}) => {
  const filteredPeople = allPeople.filter(p => p.group === selectedGroup);
  const selectedPeopleData = allPeople.filter(p => selectedPeople.includes(p.id));

  return (
    <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-bold text-lg flex items-center text-gray-800">
          <Users size={20} className="mr-2 text-blue-500" /> 챙겨줘 나나
        </h3>
        <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
          <Sparkles size={10} className="text-blue-500" />
          <span className="text-[10px] text-blue-500 font-bold">자동 추적: {autoSeason}</span>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 mb-6">
        AI가 오늘 날짜와 가장 가까운 연락 명분을 찾아냈어요.
      </p>

      <GroupSelector selectedGroup={selectedGroup} onGroupChange={onGroupChange} />

      <PeopleList
        people={filteredPeople}
        selectedPeople={selectedPeople}
        onToggle={onTogglePerson}
      />

      <button
        onClick={onGenerate}
        disabled={groupLoading || selectedPeople.length === 0}
        className={`w-full font-black py-4 rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all mb-2 ${
          selectedPeople.length > 0
            ? 'bg-[#3C1E1E] text-white'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
        }`}
      >
        {groupLoading ? (
          <RefreshCw className="animate-spin mr-2" size={18} />
        ) : (
          <Sparkles className="mr-2" size={18} />
        )}
        {selectedPeople.length > 0
          ? `${selectedPeople.length}명의 ${autoSeason} 안부 동시 생성`
          : '대상을 선택해주세요'}
      </button>

      {showGroupResults && (
        <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-500">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-blue-500" />
              <span className="text-xs font-bold text-gray-600">
                AI 말투 클로닝 결과 ({selectedPeople.length})
              </span>
            </div>
            <span className="text-[10px] text-gray-400 italic">맥락 기반 1:1 메시지</span>
          </div>

          <div className={`space-y-4 ${groupLoading ? 'opacity-30 blur-sm' : 'opacity-100'}`}>
            {selectedPeopleData.map((person) => (
              <MessageResultCard
                key={person.id}
                person={person}
                message={getMessage(person, autoSeason)}
              />
            ))}
          </div>

          <button className="w-full bg-[#3C1E1E] text-white text-xs font-black py-4 rounded-2xl shadow-xl mt-4 animate-bounce">
            선택한 {selectedPeople.length}명에게 일괄 전송하기
          </button>
        </div>
      )}
    </section>
  );
};

export default GroupWriter;
