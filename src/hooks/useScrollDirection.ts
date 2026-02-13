import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [atTop, setAtTop] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setAtTop(current < 10);
      if (current > lastScroll.current && current > 80) {
        setScrollDirection('down');
      } else if (current < lastScroll.current) {
        setScrollDirection('up');
      }
      lastScroll.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDirection, atTop };
}
