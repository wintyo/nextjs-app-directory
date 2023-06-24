import { FC } from 'react';

import NotFoundPageContent from './NotFoundContent';

const NotFoundPage: FC = (props) => {
  console.log('not found:', props);
  return <NotFoundPageContent />;
};

export default NotFoundPage;
