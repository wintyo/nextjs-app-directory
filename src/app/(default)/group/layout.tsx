'use client';

import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { TabLink } from '~/components/TabLink';
import { TabsLink } from '~/components/TabsLink';

type GroupLayoutProps = {
  children: ReactNode;
};

const GroupLayout: FC<GroupLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TabsLink>
        <TabLink href="/group" label="タブトップ" />
        <TabLink href="/group/tab1" label="タブ１" />
        <TabLink href="/group/tab2" label="タブ２" />
        <TabLink href="/group/tab3" label="タブ３" />
      </TabsLink>
      <Box sx={{ flex: '1 1 0', p: 1 }}>{children}</Box>
    </Box>
  );
};

export default GroupLayout;
