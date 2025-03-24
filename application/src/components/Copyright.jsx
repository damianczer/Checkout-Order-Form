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
                mt: { xs: '10px', lg: '20px' },
                pl: { xs: '25px', lg: '20px' },
                pb: { xs: '10px', lg: '20px' }           
            }}
        >
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Damian Czerwiński - All Rights Reserved.'}
        </Typography>
    );
}

export default Copyright;
