// 받는 사람별 맥락 및 관계 정보
export const recipientData = {
  '아빠': {
    context: "아빠가 최근 무릎이 아프다고 하셨음. 오늘 전국적으로 비 소식 있음.",
    relation: 'parent',
    tone: 'polite'
  },
  '엄마': {
    context: "엄마가 어제 고등학교 동창회에 다녀오셨음. 모임이 즐거우셨는지 궁금함.",
    relation: 'parent',
    tone: 'polite'
  },
  '동생': {
    context: "이번 주말에 동생이 중요한 자격증 시험을 앞두고 있음. 응원이 필요함.",
    relation: 'sibling',
    tone: 'casual'
  },
  '남자친구': {
    context: "우리 오늘 만난 지 1000일 되는 날임! 함께한 시간에 대한 고마움 전하기.",
    relation: 'partner',
    tone: 'casual'
  }
};

// 받는 사람 옵션 목록
export const recipientOptions = Object.keys(recipientData);
