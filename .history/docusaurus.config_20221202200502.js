// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VelocityBloc',
  tagline: 'Minimalist and Easy State Management Inspired from Dart Generics.',
  url: 'https://velocitybloc.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/main_logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codersangam', // Usually your GitHub org/user name.
  projectName: 'velocity_bloc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codersangam/velocity_bloc_docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codersangam/velocity_bloc_docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'VelocityBloc',
        logo: {
          alt: 'My Site Logo',
          src: 'img/main_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'install',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/codersangam/velocity_bloc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {

        style: 'dark',
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'img/main_logo.png',
          href: 'https://opensource.fb.com',
          width: 160,
          height: 51,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/install',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/codersangam/velocity_bloc',
              },
              {
                label: 'Examples',
                href: 'https://github.com/codersangam/velocity_bloc/tree/main/example'
              },
              {
                label: 'Demo App',
                href: 'https://demo.velocitybloc.dev'
              }
            ],
          },
          {
            title: 'Developer',
            items: [
              {
                label: 'Sangam Singh (Ronnie)',
                href: 'https://codersangam.com',
              },
              {
                label: 'Github',
                href: 'https://github.com/codersangam',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/codersangam',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/codersangam',
              },
            ],
          },
          // {
          //   title: 'Contributor',
          //   items: [
          //     {
          //       label: 'Sangam Singh (Ronnie)',
          //       href: 'https://codersangam.com',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VelocityBloc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
