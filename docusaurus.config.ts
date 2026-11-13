import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Atelier for `Yuu`',
  tagline: 'For a Better Future. －「より良い未来のために。」',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment settings for Ateliers-Dev/ateliers-website.
  url: 'https://ateliers-dev.github.io',
  baseUrl: '/ateliers-website/',
  organizationName: 'Ateliers-Dev',
  projectName: 'ateliers-website',

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
  },
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Ateliers-Dev/ateliers-website/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ateliers.dev',
      logo: {
        alt: 'Ateliers logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          label: 'About',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developmentGuidelinesSidebar',
          label: 'Development Guidelines',
          position: 'left',
        },
        {
          href: 'https://github.com/Ateliers-Dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ateliers-Dev',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/Ateliers-Dev',
            },
            {
              label: 'Website Repository',
              href: 'https://github.com/Ateliers-Dev/ateliers-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ateliers-Dev.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'cshtml', 'powershell', 'yaml', 'json', 'mermaid'],
    },
  } satisfies Preset.ThemeConfig,
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
