import { useEffect } from 'react';

const useSmoothScroll = (id) => {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    };

    const link = document.getElementById(id);
    link.addEventListener('click', handleClick);

    return () => {
      link.removeEventListener('click', handleClick);
    };
  }, [id]);
};

export default useSmoothScroll;