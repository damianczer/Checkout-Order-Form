import React, { memo, useCallback } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from 'react-i18next';
import { useThemeMode } from '../context/AppContext';
import { LANGUAGES } from '../constants/config';

export const toggleButtonStyles = {
    px: 1.5,
    py: 0.5,
    minWidth: 40,
    height: 32,
    '&.Mui-selected': {
        backgroundColor: 'primary.main',
        color: 'white',
        '&:hover': {
            backgroundColor: 'primary.dark',
        },
    },
};

export const ThemeToggle = ({ themeMode, onThemeChange, sx = {} }) => (
    <ToggleButtonGroup
        value={themeMode}
        exclusive
        onChange={onThemeChange}
        size="small"
        aria-label="theme mode"
        sx={sx}
    >
        <ToggleButton value="light" sx={toggleButtonStyles} aria-label="light mode">
            <LightModeIcon sx={{ fontSize: 18 }} />
        </ToggleButton>
        <ToggleButton value="dark" sx={toggleButtonStyles} aria-label="dark mode">
            <DarkModeIcon sx={{ fontSize: 18 }} />
        </ToggleButton>
    </ToggleButtonGroup>
);

export const LanguageToggle = ({ currentLanguage, onLanguageChange, sx = {} }) => (
    <ToggleButtonGroup
        value={currentLanguage}
        exclusive
        onChange={onLanguageChange}
        size="small"
        aria-label="language"
        sx={sx}
    >
        {LANGUAGES.map((lang) => (
            <ToggleButton
                key={lang.code}
                value={lang.code}
                sx={toggleButtonStyles}
                aria-label={lang.label}
            >
                {lang.label}
            </ToggleButton>
        ))}
    </ToggleButtonGroup>
);

const Header = () => {
    const { t, i18n } = useTranslation();
    const { themeMode, setTheme } = useThemeMode();

    const currentLanguage = i18n.language?.substring(0, 2) || 'en';

    const handleThemeChange = useCallback((event, newMode) => {
        if (newMode !== null) {
            setTheme(newMode);
        }
    }, [setTheme]);

    const handleLanguageChange = useCallback((event, newLanguage) => {
        if (newLanguage !== null) {
            i18n.changeLanguage(newLanguage);
        }
    }, [i18n]);

    return (
        <AppBar
            position="relative"
            color="default"
            elevation={0}
        >
            <Toolbar sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                <Typography
                    variant="h5"
                    color="inherit"
                    noWrap
                    sx={{ fontWeight: 'bold' }}
                >
                    {t('header.title')}
                </Typography>
                <Box
                    sx={{
                        marginLeft: 'auto',
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <ThemeToggle themeMode={themeMode} onThemeChange={handleThemeChange} />
                    <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default memo(Header);
