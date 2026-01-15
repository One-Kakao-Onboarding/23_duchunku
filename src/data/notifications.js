// 알림 데이터
export const notificationsData = [
  {
    id: 1,
    type: 'reminder',
    icon: '🏥',
    title: '아빠 정기검진 D-1',
    message: '내일은 아빠 정기검진 날이에요. 응원 메시지를 보내보세요!',
    time: '5분 전',
    isNew: true,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-500'
  },
  {
    id: 2,
    type: 'event',
    icon: '🎉',
    title: '엄마 동창회 오늘',
    message: '오늘 엄마 고등학교 동창회가 있어요. 잘 다녀오시라고 인사해보세요.',
    time: '1시간 전',
    isNew: true,
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-500'
  },
  {
    id: 3,
    type: 'achievement',
    icon: '🎯',
    title: '주간 연락 목표 달성!',
    message: '이번 주 연락 목표 65%를 달성했어요. 조금만 더 힘내세요!',
    time: '3시간 전',
    isNew: false,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500'
  },
  {
    id: 4,
    type: 'support',
    icon: '📚',
    title: '동생 자격증 시험 D-2',
    message: '동생의 자격증 시험이 2일 남았어요. 응원 메시지를 보내주세요.',
    time: '5시간 전',
    isNew: false,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500'
  },
  {
    id: 5,
    type: 'tip',
    icon: '💡',
    title: 'AI 안부 생성 팁',
    message: '맥락 정보를 자세히 입력하면 더 따뜻한 메시지가 생성돼요!',
    time: '1일 전',
    isNew: false,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500'
  }
];
