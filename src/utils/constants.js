// 온도 레벨 정의
export const TEMPERATURE_LEVELS = {
  HOT: {
    min: 81,
    level: '뜨거움',
    color: 'text-red-500',
    emoji: '❤️',
    bgColor: 'bg-red-50',
    barGradient: 'bg-gradient-to-r from-red-400 to-red-600'
  },
  WARM: {
    min: 61,
    level: '따뜻함',
    color: 'text-orange-500',
    emoji: '🔥',
    bgColor: 'bg-orange-50',
    barGradient: 'bg-gradient-to-r from-orange-400 to-orange-600'
  },
  LUKEWARM: {
    min: 31,
    level: '미지근함',
    color: 'text-gray-500',
    emoji: '💧',
    bgColor: 'bg-gray-50',
    barGradient: 'bg-gradient-to-r from-gray-400 to-gray-500'
  },
  COLD: {
    min: 0,
    level: '차가움',
    color: 'text-blue-500',
    emoji: '🧊',
    bgColor: 'bg-blue-50',
    barGradient: 'bg-gradient-to-r from-blue-400 to-blue-600'
  }
};

// 말투 타입
export const TONE_TYPES = {
  CASUAL: 'casual',
  FORMAL: 'formal',
  POLITE: 'polite'
};

// 그룹 아이콘 (Lucide React 아이콘명)
export const GROUP_ICONS = {
  '회사동료': 'Briefcase',
  '가족': 'Heart',
  '친한친구': 'Smile'
};

// 시즌 타입
export const SEASON_TYPES = {
  YEAR_END: '연말',
  NEW_YEAR: '연초',
  CHUSEOK: '추석',
  SEOLLAL: '설날',
  SEASON: '계절 안부'
};
