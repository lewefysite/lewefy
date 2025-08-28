import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './pages/util/scrollToTop.jsx';
export default function scrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
