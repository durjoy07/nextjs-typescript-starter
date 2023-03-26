import { IBreakpoints } from 'src/themes/interface';

export interface ISwiperProps {
  children: React.ReactNode;
  speed?: number;
  isLoop?: boolean;
  autoPlay?: boolean;
  isCenter?: boolean;
  pauseOnHover?: boolean;
  haveOffset?: boolean;
  spaceBetween?: IBreakpoints;
  showItems?: IBreakpoints;
}
