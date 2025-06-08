import type {
	ExpressiveCodeConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "oshino.meme",
	lang: "ja",
	themeColor: {
		hue: 175,
		fixed: true,
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/JohnTitor",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg",
	name: "Yuki Okushi",
	bio: "Cutest magician in the world, and the only one who can use magic.",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/JohnTitor",
		},
		{
			name: "Mastodon",
			icon: "fa6-brands:mastodon",
			url: "https://mastodon.online/@ggwp",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/jtitor/",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:huyuumi.dev@gmail.com",
		},
	],
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
