import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

/**
 * Custom cursor for desktop/fine-pointer devices only.
 * A small dot tracks the pointer exactly; a larger ring trails with easing,
 * and both scale up over interactive elements.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(isFinePointer && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let frame;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }

    function onOver(e) {
      const interactive = e.target.closest('a, button, input, textarea, [data-cursor-hover]');
      if (ringRef.current) {
        ringRef.current.classList.toggle(styles.hover, Boolean(interactive));
      }
    }

    function animate() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      frame = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
