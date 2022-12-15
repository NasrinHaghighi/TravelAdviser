import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


interface place{
  place:any
}
interface places{
 places:place[]
 type?:string,
  setType:React.Dispatch<React.SetStateAction<string>>,
  rate?:string,
  setRate:React.Dispatch<React.SetStateAction<string>>
}



function List({places,type, setType, rate, setRate}:places) {
  


  return  <>

    <Box  sx={{
   p:5,
          minWidth: 300,
        }}>
    <Typography variant="h6" component="h2"> Around you </Typography>
    <FormControl  sx={{minWidth:200 ,marginRight:10}}>
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="Type"
        onChange={(e)=>setType(e.target.value)}
      >
        <MenuItem value='restaurants'>Resturant</MenuItem>
        <MenuItem value='hotels'>Hotels</MenuItem>
        <MenuItem value='attractions'>Attraction</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{minWidth:200}}>
      <InputLabel id="demo-simple-select-label">Rate</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={rate}
        label="Rate"
        onChange={(e)=>setRate(e.target.value)}
      >
        <MenuItem value={0}>All</MenuItem>
        <MenuItem value={3}>Above 3.0</MenuItem>
        <MenuItem value={4}>Above 4.0</MenuItem>
        <MenuItem value={5}>Above 4.5</MenuItem>
      </Select>
    </FormControl>
  </Box>
  <Grid container spacing={2}>
  <Grid item xs={12}>
  {places && places.map((place, i)=>{
    return <Grid key={i} xs={12}>
        <PlaceDetails place={place} />
    </Grid>
    })}
      </Grid>
   </Grid>

  </>
}

export default List