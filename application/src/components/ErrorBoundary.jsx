import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });

        if (process.env.NODE_ENV === 'development') {
            console.error('Error caught by ErrorBoundary:', error, errorInfo);
        }
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                        padding: 3,
                        textAlign: 'center',
                    }}
                >
                    <ErrorOutlineIcon
                        sx={{
                            fontSize: 80,
                            color: '#d32f2f',
                            mb: 3,
                        }}
                    />
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            mb: 2,
                        }}
                    >
                        Something went wrong
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#666',
                            mb: 4,
                            maxWidth: 400,
                        }}
                    >
                        We're sorry, but something unexpected happened. Please try refreshing the page.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={this.handleReload}
                        sx={{ px: 4, py: 1.5 }}
                    >
                        Refresh Page
                    </Button>
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <Box
                            sx={{
                                mt: 4,
                                p: 2,
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                maxWidth: 600,
                                width: '100%',
                                textAlign: 'left',
                                overflow: 'auto',
                            }}
                        >
                            <Typography variant="body2" color="error" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
                                {this.state.error.toString()}
                            </Typography>
                            <Typography variant="caption" component="pre" sx={{ mt: 1, whiteSpace: 'pre-wrap', color: '#999' }}>
                                {this.state.errorInfo?.componentStack}
                            </Typography>
                        </Box>
                    )}
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
