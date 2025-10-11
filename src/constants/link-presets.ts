import I18nKey from "@i18n/i18nKey";
import { getTranslation, i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";
import { getLocalizedUrl } from "@/utils/url-utils";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: i18n(I18nKey.home),
		url: "/",
	},
	[LinkPreset.About]: {
		name: i18n(I18nKey.about),
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
	},
	[LinkPreset.Sponsors]: {
		name: i18n(I18nKey.sponsors),
		url: "/sponsors/",
	},
};

export function getLocalizedLinkPresets(locale?: string): {
	[key in LinkPreset]: NavBarLink;
} {
	const lang = locale?.toLowerCase() || undefined;
	const t = lang ? getTranslation(lang) : undefined;
	return {
		[LinkPreset.Home]: {
			name: t ? t[I18nKey.home] : i18n(I18nKey.home),
			url: getLocalizedUrl("/", locale),
		},
		[LinkPreset.About]: {
			name: t ? t[I18nKey.about] : i18n(I18nKey.about),
			url: getLocalizedUrl("/about/", locale),
		},
		[LinkPreset.Archive]: {
			name: t ? t[I18nKey.archive] : i18n(I18nKey.archive),
			url: getLocalizedUrl("/archive/", locale),
		},
		[LinkPreset.Sponsors]: {
			name: t ? t[I18nKey.sponsors] : i18n(I18nKey.sponsors),
			url: getLocalizedUrl("/sponsors/", locale),
		},
	};
}
