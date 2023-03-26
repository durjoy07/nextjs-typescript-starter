import SwiperCore, { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
export { SwiperSlide as CarouselItem } from 'swiper/react';

import { ISwiperProps } from './interface';
import { IBreakpoints } from 'src/themes/interface';
import { useViewport } from 'src/contexts/viewport';
import { useIsDomReady } from 'src/contexts/dom-ready';

// Inject Autoplay
SwiperCore.use([Autoplay]);

/**
 * default values
 */
const AUTOPLAY_DELAY = 4; // in seconds;
const SPACE_BETWEEN: IBreakpoints = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 24,
};
const SHOW_ITEMS: IBreakpoints = {
  sm: 1.2,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 4,
};

/**
 * @param {object} ISwiperProps
 * @returns JSX.Element | null
 */
const Carousel = ({
  children,
  isLoop = false,
  isCenter = false,
  autoPlay = false,
  pauseOnHover = false,
  haveOffset = false,
  spaceBetween = SPACE_BETWEEN,
  showItems = SHOW_ITEMS,
  speed = 800,
}: ISwiperProps): JSX.Element | null => {
  const { container, offset } = useViewport();

  /**
   * Used for - react hydration.
   * https://nextjs.org/docs/messages/react-hydration-error
   */
  const isDomReady = useIsDomReady();

  // autoplay
  const autoplaySettings = {
    delay: AUTOPLAY_DELAY * 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: pauseOnHover,
  };

  // check isDomReady
  if (!isDomReady) return null;

  // style implement for offset layout
  let style = {};
  if (haveOffset) style = { paddingLeft: offset, paddingRight: offset };

  return (
    <div>
      <Swiper
        style={style}
        speed={speed}
        loop={isLoop}
        autoplay={autoPlay && autoplaySettings}
        centeredSlides={isCenter}
        slidesPerView={showItems[container]}
        spaceBetween={spaceBetween[container]}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
