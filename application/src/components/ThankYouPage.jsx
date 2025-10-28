import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip
} from '@mui/material';
import {
  Email as EmailIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';

const ThankYouPage = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const currentDate = new Date().toLocaleDateString();

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 2
    }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{
          p: 4,
          textAlign: 'center',
          borderRadius: 2,
          backgroundColor: '#ffffff'
        }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: 60, color: '#4caf50' }}>✅</Typography>
          </Box>

          <Typography variant="h4" component="h1" sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 1
          }}>
            Thank You for Your Purchase!
          </Typography>

          <Typography variant="subtitle1" sx={{
            color: '#666',
            mb: 3
          }}>
            Your order has been successfully processed and confirmed.
          </Typography>

          <Paper variant="outlined" sx={{
            p: 2,
            mb: 3,
            backgroundColor: '#f7f9ff',
            borderLeft: '4px solid #1976d2'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
              Order Confirmation
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">
                <strong>Order Number:</strong>
              </Typography>
              <Chip label={orderNumber} color="primary" variant="outlined" size="small" />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">
                <strong>Order Date:</strong>
              </Typography>
              <Typography variant="body2">{currentDate}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">
                <strong>Total Amount:</strong>
              </Typography>
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                $29.97
              </Typography>
            </Box>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2, mb: 3, textAlign: 'left' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
              Order Items
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText 
                  primary="DC Platform (Premium+)" 
                  secondary="Monthly subscription"
                />
                <Typography variant="body2">$14.99</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText 
                  primary="Software package" 
                  secondary="License"
                />
                <Typography variant="body2">$9.99</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText 
                  primary="Service launch" 
                  secondary="One-time service start-up"
                />
                <Typography variant="body2">$4.99</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText 
                  primary="Base Support" 
                  secondary="Included in subscription plan"
                />
                <Typography variant="body2">Free</Typography>
              </ListItem>
            </List>
          </Paper>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              What's Next?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: 32, color: '#1976d2', mb: 1 }} />
                <Typography variant="body2">
                  Confirmation email sent
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <CalendarIcon sx={{ fontSize: 32, color: '#1976d2', mb: 1 }} />
                <Typography variant="body2">
                  Service activation within 24h
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="medium"
              sx={{ px: 3, py: 1 }}
              onClick={() => window.location.reload()}
            >
              Place Another Order
            </Button>
            <Button 
              variant="outlined" 
              size="medium"
              sx={{ px: 3, py: 1 }}
            >
              Download Receipt
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3, color: '#666' }}>
            If you have any questions, please contact our support team.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ThankYouPage;
