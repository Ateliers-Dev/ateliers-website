import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import customConfig from '../../customConfig';

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const titleImg = require('@site/static/img/webp/ateliers-dev-main-title.webp').default;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.topContainer}>
        <div className={styles.image}>
          <img src={titleImg} alt="ateliers.dev" />
        </div>
        <div className={styles.topTitleContent}>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
          <hr />
          <div className={styles.topTitleDescription}>
            <h2>{customConfig.sitePurposeTitle}</h2>
            <p>{customConfig.sitePurposeDescription}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={customConfig.siteShortDescription}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
