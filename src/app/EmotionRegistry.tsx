'use client';

import { useState, FC, ReactNode } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../theme';

// 参考: https://zenn.dev/link/comments/d324b469b26670
export const EmotionRegistry: FC<{ children: ReactNode }> = ({ children }) => {
  const [emotionCache] = useState(() => {
    const emotionCache = createCache({ key: 'css', prepend: true });
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${emotionCache.key} ${Object.keys(
          emotionCache.inserted
        ).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(emotionCache.inserted).join(' '),
        }}
      />
    );
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
