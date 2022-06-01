import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const EmailField = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '5px 0 0 5px',
    border: 'none',
    boxShadow: '2px 3px 10px #0429421A',
  },
}))

function LoginField() {
  return (
    <Grid container marginY="10px">
      <Grid item xs={9}>
        <EmailField
          fullWidth
          placeholder="Enter your username or email address"
          id="outlined-basic"
          variant="outlined"
          hiddenLabel
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          disableElevation
          sx={{
            height: '100%',
            borderRadius: '0 5px 5px 0',
            boxShadow: '2px 3px 10px #0429421A',
          }}
          color="primary"
        >
          Log In
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginField
