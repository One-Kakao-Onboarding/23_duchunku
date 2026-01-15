// 나의 정원 - 관계 꽃 데이터
export const gardenPlants = [
  {
    id: 'mom',
    name: '엄마',
    relationship: '65%',
    percentage: 65,
    status: '성장기',
    statusColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    badgeColor: 'bg-yellow-400',
    buttonBg: 'bg-[#3C1E1E]',
    buttonText: 'text-white',
    tone: 'polite',
    context: '동창회 모임'
  },
  {
    id: 'dad',
    name: '아빠',
    relationship: '25%',
    percentage: 25,
    status: '시듦',
    statusColor: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
    badgeColor: 'bg-red-400',
    buttonBg: 'bg-blue-500',
    buttonText: 'text-white',
    tone: 'polite',
    context: '무릎 건강 관리'
  },
  {
    id: 'sibling',
    name: '동생',
    relationship: '45%',
    percentage: 45,
    status: '새싹',
    statusColor: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-100',
    badgeColor: 'bg-yellow-400',
    buttonBg: 'bg-[#3C1E1E]',
    buttonText: 'text-white',
    tone: 'casual',
    context: '자격증 시험 준비'
  },
  {
    id: 'boyfriend',
    name: '남자친구',
    relationship: '98%',
    percentage: 98,
    status: '만개',
    statusColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
    badgeColor: 'bg-green-500',
    buttonBg: 'bg-[#3C1E1E]',
    buttonText: 'text-white',
    tone: 'casual',
    context: '주말 데이트 계획'
  }
];

// 꽃 성장 단계 정의
export const getPlantStage = (percentage) => {
  if (percentage >= 80) return 'bloom'; // 만개
  if (percentage >= 60) return 'growing'; // 성장기
  if (percentage >= 40) return 'sprout'; // 새싹
  return 'wilted'; // 시듦
};

// 꽃 이모지 반환
export const getPlantEmoji = (percentage) => {
  if (percentage >= 80) return '🌻'; // 만개
  if (percentage >= 60) return '🌱'; // 성장기
  if (percentage >= 40) return '🌿'; // 새싹
  return '🥀'; // 시듦
};
