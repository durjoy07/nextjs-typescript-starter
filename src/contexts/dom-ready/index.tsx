import { createContext, useContext, useEffect, useState } from 'react';
import { IProviderProps } from '../types/interface';

type DomReady = boolean;

const contextDefaultValue: DomReady = false;

const DomReadyContext = createContext<DomReady>(contextDefaultValue);

export default function IsDomReadyProvider({ children }: IProviderProps) {
  const [isDomReady, setIsDomReady] = useState<DomReady>(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return (
    <DomReadyContext.Provider value={isDomReady}>
      {children}
    </DomReadyContext.Provider>
  );
}

export const useIsDomReady = () => {
  const isDomReady = useContext(DomReadyContext);
  return isDomReady;
};
