import * as React from 'react';
import Link from 'next/link';
import { Button } from './button';
import Image from 'next/image';

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ children }) => {
    return (
      <Link className="hidden md:inline-flex" href="/login">
        <Button variant={'ghost'}>
          {children}
          <Image
            src={'/icons/icon-arrow-right.svg'}
            alt="icon arrow right"
            width={8}
            height={16}
          />
        </Button>
      </Link>
    );
  },
);
ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon };
