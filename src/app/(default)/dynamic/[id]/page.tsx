import { FC } from 'react';
import { notFound } from 'next/navigation';

export type DynamicPageProps = {
  params: {
    id: string;
  };
};

const DynamicPage: FC<DynamicPageProps> = ({ params }) => {
  if (!/^[0-9]+/.test(params.id)) {
    return notFound();
  }

  return (
    <div>
      <div>動的ページ</div>
      <div>ID: {params.id}</div>
    </div>
  );
};

export default DynamicPage;
