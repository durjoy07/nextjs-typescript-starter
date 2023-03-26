import { IconNames } from './interface';
import { ErrorVector } from './sub-components/error';
import { NoDataVector } from './sub-components/no-data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiPlaneFill, RiTrainFill } from 'react-icons/ri';
import { IoIosRocket } from 'react-icons/io';

interface IIconStoreProps {
  iconName: IconNames;
}

/**
 * @method IconStore
 * @param {iconName} IIconStoreProps
 * @returns {JSX.Element}
 * @description this function will receive iconName and return icon JSX.Element(svg)
 */

const IconStore = ({ iconName }: IIconStoreProps) => {
  switch (iconName) {
    case 'Error Vector': {
      return <ErrorVector />;
    }
    case 'No Data Vector': {
      return <NoDataVector />;
    }
    case 'Train': {
      return <RiTrainFill />;
    }
    case 'Airplane': {
      return <RiPlaneFill />;
    }
    case 'Rocket': {
      return <IoIosRocket />;
    }
    case 'Arrow Left': {
      return <FaArrowLeft />;
    }
    case 'Arrow Right': {
      return <FaArrowRight />;
    }
    case 'Chevron Left': {
      return <FaArrowLeft />;
    }
    case 'Chevron Right': {
      return <FaArrowRight />;
    }
    default:
      /**
       * If you see an error here, it means you have
       * updated the `IconNames` type but you have not updated this switch case
       */
      const unreachable: never = iconName;
      throw `Unregistered Icon: ${unreachable}`;
  }
};

export default IconStore;
