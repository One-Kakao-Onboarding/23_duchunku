/**
 * Netlify Function을 호출하여 OpenAI로 메시지 생성
 *
 * @param {Object} person - 사람 정보 { name, tone, context }
 * @param {string} season - 시즌 (연말, 설날 등)
 * @returns {Promise<string>} 생성된 메시지
 */
export const generateAImessage = async (person, season) => {
  const { name, tone, context } = person;

  try {
    const response = await fetch('/.netlify/functions/generate-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        tone,
        context,
        season,
      }),
    });

    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('메시지 생성 중 오류 발생:', error);

    // 오류 발생 시 폴백 메시지 반환
    return getFallbackMessage(person, season);
  }
};

/**
 * API 호출 실패 시 사용할 폴백 메시지
 */
const getFallbackMessage = (person, season) => {
  const { name, tone, context } = person;

  // 반말/캐주얼 (친구, 동생, 파트너)
  if (tone === 'casual') {
    return `${name}야! 벌써 ${season}이네. 시간 진짜 빠르다ㅋㅋ 저번에 말한 ${context}은 어때? 잘 되고 있지? 날씨 추운데 감기 조심하고, 조만간 얼굴 보자!`;
  }

  // 존댓말/격식 (직장 상사)
  if (tone === 'formal') {
    return `${name}, 안녕하십니까. 어느덧 한 해를 마무리하는 ${season} 시즌입니다. 지난번 ${context} 관련해서 조언해주신 덕분에 큰 힘이 되었습니다. 추운 날씨에 건강 유의하시고 따뜻한 연말 되시길 바랍니다.`;
  }

  // 존댓말/따뜻함 (부모님)
  return `${name}, 오늘 날씨가 많이 쌀쌀하네요. ${season}이라 더 부모님 생각이 나요. 최근에 ${context} 때문에 힘드셨을 텐데 오늘은 좀 어떠세요? 무리하지 마시고 건강 잘 챙기세요. 사랑해요!`;
};
