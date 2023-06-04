import { forwardRef } from 'react';
import NextLink from 'next/link';
import { Tab, TabProps } from '@mui/material';

export type TabLinkProps = TabProps<'a', { href: string }>;

// eslint-disable-next-line react/display-name
export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ href, ...restProps }, ref) => {
    return (
      <NextLink href={href} passHref ref={ref}>
        <Tab component="a" value={href} {...restProps} />
      </NextLink>
    );
  }
);
