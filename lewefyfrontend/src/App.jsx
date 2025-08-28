import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import scrolltotop from './util/scrolltotop.jsx';
export default function scrolltotop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
