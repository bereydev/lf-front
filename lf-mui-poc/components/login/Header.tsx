import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <Box sx={{ display: 'flex', marginY:'20px'}}>
      <Box
        sx={{
          position: 'relative',
          height: '90px',
          width: '260px',
        }}
      >
        <Image
          src="/logifleet-logo.png"
          alt="Logifleet logo"
          layout={'fill'}
          objectFit={'contain'}
        ></Image>
      </Box>
    </Box>
  )
}

export default Header
