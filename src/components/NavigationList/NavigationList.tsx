import { FC } from 'react';
import { List } from '@mui/material';
import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  Tab as TabIcon,
  CropPortraitOutlined as CropPortraitOutlinedIcon,
} from '@mui/icons-material';

import { NavItem } from './subComponents/NavItem';
import { NavigationItem } from './NavigationItemType';

const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: HomeIcon, title: 'トップ', href: '/', exactPath: true },
  { icon: CropPortraitOutlinedIcon, title: 'プレーンページ', href: '/plain' },
  { icon: DescriptionIcon, title: 'ページ１', href: '/page1' },
  { icon: DescriptionIcon, title: 'ページ２', href: '/page2' },
  { icon: DescriptionIcon, title: 'ページ３', href: '/page3' },
  { icon: TabIcon, title: 'タブグループ', href: '/group' },
];

export type NavigationListProps = {};

export const NavigationList: FC<NavigationListProps> = ({}) => {
  return (
    <List>
      {NAVIGATION_ITEMS.map((navItem) => (
        <NavItem key={navItem.href} item={navItem} />
      ))}
    </List>
  );
};
