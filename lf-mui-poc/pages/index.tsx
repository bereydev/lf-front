import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import ImgCard from '../components/ImgCard'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { StyledEngineProvider } from '@mui/material/styles'

import TextField from '@mui/material/TextField'
import LoginField from '../components/LoginField'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth="xl">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1, height: '100vh' }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Grid item>
              <Typography gutterBottom variant="h2" component="div">
                Welcome back <br></br> to Logifleet 360°
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="body1" component="div">
                Log in to your Logifleet 360° account
              </Typography>
            </Grid>
            <LoginField />

            <Grid item>
              <Typography gutterBottom variant="body1" component="div">
                Don't have an account yet? Contact us!
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ display: { md: 'block', xs: 'none' } }}>
            <Grid container justifyContent="center">
              <ImgCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledEngineProvider>
  )
}

export default Home
