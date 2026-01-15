import React, { useState, useEffect } from 'react';
import PersonalWriter from './components/PersonalWriter';
import GroupWriter from './components/GroupWriter';
import { recipientData } from '@/data/recipients';
import { allPeople } from '@/data/people';
import { useAutoSeason } from '@/hooks/useAutoSeason';
import { useMessageGenerator } from './hooks/useMessageGenerator';
import { useGroupSelection } from './hooks/useGroupSelection';

const WriterTab = ({ initialRecipient = null }) => {
  const autoSeason = useAutoSeason();

  // initialRecipient이 있으면 그것을 사용, 없으면 '아빠'
  const defaultRecipient = initialRecipient && recipientData[initialRecipient] ? initialRecipient : '아빠';

  // PersonalWriter 상태
  const [recipient, setRecipient] = useState(defaultRecipient);
  const [context, setContext] = useState(recipientData[defaultRecipient].context);
  const { loading, generateMessage, getMessage } = useMessageGenerator();

  // initialRecipient가 변경되면 recipient와 context 업데이트
  useEffect(() => {
    if (initialRecipient && recipientData[initialRecipient]) {
      setRecipient(initialRecipient);
      setContext(recipientData[initialRecipient].context);
    }
  }, [initialRecipient]);

  // GroupWriter 상태
  const {
    selectedGroup,
    selectedPeople,
    groupLoading,
    showGroupResults,
    handleGroupChange,
    togglePerson,
    handleGenerateGroupMessages
  } = useGroupSelection('회사동료');

  const handleRecipientChange = (newRecipient) => {
    setRecipient(newRecipient);
    setContext(recipientData[newRecipient].context);
  };

  const handlePersonalGenerate = () => {
    const personInfo = {
      name: recipient,
      tone: recipientData[recipient].tone,
      context
    };
    generateMessage(personInfo, '오늘');
  };

  const getPersonalMessage = () => {
    return getMessage(
      { name: recipient, tone: recipientData[recipient].tone, context },
      '오늘'
    );
  };

  const getGroupMessage = (person, season) => {
    return getMessage(person, season);
  };

  const handleGroupGenerate = () => {
    const selectedPeopleData = allPeople.filter(p => selectedPeople.includes(p.id));
    handleGenerateGroupMessages(generateMessage, selectedPeopleData, autoSeason);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-24">
      <PersonalWriter
        recipient={recipient}
        context={context}
        recipientData={recipientData}
        loading={loading}
        onRecipientChange={handleRecipientChange}
        onContextChange={setContext}
        onGenerate={handlePersonalGenerate}
        getMessage={getPersonalMessage}
      />

      <GroupWriter
        selectedGroup={selectedGroup}
        selectedPeople={selectedPeople}
        allPeople={allPeople}
        autoSeason={autoSeason}
        groupLoading={groupLoading}
        showGroupResults={showGroupResults}
        onGroupChange={handleGroupChange}
        onTogglePerson={togglePerson}
        onGenerate={handleGroupGenerate}
        getMessage={getGroupMessage}
      />
    </div>
  );
};

export default WriterTab;
