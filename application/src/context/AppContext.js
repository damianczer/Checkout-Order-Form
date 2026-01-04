import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useTranslation as useI18nTranslation } from 'react-i18next';
import { createAppTheme } from '../theme/theme';
import { THEME_MODES, LANGUAGES } from '../constants/config';

const COOKIE_NAME = 'dc_checkout_order_form_settings';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

const getSettings = () => {
    try {
        const cookies = document.cookie.split(';');
        const cookie = cookies.find(c => c.trim().startsWith(`${COOKIE_NAME}=`));
        if (cookie) {
            const value = cookie.split('=')[1];
            return JSON.parse(decodeURIComponent(value));
        }
    } catch (e) {
        console.warn('Failed to parse settings cookie:', e);
    }
    return { theme: THEME_MODES.light, language: 'en' };
};

const saveSettings = (settings) => {
    try {
        const value = encodeURIComponent(JSON.stringify(settings));
        document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    } catch (e) {
        console.warn('Failed to save settings cookie:', e);
    }
};

const ThemeContext = createContext(null);
const LanguageContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(() => {
        const settings = getSettings();
        return settings.theme || THEME_MODES.light;
    });

    const toggleTheme = useCallback(() => {
        setThemeMode((prev) => {
            const newMode = prev === THEME_MODES.light ? THEME_MODES.dark : THEME_MODES.light;
            const settings = getSettings();
            saveSettings({ ...settings, theme: newMode });
            return newMode;
        });
    }, []);

    const setTheme = useCallback((mode) => {
        if (Object.values(THEME_MODES).includes(mode)) {
            const settings = getSettings();
            saveSettings({ ...settings, theme: mode });
            setThemeMode(mode);
        }
    }, []);

    const theme = useMemo(() => createAppTheme(themeMode), [themeMode]);

    const value = useMemo(
        () => ({
            themeMode,
            toggleTheme,
            setTheme,
            isDarkMode: themeMode === THEME_MODES.dark,
        }),
        [themeMode, toggleTheme, setTheme]
    );

    return (
        <ThemeContext.Provider value={value}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const LanguageProvider = ({ children }) => {
    const { t: i18nT, i18n } = useI18nTranslation();

    const language = i18n.language?.substring(0, 2) || 'en';

    const changeLanguage = useCallback((newLanguage) => {
        const isValidLanguage = LANGUAGES.some((lang) => lang.code === newLanguage);
        if (isValidLanguage) {
            i18n.changeLanguage(newLanguage);
        }
    }, [i18n]);

    const t = useCallback(
        (key) => {
            return i18nT(key);
        },
        [i18nT]
    );

    const value = useMemo(
        () => ({
            language,
            changeLanguage,
            t,
            availableLanguages: LANGUAGES,
        }),
        [language, changeLanguage, t]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const AppProvider = ({ children }) => {
    return (
        <ThemeProvider>
            <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
    );
};

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeMode must be used within a ThemeProvider');
    }
    return context;
};

export default AppProvider;
