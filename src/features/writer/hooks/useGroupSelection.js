import { useState, useCallback } from 'react';

/**
 * 그룹 및 인원 선택 로직을 캡슐화한 훅
 * @param {string} initialGroup - 초기 그룹 (기본값: '회사동료')
 * @returns {Object} { selectedGroup, selectedPeople, groupLoading, showGroupResults, handleGroupChange, togglePerson, handleGenerateGroupMessages, clearSelection }
 */
export const useGroupSelection = (initialGroup = '회사동료') => {
  const [selectedGroup, setSelectedGroup] = useState(initialGroup);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [groupLoading, setGroupLoading] = useState(false);
  const [showGroupResults, setShowGroupResults] = useState(false);

  const handleGroupChange = useCallback((group) => {
    setSelectedGroup(group);
    setSelectedPeople([]);
    setShowGroupResults(false);
  }, []);

  const togglePerson = useCallback((id) => {
    setShowGroupResults(false);
    setSelectedPeople(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }, []);

  const handleGenerateGroupMessages = useCallback(async (generateMessageFn, selectedPeopleData, season) => {
    if (selectedPeople.length === 0) return;
    setGroupLoading(true);

    try {
      // 모든 선택된 사람에 대해 메시지 생성
      await Promise.all(
        selectedPeopleData.map(person => generateMessageFn(person, season))
      );
      setShowGroupResults(true);
    } catch (error) {
      console.error('그룹 메시지 생성 실패:', error);
    } finally {
      setGroupLoading(false);
    }
  }, [selectedPeople.length]);

  const clearSelection = useCallback(() => {
    setSelectedPeople([]);
    setShowGroupResults(false);
  }, []);

  return {
    selectedGroup,
    selectedPeople,
    groupLoading,
    showGroupResults,
    handleGroupChange,
    togglePerson,
    handleGenerateGroupMessages,
    clearSelection
  };
};
