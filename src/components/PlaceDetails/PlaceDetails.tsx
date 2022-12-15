import React from 'react'

import {Box,Button, Typography ,Card, CardMedia, CardContent, CardActionArea,CardActions, Chip } from '@mui/material';


import {StyledCard, StyledCardMedia} from './styles'

const PlaceDetails =({place}:any)=> {
  const {awards, cuisine} =place
  //console.log(place)
  return (
    <StyledCard  sx={{ margin:'20px',    }}>
      <CardActionArea>
        <StyledCardMedia
          image={place.photo && place.photo.images.large.url}
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {place.name}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
          <Typography gutterBottom variant="subtitle1" component="div">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1" component="div">{place.ranking_position}</Typography>
          </Box>
          {/* <Box display='flex' justifyContent='space-between' alignItems='center'>
         {place && awards?.map((award: { images: { small: string | undefined; }; }, i: React.Key | null | undefined)=>{
          return <Box key={i}>
            <img src={award.images.small} alt='award'/> 
            <Typography gutterBottom variant="subtitle2" component="div">{place.ranking_position}</Typography>
            </Box>
         })}
         
          </Box> */}
        
           <Box  display='flex' justifyContent='space-between' alignItems='center'>
            {place?.cuisine?.map((c:any)=>{
          return <Box sx={{backgroundColor:'lightGray', padding:'5px',marginBottom:'20px', borderRadius:'8px'}}>{c.name}</Box>
        
         })}
         
          </Box> 
          {place?.address && (
            <Typography gutterBottom variant='body1' color='HighlightText'>
              {place.address}
            </Typography>
          )}

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={()=>window.open(place.website, '_blank')}>
         website
        </Button>
      </CardActions>
    </StyledCard>
  )
}

export default PlaceDetails