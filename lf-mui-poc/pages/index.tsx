import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
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
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Home: NextPage = () => {
  return (
<p>Index screen</p>
  )
}

export default Home
