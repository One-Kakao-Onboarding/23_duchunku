import { useState } from 'react';

/**
 * 탭 네비게이션 관리 훅
 * @param {string} initialTab - 초기 탭 (기본값: 'home')
 * @returns {Object} { activeTab, setActiveTab }
 */
export const useTabNavigation = (initialTab = 'home') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return { activeTab, setActiveTab };
};
