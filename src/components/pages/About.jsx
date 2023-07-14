import React from 'react'
import { Grid } from '@mui/material'

import PageHeader from '../helpers/PageHeader'
import image from '../../assests/about.webp'

const About = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={'About Us'} sx={{mb: 4}}/>
    </Grid>
  )
}

export default About