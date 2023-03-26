import clsx from 'clsx';
import { ITag } from './interface';

export default function Tag({ label, color }: ITag) {
  const tagClasses = clsx(
    'inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-black rounded-full',
    [color]
  );
  return (
    <span role="presentation" className={tagClasses}>
      {label}
    </span>
  );
}
