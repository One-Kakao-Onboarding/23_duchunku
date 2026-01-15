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

  const handleGenerateGroupMessages = useCallback(() => {
    if (selectedPeople.length === 0) return;
    setGroupLoading(true);
    setTimeout(() => {
      setGroupLoading(false);
      setShowGroupResults(true);
    }, 1000);
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
