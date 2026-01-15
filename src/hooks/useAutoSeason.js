import { useMemo } from 'react';

/**
 * 날짜 기반 자동 시즌 계산 훅
 * @returns {string} 현재 시즌 (연말, 연초, 추석, 설날, 계절 안부)
 */
export const useAutoSeason = () => {
  return useMemo(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    if (month === 12 && date >= 15) return '연말';
    if (month === 1 && date <= 15) return '연초';
    if (month === 9 || month === 10) return '추석';
    if (month === 1 || month === 2) return '설날';
    return '계절 안부';
  }, []);
};
