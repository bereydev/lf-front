import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography'

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500, padding: 1, boxShadow: '2px 3px 10px #0429421A'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="260"
        sx={{ borderRadius: '5px' , marginBottom: 2}}
        image="https://images.unsplash.com/photo-1652162539309-c96b2694f02b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2855&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Section title
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="outlined" disableElevation endIcon={<ArrowForwardIcon />}>Call to action</Button>
      </CardActions>
    </Card>
  )
}
