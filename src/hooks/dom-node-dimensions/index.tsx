import { useEffect, useState, useRef } from 'react';

interface IDomNodeDimensions {
  ref: React.RefObject<HTMLDivElement>;
  width: number | undefined;
  height: number | undefined;
}

export function useDomNodeDimensions(): IDomNodeDimensions {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const current = ref.current;

    if (current) {
      setWidth(current.offsetWidth);
      setHeight(current.offsetHeight);
    }

    function handleResize() {
      if (current) {
        setWidth(current.offsetWidth);
        setHeight(current.offsetHeight);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width, height, ref };
}
