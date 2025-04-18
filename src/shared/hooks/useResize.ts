import { useEffect, useState } from 'react';

export function useResize() {
  const [innerWidth, setInnerWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { innerWidth };
}
