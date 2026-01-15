// 선물 추천 데이터 (우선순위 기반 정렬)
export const giftRecommendationsData = [
  {
    person: '아빠',
    personId: 'p5',
    avatar: '👨',
    image: '/profile_image/father.png',
    avatarBg: 'bg-blue-100',
    priority: 85,
    recommendReason: '2주째 연락이 없어요 (온도: 20°)',
    recentContext: '최근 무릎이 아프다고 하셨음',
    lastContact: '2주일 전',
    temperature: 20,
    gifts: [
      {
        id: 'g1',
        name: '프리미엄 무릎 보호대',
        category: '건강',
        price: '39,000원',
        reason: '"무릎이 아프다"는 대화에서 건강 관심사 파악',
        image: '🦵',
        rating: 4.8,
        link: '#',
        aiInsight: '장기 미연락 상태에서 건강 관련 선물은 관심과 배려를 자연스럽게 전달할 수 있어요.'
      },
      {
        id: 'g2',
        name: '관절 영양제 세트',
        category: '건강',
        price: '55,000원',
        reason: '관절 건강 관리에 실질적인 도움',
        image: '💊',
        rating: 4.6,
        link: '#',
        aiInsight: '건강 관련 선물은 오랜 공백을 메우는 좋은 명분이 됩니다.'
      }
    ]
  },
  {
    person: '엄마',
    personId: 'p6',
    avatar: '👩',
    image: '/profile_image/mother.png',
    avatarBg: 'bg-pink-100',
    priority: 60,
    recommendReason: '동창회 시즌, 선물로 응원해보세요',
    recentContext: '어제 고등학교 동창회 다녀오심',
    lastContact: '3일 전',
    temperature: 43,
    gifts: [
      {
        id: 'g3',
        name: '고급 화장품 세트',
        category: '뷰티',
        price: '89,000원',
        reason: '동창회 모임 자주 가시니까 피부 관리 제품',
        image: '💄',
        rating: 4.9,
        link: '#',
        aiInsight: '사교 활동이 많은 분께는 외적인 아름다움을 가꾸는 선물이 좋아요.'
      },
      {
        id: 'g4',
        name: '명품 스카프',
        category: '패션',
        price: '120,000원',
        reason: '모임에서 돋보이는 우아한 액세서리',
        image: '🧣',
        rating: 4.7,
        link: '#',
        aiInsight: '패션 소품은 일상에서 자주 사용하며 선물한 사람을 떠올리게 해요.'
      }
    ]
  },
  {
    person: '동생',
    personId: 'p9',
    avatar: '👦',
    image: '/profile_image/borther.png',
    avatarBg: 'bg-green-100',
    priority: 90,
    recommendReason: '이번 주말 중요한 시험! 응원 필요',
    recentContext: '자격증 시험 준비 중 (D-3)',
    lastContact: '1주일 전',
    temperature: 33,
    gifts: [
      {
        id: 'g5',
        name: '스타벅스 기프티콘',
        category: '카페',
        price: '50,000원',
        reason: '시험 준비로 카페에서 공부 많이 할 것 같아요',
        image: '☕',
        rating: 5.0,
        link: '#',
        aiInsight: '카페 기프티콘은 부담 없이 응원의 마음을 전할 수 있는 실용적인 선물이에요.'
      },
      {
        id: 'g6',
        name: '집중력 향상 영양제',
        category: '건강',
        price: '35,000원',
        reason: '시험 기간 컨디션 관리 필수템',
        image: '🧠',
        rating: 4.5,
        link: '#',
        aiInsight: '중요한 순간을 앞둔 사람에게는 실질적인 도움이 되는 선물이 좋아요.'
      }
    ]
  },
  {
    person: '남자친구',
    personId: 'p10',
    avatar: '❤️',
    image: '/profile_image/default1.png',
    avatarBg: 'bg-red-100',
    priority: 95,
    recommendReason: '1000일 기념일이 다가와요! (D-2)',
    recentContext: '만난 지 998일째, 특별한 날 준비',
    lastContact: '오늘',
    temperature: 100,
    gifts: [
      {
        id: 'g7',
        name: '커플 향수 세트',
        category: '향수',
        price: '150,000원',
        reason: '1000일 기념 특별한 선물',
        image: '🌹',
        rating: 4.9,
        link: '#',
        aiInsight: '특별한 날에는 감성적이고 기억에 남을 선물이 완벽해요.'
      },
      {
        id: 'g8',
        name: '커플 시계',
        category: '패션',
        price: '280,000원',
        reason: '함께한 시간을 기억하는 의미있는 선물',
        image: '⌚',
        rating: 4.8,
        link: '#',
        aiInsight: '시계는 매일 착용하며 소중한 순간을 떠올리게 하는 최고의 기념 선물이에요.'
      }
    ]
  },
  {
    person: '김부장님',
    personId: 'p1',
    avatar: '👔',
    image: '/profile_image/default1.png',
    avatarBg: 'bg-gray-100',
    priority: 70,
    recommendReason: '연말 감사 인사 시즌입니다',
    recentContext: '최근 프로젝트에서 많은 도움 주심',
    lastContact: '5일 전',
    temperature: 55,
    gifts: [
      {
        id: 'g9',
        name: '프리미엄 와인 세트',
        category: '주류',
        price: '120,000원',
        reason: '와인 좋아하신다고 등산 모임에서 언급하심',
        image: '🍷',
        rating: 4.7,
        link: '#',
        aiInsight: '직장 상사에게는 품격있고 실용적인 선물이 적합해요.'
      },
      {
        id: 'g10',
        name: '등산 장비 세트',
        category: '스포츠',
        price: '85,000원',
        reason: '등산을 즐기신다는 대화 맥락 포착',
        image: '⛰️',
        rating: 4.6,
        link: '#',
        aiInsight: '상대방의 취미를 존중하는 선물은 깊은 인상을 남겨요.'
      }
    ]
  },
  {
    person: '민수',
    personId: 'p7',
    avatar: '🧑',
    image: '/profile_image/borther.png',
    avatarBg: 'bg-purple-100',
    priority: 75,
    recommendReason: '이직 준비 중, 응원이 필요할 때',
    recentContext: '최근 이직 준비로 스트레스 많다고 함',
    lastContact: '4일 전',
    temperature: 47,
    gifts: [
      {
        id: 'g11',
        name: '고급 명함 케이스',
        category: '패션',
        price: '65,000원',
        reason: '새 출발을 응원하는 실용적인 선물',
        image: '💼',
        rating: 4.5,
        link: '#',
        aiInsight: '새로운 시작을 앞둔 친구에게는 응원의 의미가 담긴 선물이 좋아요.'
      },
      {
        id: 'g12',
        name: '스트레스 해소 안마기',
        category: '건강',
        price: '45,000원',
        reason: '이직 준비 스트레스 해소에 도움',
        image: '💆',
        rating: 4.4,
        link: '#',
        aiInsight: '힘든 시기를 보내는 친구에게는 실질적인 위로가 되는 선물이 효과적이에요.'
      }
    ]
  }
];
