import { useState, useCallback } from 'react';
import { generateAImessage } from '@/utils/messageGenerator';

/**
 * 메시지 생성 로직을 캡슐화한 훅
 * @returns {Object} { loading, generateMessage, getMessage, generatedMessages }
 */
export const useMessageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [generatedMessages, setGeneratedMessages] = useState({});

  const generateMessage = useCallback(async (person, season) => {
    setLoading(true);
    try {
      const message = await generateAImessage(person, season);
      const key = `${person.name}-${season}`;
      setGeneratedMessages(prev => ({
        ...prev,
        [key]: message
      }));
    } catch (error) {
      console.error('메시지 생성 실패:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getMessage = useCallback((person, season) => {
    const key = `${person.name}-${season}`;
    return generatedMessages[key] || '메시지를 생성해주세요.';
  }, [generatedMessages]);

  return { loading, generateMessage, getMessage, generatedMessages };
};
