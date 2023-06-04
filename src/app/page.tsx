'use client';

import { FC } from 'react';
import { Button } from '@mui/material';

const TopPage: FC = () => {
  return (
    <div>
      <div>TOPページ</div>
      <Button variant="contained">ボタン</Button>
    </div>
  );
};
// @ts-ignore コンポーネントにmeta情報を入れてみる
TopPage.meta = {
  layout: 'hogehoge',
};

export default TopPage;
