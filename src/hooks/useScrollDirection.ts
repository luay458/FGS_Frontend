// src/hooks/useScrollDirection.ts
import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down';

const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  let lastScrollY = window.pageYOffset;

  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;
    const direction: ScrollDirection = scrollY > lastScrollY ? 'down' : 'up';
    if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
      setScrollDirection(direction);
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
