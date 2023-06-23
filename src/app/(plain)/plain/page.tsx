'use client';

import { FC } from 'react';
import { Button } from '@mui/material';
import NextLink from 'next/link';

const PlainPage: FC = () => {
  return (
    <div>
      <div>プレーンTOPページ</div>
      <Button LinkComponent={NextLink} variant="contained" href="/">
        トップページへ
      </Button>
    </div>
  );
};

export default PlainPage;
