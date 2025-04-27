import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'oshino.meme',
  description: 'oshino.meme is a personal blog by Yuki Okushi.',
  href: 'https://www.oshino.meme',
  author: 'Yuki Okushi',
  locale: 'ja-JP',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/JohnTitor',
    label: 'GitHub',
  },
  {
    href: 'https://mastodon.online/@ggwp',
    label: 'Mastodon',
  },
  {
    href: 'mailto:huyuumi.dev@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Mastodon: 'lucide:link',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
