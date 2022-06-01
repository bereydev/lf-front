import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

const CustomTypo = styled(Typography)(() => ({
  fontSize: '3.3rem',
  fontWeight: '800',
  background:
    'transparent linear-gradient(259deg, #0779C4 0%, #57A567 100%) 0% 0% no-repeat padding-box;',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
})) as typeof Typography

type Props = {
  children?: string
}

function GradientHeader({ children }: Props) {
  return <CustomTypo display="inline" component="span">{children}</CustomTypo>
}

export default GradientHeader
