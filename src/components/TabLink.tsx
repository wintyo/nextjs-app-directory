import { forwardRef } from 'react';
import NextLink from 'next/link';
import { Tab, TabProps } from '@mui/material';

export type TabLinkProps = TabProps<'div', { href: string }>;

// eslint-disable-next-line react/display-name
export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ href, ...restProps }, ref) => {
    return (
      <NextLink href={href} passHref ref={ref}>
        <Tab {...restProps} />
      </NextLink>
    );
  }
);
