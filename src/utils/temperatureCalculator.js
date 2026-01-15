/**
 * 연락 빈도 기반 관계 온도 계산
 *
 * @param {number} actual - 실제 연락 횟수
 * @param {number} ideal - 목표 연락 횟수
 * @returns {Object} { temperature, level, color, emoji, bgColor, barGradient }
 */
export const calculateTemperature = (actual, ideal) => {
  const ratio = (actual / ideal) * 100;
  const temp = Math.min(100, Math.max(0, ratio));

  let level = '';
  let color = '';
  let emoji = '';
  let bgColor = '';
  let barGradient = '';

  if (temp >= 81) {
    level = '뜨거움';
    color = 'text-red-500';
    emoji = '❤️';
    bgColor = 'bg-red-50';
    barGradient = 'bg-gradient-to-r from-red-400 to-red-600';
  } else if (temp >= 61) {
    level = '따뜻함';
    color = 'text-orange-500';
    emoji = '🔥';
    bgColor = 'bg-orange-50';
    barGradient = 'bg-gradient-to-r from-orange-400 to-orange-600';
  } else if (temp >= 31) {
    level = '미지근함';
    color = 'text-gray-500';
    emoji = '💧';
    bgColor = 'bg-gray-50';
    barGradient = 'bg-gradient-to-r from-gray-400 to-gray-500';
  } else {
    level = '차가움';
    color = 'text-blue-500';
    emoji = '🧊';
    bgColor = 'bg-blue-50';
    barGradient = 'bg-gradient-to-r from-blue-400 to-blue-600';
  }

  return {
    temperature: Math.floor(temp),
    level,
    color,
    emoji,
    bgColor,
    barGradient
  };
};

/**
 * 온도에 따른 마지막 연락 시점 계산
 *
 * @param {number} temperature - 관계 온도
 * @returns {string} 마지막 연락 시점
 */
export const getLastContactText = (temperature) => {
  if (temperature >= 80) return '오늘';
  if (temperature >= 60) return '3일 전';
  if (temperature >= 30) return '1주일 전';
  return '2주일 전';
};

/**
 * 온도에 따른 응답률 계산
 *
 * @param {number} temperature - 관계 온도
 * @returns {number} 응답률 (퍼센트)
 */
export const calculateResponseRate = (temperature) => {
  return Math.floor(60 + (temperature * 0.4));
};
