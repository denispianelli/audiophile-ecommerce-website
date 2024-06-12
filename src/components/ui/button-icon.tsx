import * as React from 'react';
import { Button } from './button';
import Image from 'next/image';
import arrowRight from '../../../public/icons/icon-arrow-right.svg';

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ children }, ref) => {
    return (
      <Button
        ref={ref}
        variant={'ghost'}
        className="subtitle group-hover:text-primary"
      >
        {children}
        <Image
          src={arrowRight}
          alt="icon arrow right"
          style={{ width: '8px', height: 'auto' }}
        />
      </Button>
    );
  },
);
ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon };
