/**
 * AI 메시지 생성 유틸리티
 *
 * @param {Object} person - 사람 정보 { name, tone, context }
 * @param {string} season - 시즌 (연말, 설날 등)
 * @param {number} index - 메시지 변형 인덱스
 * @returns {string} 생성된 메시지
 */
export const generateAImessage = (person, season, index = 0) => {
  const { name, tone, context } = person;

  // 반말/캐주얼 (친구, 동생, 파트너)
  if (tone === 'casual') {
    const templates = [
      () => `${name}야! 벌써 ${season}이네. 시간 진짜 빠르다ㅋㅋ 저번에 말한 ${context}은 어때? 잘 되고 있지? 날씨 추운데 감기 조심하고, 조만간 얼굴 보자!`,
      () => `안녕 ${name}! 오늘 날씨 보니까 네 생각나서 톡해. ${season}이라 분위기도 연말연말하네~ ${context}은 잘 마무리했어? 화이팅하고 답장 줘!`,
      () => `${name}! ${season} 안부 전한다ㅎㅎ 요즘 ${context} 때문에 정신없지? 너무 무리하지 말고 맛있는 거 챙겨 먹어! 홧팅!`
    ];
    return templates[index % templates.length]();
  }

  // 존댓말/격식 (직장 상사)
  if (tone === 'formal') {
    const templates = [
      () => `${name}, 안녕하십니까. 어느덧 한 해를 마무리하는 ${season} 시즌입니다. 지난번 ${context} 관련해서 조언해주신 덕분에 큰 힘이 되었습니다. 추운 날씨에 건강 유의하시고 따뜻한 연말 되시길 바랍니다.`,
      () => `${name}님, 평소 베풀어주신 배려에 감사드리며 ${season} 안부 인사 올립니다. 요즘 진행하시는 ${context} 프로젝트도 잘 마무리되시길 응원하겠습니다. 새해 복 많이 받으십시오.`,
    ];
    return templates[index % templates.length]();
  }

  // 존댓말/따뜻함 (부모님)
  const templates = [
    () => `${name}, 오늘 날씨가 많이 쌀쌀하네요. ${season}이라 더 부모님 생각이 나요. 최근에 ${context} 때문에 힘드셨을 텐데 오늘은 좀 어떠세요? 무리하지 마시고 건강 잘 챙기세요. 사랑해요!`,
    () => `${name}, 어느새 ${season}이네요! ${context}은 잘 해결되셨는지 궁금해서 연락드렸어요. 늘 감사한 마음인 거 아시죠? 오늘 하루도 기분 좋게 보내세요!`
  ];
  return templates[index % templates.length]();
};
