'use client';

import { FC, ReactNode } from 'react';
import { Box, Tabs } from '@mui/material';
import { TabLink } from '~/components/TabLink';

type GroupLayoutProps = {
  children: ReactNode;
};

const GroupLayout: FC<GroupLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Tabs>
        <TabLink href="/group" label="タブ１" />
        <TabLink href="/group/tab2" label="タブ２" />
        <TabLink href="/group/tab3" label="タブ３" />
      </Tabs>
      <Box sx={{ flex: '1 1 0' }}>{children}</Box>
    </Box>
  );
};

export default GroupLayout;
