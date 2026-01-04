import React, { memo, useState, useCallback } from 'react';
import { Typography, Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { APP_CONFIG } from '../constants/config';
import { ThemeToggle, LanguageToggle } from './Header';
import { useThemeMode } from '../context/AppContext';

const footerStyles = {
    container: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'background.grey',
        py: { xs: 2, md: 3 },
        px: { xs: 2, sm: 4, md: 6 },
        zIndex: 1000,
        borderTop: 1,
        borderColor: 'divider',
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    authorLink: {
        color: 'primary.main',
        textDecoration: 'none',
    },
    separator: {
        margin: '0 10px',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: 600 },
        maxHeight: '80vh',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        outline: 'none',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
    },
    modalContent: {
        overflow: 'auto',
        flex: 1,
        pr: 1,
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        },
    },
};

const Footer = () => {
    const { t, i18n } = useTranslation();
    const { themeMode, setTheme } = useThemeMode();
    const currentYear = new Date().getFullYear();
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

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

    const handlePrivacyOpen = useCallback((e) => {
        e.preventDefault();
        setPrivacyOpen(true);
    }, []);

    const handleTermsOpen = useCallback((e) => {
        e.preventDefault();
        setTermsOpen(true);
    }, []);

    const handlePrivacyClose = useCallback(() => setPrivacyOpen(false), []);
    const handleTermsClose = useCallback(() => setTermsOpen(false), []);

    return (
        <>
            <Box
                component="footer"
                sx={footerStyles.container}
            >
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '30px',
                        rowGap: '5px'
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                        {t('footer.copyright')} {currentYear} - {t('footer.allRightsReserved')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                        {t('footer.createdBy')}{' '}
                        <Box
                            component="a"
                            href={APP_CONFIG.author.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={footerStyles.authorLink}
                        >
                            {APP_CONFIG.author.name}
                        </Box>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                        <Box
                            component="a"
                            onClick={handlePrivacyOpen}
                            sx={footerStyles.link}
                        >
                            {t('footer.privacyPolicy')}
                        </Box>
                        <Box component="span" sx={footerStyles.separator}>|</Box>
                        <Box
                            component="a"
                            onClick={handleTermsOpen}
                            sx={footerStyles.link}
                        >
                            {t('footer.termsOfService')}
                        </Box>
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {t('footer.copyright')} {currentYear}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {t('footer.allRightsReserved')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {t('footer.createdBy')}{' '}
                        <Box
                            component="a"
                            href={APP_CONFIG.author.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={footerStyles.authorLink}
                        >
                            {APP_CONFIG.author.name}
                        </Box>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        <Box
                            component="a"
                            onClick={handlePrivacyOpen}
                            sx={footerStyles.link}
                        >
                            {t('footer.privacyPolicy')}
                        </Box>
                        <Box component="span" sx={footerStyles.separator}>|</Box>
                        <Box
                            component="a"
                            onClick={handleTermsOpen}
                            sx={footerStyles.link}
                        >
                            {t('footer.termsOfService')}
                        </Box>
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                        <ThemeToggle themeMode={themeMode} onThemeChange={handleThemeChange} />
                        <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
                    </Box>
                </Box>
            </Box>

            <Modal open={privacyOpen} onClose={handlePrivacyClose}>
                <Box sx={footerStyles.modal}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h5" component="h2" fontWeight="bold">
                            {t('footer.privacyPolicy')}
                        </Typography>
                        <IconButton onClick={handlePrivacyClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={footerStyles.modalContent}>
                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                            {t('privacyPolicy.content')}
                        </Typography>
                    </Box>
                </Box>
            </Modal>

            <Modal open={termsOpen} onClose={handleTermsClose}>
                <Box sx={footerStyles.modal}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h5" component="h2" fontWeight="bold">
                            {t('footer.termsOfService')}
                        </Typography>
                        <IconButton onClick={handleTermsClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={footerStyles.modalContent}>
                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                            {t('termsOfService.content')}
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default memo(Footer);
