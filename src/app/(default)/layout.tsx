'use client';

import { FC, ReactNode } from 'react';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const DefaultLayoutEntry: FC<{ children: ReactNode }> = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default DefaultLayoutEntry;
