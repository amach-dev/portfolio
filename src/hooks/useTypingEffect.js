import { useEffect, useState } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect:
 * types out each string, pauses, deletes it, then moves to the next.
 */
export function useTypingEffect(words = [], { typingSpeed = 80, deletingSpeed = 40, pause = 1500 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
