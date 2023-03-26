/**
 * WARNING: If you make changes to the keys array/BREAKPOINTS object then,
 * please update the 'screens' in tailwind.config.
 */
const keys = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export type Breakpoint = (typeof keys)[number];

export type IBreakpoints = {
  [key in Breakpoint]: number;
};

/**
 * Warning: this breakpoints are same as tailwind config files.
 */
export const BREAKPOINTS: IBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
};

/**
 * Warning: Please check your Container component.
 */
export const CONTAINER_DEFAULT_PADDING: number = 16;

const TOTAL_PADDING = CONTAINER_DEFAULT_PADDING * 2;
export const CONTAINERS: IBreakpoints = {
  sm: BREAKPOINTS.sm + TOTAL_PADDING,
  md: BREAKPOINTS.md + TOTAL_PADDING,
  lg: BREAKPOINTS.lg + TOTAL_PADDING,
  xl: BREAKPOINTS.xl + TOTAL_PADDING,
  '2xl': 1320 + TOTAL_PADDING,
};
