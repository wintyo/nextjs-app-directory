import { FC, ReactElement, cloneElement } from 'react';
import { usePathname } from 'next/navigation';
import { Tabs } from '@mui/material';
import { TabLink, TabLinkProps } from './TabLink';

export type TabsLinkProps = {
  children: ReactElement | ReactElement[];
};

export const TabsLink: FC<TabsLinkProps> = ({ children }) => {
  const pathname = usePathname();

  const childList = Array.isArray(children) ? children : [children];
  const tabLinkElements: ReactElement<TabLinkProps>[] = childList
    .filter(
      (child): child is ReactElement<TabLinkProps> => child.type === TabLink
    )
    .map((child) =>
      cloneElement(child, { key: child.props.href, value: child.props.href })
    );

  const hrefList = tabLinkElements.map((element) => element.props.href);
  console.log(pathname, hrefList);

  return <Tabs value={pathname}>{tabLinkElements}</Tabs>;
};
