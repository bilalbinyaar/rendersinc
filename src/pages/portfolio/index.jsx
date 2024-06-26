/* eslint-disable @next/next/no-img-element */
import React from 'react';
import WorkHeader from '../../components/Work-header';
import MainLayout from '../../layouts/main';
import { WorkTwoColumn } from '../../components/Work-Two-Column';
import PageHeader from '../../components/Page-header';
import PageHeaderPortfolio from '../../components/Page-header-portfolio';

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);
  return (
    <MainLayout>
      {/* <WorkHeader
        title={{
          first: 'Architecture is a visual art,',
          second: 'and the building speak for themeselves',
        }}
        // title = "text",
        content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
      /> */}
      <PageHeaderPortfolio
        title="Portfolio"
        fullPath={[
          { id: 1, name: 'home', url: '/' },
          { id: 2, name: 'portfolio', url: '/portfolio' },
        ]}
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
