import { FC, ReactNode } from 'react';
import { Box, AppBar, Toolbar, Typography, Drawer } from '@mui/material';

export type DefaultLayoutProps = {
  children: ReactNode;
};

const NAVIGATION_WIDTH = 280;

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography>App Directoryの検証</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open
        keepMounted
        sx={(theme) => ({
          width: NAVIGATION_WIDTH,
          '& .MuiDrawer-paper': {
            width: NAVIGATION_WIDTH,
          },
        })}
      >
        <Toolbar />
        <div>ドロワー</div>
      </Drawer>
      <Box sx={{ flex: '1 1 0', display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        <Box sx={{ flex: '1 1 0', padding: 2, overflow: 'hidden' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
