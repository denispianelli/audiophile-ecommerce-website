import * as React from 'react';
import { Button } from './button';
import Image from 'next/image';

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ children }) => {
    return (
      <Button variant={'ghost'} className="group-hover:text-primary">
        {children}
        <Image
          src={'/icons/icon-arrow-right.svg'}
          alt="icon arrow right"
          width={8}
          height={16}
        />
      </Button>
    );
  },
);
ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon };
