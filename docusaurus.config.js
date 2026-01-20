// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Educational Robotics Book',
  tagline: 'A comprehensive guide to robotics and AI in educational environments',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://jamshaid-aziz121.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it's typically '/<project-name>/'
  baseUrl: '/hackathon_001_Phase_01/',

  // GitHub pages deployment config.
  organizationName: 'Jamshaid-aziz121', // Usually your GitHub org/user name.
  projectName: 'hackathon_001_Phase_01', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Edit this to your repo and branch.
          editUrl:
            'https://github.com/Jamshaid-aziz121/hackathon_001_Phase_01/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'Educational Robotics Book',
        logo: {
          alt: 'Robotics Book Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Modules',
            position: 'left',
            items: [
              {
                label: 'Module 1: ROS 2',
                to: '/docs/module-1-ros2/core-concepts',
              },
              {
                label: 'Module 2: Simulation',
                to: '/docs/module-2-simulation/core-concepts',
              },
              {
                label: 'Module 3: AI Perception',
                to: '/docs/module-3-ai-perception/core-concepts',
              },
              {
                label: 'Module 4: VLA Systems',
                to: '/docs/module-4-vla/core-concepts',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'All Docs',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/tutorials/end-to-end-projects',
              },
              {
                label: 'References',
                to: '/docs/references/citations',
              },
            ],
          },
          {
            href: 'https://github.com/Jamshaid-aziz121/hackathon_001_Phase_01',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'Module 1: ROS 2',
                to: '/docs/module-1-ros2/core-concepts',
              },
              {
                label: 'Module 2: Simulation',
                to: '/docs/module-2-simulation/core-concepts',
              },
              {
                label: 'Module 3: AI Perception',
                to: '/docs/module-3-ai-perception/core-concepts',
              },
              {
                label: 'Module 4: VLA Systems',
                to: '/docs/module-4-vla/core-concepts',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials/end-to-end-projects',
              },
              {
                label: 'References',
                to: '/docs/references/citations',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Jamshaid-aziz121/hackathon_001_Phase_01',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Educational Robotics Book. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;
