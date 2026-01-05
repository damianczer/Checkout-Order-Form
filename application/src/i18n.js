import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import pl from './locales/pl.json';

const COOKIE_NAME = 'dc_checkout_order_form_settings';

const getLanguageFromCookie = () => {
    try {
        const cookies = document.cookie.split(';');
        const cookie = cookies.find(c => c.trim().startsWith(`${COOKIE_NAME}=`));
        if (cookie) {
            const value = cookie.split('=')[1];
            const settings = JSON.parse(decodeURIComponent(value));
            return settings.language || 'en';
        }
    } catch (e) {
        console.warn('Failed to parse settings cookie:', e);
    }
    return 'en';
};

const saveLanguageToCookie = (language) => {
    try {
        const cookies = document.cookie.split(';');
        const cookie = cookies.find(c => c.trim().startsWith(`${COOKIE_NAME}=`));
        let settings = { theme: 'light', language: 'en' };

        if (cookie) {
            const value = cookie.split('=')[1];
            settings = JSON.parse(decodeURIComponent(value));
        }

        settings.language = language;
        const value = encodeURIComponent(JSON.stringify(settings));
        const maxAge = 365 * 24 * 60 * 60;
        document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
    } catch (e) {
        console.warn('Failed to save settings cookie:', e);
    }
};

const updateDocumentLanguage = (language) => {
    document.documentElement.lang = language;
};

const resources = {
    en: { translation: en },
    pl: { translation: pl }
};

const initialLanguage = getLanguageFromCookie();
updateDocumentLanguage(initialLanguage);

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: initialLanguage,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false
        }
    });

i18n.on('languageChanged', (lng) => {
    saveLanguageToCookie(lng);
    updateDocumentLanguage(lng);
});

export default i18n;
