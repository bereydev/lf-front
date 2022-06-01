import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import React from 'react'
import ImgCard from '../components/ImgCard'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LoginField from '../components/LoginField'
import GradientHeader from '../components/GradientHeader'
import Footer from '../components/login/Footer'
import Header from '../components/login/Header'

function login() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      maxWidth={false}
    >
      <Header />
      <Grid container>
        <Grid item xs={12} md={6} marginTop={'5%'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              marginX: { lg: '10%', xs: '0' },
            }}
          >
            <Typography gutterBottom variant="h1">
              Welcome back <br></br> to{' '}
              <GradientHeader>Logifleet 360°</GradientHeader>
            </Typography>
            <Typography gutterBottom variant="body1">
              Log in to your Logifleet 360° account
            </Typography>

            <LoginField />

            <Typography gutterBottom variant="body2">
              Don't have an account yet?{' '}
              <Typography
                sx={{ textDecoration: 'underline', color: 'blue' }}
                display="inline"
                variant="body2"
                component="span"
              >
                Contact us!
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: { md: 'block', xs: 'none' } }}
          marginY={'auto'}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ImgCard />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  )
}

export default login
