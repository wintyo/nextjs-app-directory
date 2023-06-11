import './globals.css';
import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { EmotionRegistry } from './EmotionRegistry';
import { LayoutSwitcher } from './LayoutSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'App Directoryの検証',
};

console.log(`${process.env.NEXT_PUBLIC_APP_ENV} application`);

const RootLayout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <html lang="ja">
      <body className={inter.className}>
        <EmotionRegistry>
          <LayoutSwitcher>{children}</LayoutSwitcher>
        </EmotionRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
