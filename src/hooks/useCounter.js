import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 to `end` over `duration` ms, starting only when `start` is true.
 * Uses an ease-out curve for a natural-feeling count-up.
 */
export function useCounter(end = 0, start = false, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frame;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration]);

  return value;
}
