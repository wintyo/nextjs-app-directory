import { FC } from 'react';
import PageContent from './PageContent';

export const generateStaticParams = () => {
  return [{ id: '_id' }];
};

export type DynamicPageProps = {
  params: {
    id: string;
  };
};

const DynamicPage: FC<DynamicPageProps> = (props) => {
  return <PageContent />;
};

export default DynamicPage;
