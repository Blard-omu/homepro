import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const capitalize = (str)=> {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

