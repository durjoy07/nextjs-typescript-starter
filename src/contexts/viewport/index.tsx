import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getWindow } from 'ssr-window';
import {
  Breakpoint,
  BREAKPOINTS,
  CONTAINERS,
} from '@root/src/themes/interface';
import { IProviderProps } from '../types/interface';
import { CONTAINER_DEFAULT_PADDING } from '@root/src/themes/interface';

type OffsetType = number | string;

export interface ILayoutDimension {
  container: Breakpoint;
  width: number;
  height: number;
  offset: OffsetType;
}

const getWindowDimension = (): Omit<
  ILayoutDimension,
  'container' | 'offset'
> => {
  const { innerWidth: width, innerHeight: height } = getWindow();
  return { width, height };
};

const getContainer = (width: number): Breakpoint => {
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'sm';
};

const INITIAL_WINDOW_WIDTH: number = getWindowDimension().width;
const INITIAL_WINDOW_HEIGHT: number = getWindowDimension().height;
const INITIAL_CONTAINER: Breakpoint = getContainer(INITIAL_WINDOW_WIDTH);

const contextDefaultValues: ILayoutDimension = {
  container: INITIAL_CONTAINER,
  width: INITIAL_WINDOW_WIDTH,
  height: INITIAL_WINDOW_HEIGHT,
  offset: 0,
};

const ViewportContext = createContext<ILayoutDimension>(contextDefaultValues);

export default function ViewportProvider({ children }: IProviderProps) {
  const { width, height } = getWindowDimension();
  const [container, setContainer] = useState(getContainer(width));
  const [windowDimension, setWindowDimension] = useState({ width, height });

  useEffect(() => {
    function handleResize(): void {
      const { width: updatedWidth, height: updatedHeight } =
        getWindowDimension();
      setWindowDimension({ width: updatedWidth, height: updatedHeight });
      setContainer(getContainer(updatedWidth));
    }

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  const containerOffset = useMemo(
    () => (width - CONTAINERS[container]) / 2,
    [container, width]
  );
  const offset: OffsetType =
    containerOffset > 0
      ? containerOffset + CONTAINER_DEFAULT_PADDING
      : `${CONTAINER_DEFAULT_PADDING}px`;

  return (
    <ViewportContext.Provider
      value={{
        container,
        width: windowDimension.width,
        height: windowDimension.height,
        offset,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
}

export const useViewport = () => {
  const { container, width, height, offset } = useContext(ViewportContext);
  return { container, width, height, offset };
};
