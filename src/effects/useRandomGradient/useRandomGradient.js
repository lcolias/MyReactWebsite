import { useEffect, useState } from 'react';

const useRandomGradient = (location) => { 
  
  const [gradient, setGradient] = useState('');

  const generateRandomGradient = () => {
    const colors = [];
    for (let i = 0; i < 2; i++) {
      const color = Math.floor(Math.random() * 16777215).toString(16);
      colors.push(`#${color}`);
    }
    setGradient(`linear-gradient(to right, ${colors.join(', ')})`);
  };

  useEffect(() => {
    generateRandomGradient();
  }, [location]);

  return gradient;
};


export default useRandomGradient;