import React from 'react';
import { Typography } from "@mui/material";

const Copyright = () => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            width="100%"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#f5f5f5',
                py: 1,
                zIndex: 1000
            }}
        >
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Damian Czerwiński - All Rights Reserved.'}
        </Typography>
    );
}

export default Copyright;
