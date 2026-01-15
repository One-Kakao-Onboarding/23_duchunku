import { useMemo } from 'react';
import { calculateTemperature, getLastContactText, calculateResponseRate } from '@/utils/temperatureCalculator';

/**
 * 관계 온도 계산 훅
 * @param {Array} dashboardData - 대시보드 데이터 (actual, ideal 포함)
 * @returns {Array} 온도 계산이 완료된 데이터
 */
export const useTemperature = (dashboardData) => {
  return useMemo(() => {
    return dashboardData.map(person => {
      const tempData = calculateTemperature(person.actual, person.ideal);
      const lastContact = getLastContactText(tempData.temperature);
      const responseRate = calculateResponseRate(tempData.temperature);

      return {
        ...person,
        ...tempData,
        lastContact,
        responseRate
      };
    });
  }, [dashboardData]);
};
