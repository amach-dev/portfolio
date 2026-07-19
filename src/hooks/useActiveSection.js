import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently most visible in the viewport,
 * and whether the page has been scrolled past a threshold (for navbar blur).
 */
export function useActiveSection(sectionIds = [], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);

      let current = sectionIds[0] || '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return { activeId, isScrolled };
}
