import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

const usePageDecoration = (bg: string) => {
  const [setBg] = useOutletContext();

  useEffect(() => {
    setBg(bg);
  }, []);
};

export default usePageDecoration;
