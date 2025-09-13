import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { ja } from "./languages/ja";

export type Translation = {
	[K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
	en: en,
	en_us: en,
	en_gb: en,
	en_au: en,
	ja: ja,
	ja_jp: ja,
};

export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

let forcedLocale: string | undefined;

export function setI18nLocale(lang: string | undefined): void {
	forcedLocale = lang;
}

function resolveLocale(): string {
	if (forcedLocale) return forcedLocale;
	if (typeof document !== "undefined") {
		const htmlLang = document.documentElement.getAttribute("lang");
		if (htmlLang) return htmlLang.split("-")[0];
	}
	return siteConfig.lang || "en";
}

export function i18n(key: I18nKey): string {
	const lang = resolveLocale();
	return getTranslation(lang)[key];
}
