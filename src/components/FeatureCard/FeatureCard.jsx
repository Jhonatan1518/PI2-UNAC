import React from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Avatar,
  } from '@mui/material';

export const FeatureCard = ({ title, icon, description }) => {
        return (
          <Grid item xl={3} md={6} sm={12} p={4}>
            <Card variant="outlined" sx={{ border: '1px solid #e0e0e0' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ width: '40px', height: '40px', borderRadius: '50%', background: '#indigo-100', color: 'indigo-500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {icon}
                  </Avatar>
                }
                title={title}
                sx={{ textAlign: 'center' }}
              />
              <CardContent>
                <Typography variant="body1">{description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      };

export default FeatureCard;