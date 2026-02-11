import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt-br";
import "dayjs/locale/en";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

const languageToDayjsLocale: Record<string, string> = {
	"pt-BR": "pt-br",
	"en-US": "en",
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "pt-BR",
		interpolation: {
			escapeValue: false,
		},

		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
			lookupLocalStorage: "i18nextLng",
		},

		react: {
			useSuspense: true,
		},
	})
	.then(() => {
		const dayjsLocale = languageToDayjsLocale[i18n.language] || "pt-br";
		dayjs.locale(dayjsLocale);
	});

i18n.on("languageChanged", (lng) => {
	const dayjsLocale = languageToDayjsLocale[lng] || "pt-br";
	dayjs.locale(dayjsLocale);
});

export const datetime = dayjs;
export const t = i18n.t.bind(i18n);
