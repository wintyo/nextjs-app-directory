'use client';

import { FC, ReactNode } from 'react';
import { DefaultLayout } from '~/layouts/DefaultLayout';

export const LayoutSwitcher: FC<{ children: ReactNode }> = (props) => {
  console.log(props);
  const { children } = props;
  // できれば全体のレイアウトを切り替える手段が欲しいけど、できなそう。。
  const Layout = DefaultLayout;
  return <Layout>{children}</Layout>;
};
