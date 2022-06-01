import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', marginY:'20px'}}>
      <Box
        sx={{
          position: 'relative',
          height: '40px',
          width: '230px',
        }}
      >
        <Image
          src="/swissmade-software.png"
          alt="Logifleet logo"
          layout={'fill'}
          objectFit={'contain'}
        ></Image>
      </Box>
    </Box>
  )
}

export default Footer
