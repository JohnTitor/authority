import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
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
};

export function getLocalizedLinkPresets(locale?: string): { [key in LinkPreset]: NavBarLink } {
	return {
		[LinkPreset.Home]: {
			name: i18n(I18nKey.home),
			url: getLocalizedUrl("/", locale),
		},
		[LinkPreset.About]: {
			name: i18n(I18nKey.about),
			url: getLocalizedUrl("/about/", locale),
		},
		[LinkPreset.Archive]: {
			name: i18n(I18nKey.archive),
			url: getLocalizedUrl("/archive/", locale),
		},
	};
}
