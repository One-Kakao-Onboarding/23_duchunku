import { useMemo } from 'react';
import { giftRecommendationsData } from '@/data/gifts';

/**
 * 선물 추천 데이터 정렬 및 제공 훅
 * @returns {Array} 우선순위 순으로 정렬된 선물 추천 데이터
 */
export const useGiftRecommendations = () => {
  return useMemo(() => {
    return giftRecommendationsData.sort((a, b) => b.priority - a.priority);
  }, []);
};
