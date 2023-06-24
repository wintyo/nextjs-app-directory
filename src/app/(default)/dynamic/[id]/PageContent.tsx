'use client';

import { FC, useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';

export type DynamicPageContentProps = {};

const DynamicPageContent: FC<DynamicPageContentProps> = () => {
  const params = useParams() || {};
  const [isValid, setIsValid] = useState<boolean | null>(null);
  console.log(params, isValid);

  // すぐチェックするとページがSSGされないのであえてuseEffectでチェックしてから表示する
  useEffect(() => {
    const isValid = /^[0-9]+$/.test(params.id as string);
    setIsValid(isValid);
  }, [params.id]);

  if (isValid == null) {
    return <>認証中...</>;
  }

  if (isValid === false) {
    return notFound();
  }

  return (
    <div>
      <div>動的ページ</div>
      <div>ID: {params.id}</div>
    </div>
  );
};

export default DynamicPageContent;
