import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const handler = async (event) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // POST 요청만 허용
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, tone, context, season } = JSON.parse(event.body);

    // 입력 검증
    if (!name || !tone || !season) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '필수 파라미터가 누락되었습니다.' }),
      };
    }

    // 톤에 따른 프롬프트 설정
    let toneDescription = '';
    if (tone === 'casual') {
      toneDescription = '친근하고 반말을 사용하는 편안한 말투';
    } else if (tone === 'formal') {
      toneDescription = '정중하고 격식있는 존댓말 말투';
    } else {
      toneDescription = '따뜻하고 존중하는 존댓말 말투';
    }

    // OpenAI API 호출
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // 빠르고 저렴한 모델
      messages: [
        {
          role: 'system',
          content: `당신은 따뜻한 안부 메시지를 작성하는 AI 비서입니다.
주어진 정보를 바탕으로 ${toneDescription}로 자연스럽고 진심 어린 메시지를 작성해주세요.
메시지는 2-3문장으로 간결하게 작성하되, 상대방의 상황을 배려하는 내용을 포함해야 합니다.`
        },
        {
          role: 'user',
          content: `받는 사람: ${name}
시즌/명분: ${season}
최근 상황: ${context || '특별한 상황 없음'}
말투: ${toneDescription}

위 정보를 바탕으로 ${name}에게 보낼 따뜻한 안부 메시지를 작성해주세요.`
        }
      ],
      temperature: 0.8, // 창의성
      max_tokens: 200,
    });

    const message = completion.choices[0].message.content.trim();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'AI 메시지 생성에 실패했습니다.',
        details: error.message
      }),
    };
  }
};
