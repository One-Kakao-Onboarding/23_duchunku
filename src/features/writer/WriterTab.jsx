import React, { useState } from 'react';
import PersonalWriter from './components/PersonalWriter';
import GroupWriter from './components/GroupWriter';
import { recipientData } from '@/data/recipients';
import { allPeople } from '@/data/people';
import { useAutoSeason } from '@/hooks/useAutoSeason';
import { useMessageGenerator } from './hooks/useMessageGenerator';
import { useGroupSelection } from './hooks/useGroupSelection';

const WriterTab = () => {
  const autoSeason = useAutoSeason();

  // PersonalWriter 상태
  const [recipient, setRecipient] = useState('아빠');
  const [context, setContext] = useState(recipientData['아빠'].context);
  const { loading, generateMessage, getMessage } = useMessageGenerator();

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

  const getPersonalMessage = () => {
    return getMessage(
      { name: recipient, tone: recipientData[recipient].tone, context },
      '오늘'
    );
  };

  const getGroupMessage = (person, season) => {
    return getMessage(person, season);
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
        onGenerate={generateMessage}
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
        onGenerate={handleGenerateGroupMessages}
        getMessage={getGroupMessage}
      />
    </div>
  );
};

export default WriterTab;
