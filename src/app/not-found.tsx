'use client';

import { FC, Fragment } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@mui/material';

import { DefaultLayout } from '~/layouts/DefaultLayout';

const NotFoundPage: FC = (props) => {
  const pathname = usePathname();

  console.log('not found:', props);
  console.log(pathname);

  const Layout = pathname.startsWith('/dynamic') ? DefaultLayout : Fragment;
  return (
    <Layout>
      <div>Not Foundだよ</div>
      <Button LinkComponent={NextLink} href="/" variant="text">
        トップに戻る
      </Button>
    </Layout>
  );
};

export default NotFoundPage;
