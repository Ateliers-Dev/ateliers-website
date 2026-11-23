import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: string;
  linkTo: string;
  linkLabel: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ateliers の概要',
    emoji: '🧭',
    description: '人間と AI が協力して技術を探究する、Ateliers の活動を紹介します。',
    linkTo: '/docs/about/overview',
    linkLabel: '概要を読む',
  },
  {
    title: '理念と目標',
    emoji: '🤝',
    description: '開発理念、開発目標、そして「自由に創り、学び、分かち合う」活動姿勢を紹介します。',
    linkTo: '/docs/development-guidelines/philosophy',
    linkLabel: '理念と目標を読む',
  },
  {
    title: 'Development Guidelines',
    emoji: '📐',
    description: 'Ateliers-Dev のプロジェクトで共通する開発方針、規約、運用ルールを掲載しています。',
    linkTo: '/docs/development-guidelines/website-management',
    linkLabel: 'サイト運営方針を読む',
  },
];

function Feature({title, emoji, description, linkTo, linkLabel}: FeatureItem): ReactNode {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={linkTo}>{linkLabel} →</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
