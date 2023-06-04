import { FC } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import NextLink from 'next/link';
import { NavigationItem } from '../NavigationItemType';

export type NavItemProps = {
  /** 項目 */
  item: NavigationItem;
};

export const NavItem: FC<NavItemProps> = ({ item }) => {
  const Icon = item.icon;
  console.log(item);

  return (
    <Link
      component={NextLink}
      href={item.href}
      underline="none"
      color="inherit"
    >
      <ListItemButton>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} inset={Icon == null} />
      </ListItemButton>
    </Link>
  );
};
