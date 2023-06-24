'use client';

import { FC, useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';
import NextLink from 'next/link';

const TopPage: FC = () => {
  const [id, setId] = useState('');
  return (
    <div>
      <div>TOPページ</div>
      <Stack sx={{ mt: 1 }} direction="row" spacing={1}>
        <TextField
          id="dynamic-id"
          label="ID"
          value={id}
          size="small"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <Button
          LinkComponent={NextLink}
          variant="contained"
          href={`/dynamic/${id}`}
        >
          遷移
        </Button>
      </Stack>
      <Button LinkComponent={NextLink} href="/hogehoge">
        Not Foundページへ
      </Button>
    </div>
  );
};
// @ts-ignore コンポーネントにmeta情報を入れてみる
TopPage.meta = {
  layout: 'hogehoge',
};

export default TopPage;
