import { FC } from 'react';

export type NavigationItem = {
  /** アイコン */
  icon?: FC;
  /** タイトル */
  title: string;
  /** 遷移先 */
  href: string;
};
