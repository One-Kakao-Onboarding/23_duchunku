import { useState, useCallback } from 'react';
import { generateAImessage } from '@/utils/messageGenerator';

/**
 * 메시지 생성 로직을 캡슐화한 훅
 * @returns {Object} { loading, variationIndex, generateMessage, getMessage }
 */
export const useMessageGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [variationIndex, setVariationIndex] = useState(0);

  const generateMessage = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVariationIndex(prev => prev + 1);
      setLoading(false);
    }, 600);
  }, []);

  const getMessage = useCallback((person, season) => {
    return generateAImessage(person, season, variationIndex);
  }, [variationIndex]);

  return { loading, variationIndex, generateMessage, getMessage };
};
