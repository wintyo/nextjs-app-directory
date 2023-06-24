'use client';

import { FC, useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';

export type DynamicPageContentProps = {};

const DynamicPageContent: FC<DynamicPageContentProps> = () => {
  const params = useParams() || {};
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [id, setId] = useState<number | null>(null);
  console.log(params, isValid, id);

  // すぐチェックするとページがSSGされないのであえてuseEffectでチェックしてから表示する
  useEffect(() => {
    // paramsはSSGされた値で固定されているためlocationから取得する
    const match = location.pathname.match(/\/dynamic\/([0-9]+)/);
    if (match) {
      setId(Number(match[1]));
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  if (isValid == null) {
    return <>認証中...</>;
  }

  if (isValid === false) {
    return notFound();
  }

  return (
    <div>
      <div>動的ページ</div>
      <div>ID: {id}</div>
    </div>
  );
};

export default DynamicPageContent;
