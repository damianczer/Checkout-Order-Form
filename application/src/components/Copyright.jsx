import { Typography } from "@mui/material";

const Copyright = () => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 3, mx: '30px' }}
        >
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Damian Czerwiński - All Rights Reserved.'}
        </Typography>
    );
}

export default Copyright;
