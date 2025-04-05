import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * 페이지 이동시 스크롤 최상단으로 끌어와주는 컴포넌트
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}
