import type { Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://www.oshino.meme', // replace this with your deployed domain
  author: 'Yuki Okushi',
  desc: '"I\'m not going to save you, just lending a hand. Only you can save yourself."',
  title: 'oshino.meme',
  ogImage: 'og.jpg',
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ['en-EN']; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/JohnTitor',
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jtitor/',
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/sn0bbery',
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:jtitor@skiff.com',
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
  {
    name: 'Mastodon',
    href: 'https://mastodon.online/@ggwp',
    linkTitle: `${SITE.author} on Mastodon`,
    active: true,
  },
];
