import React ,{useState,useEffect} from 'react';
import axios, { AxiosResponse } from "axios";
//import Counter from './components/counter/Counter';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import List from './components/List/List';
import { CssBaseline, Grid } from "@mui/material";
import {getPlacesData} from './api/index'

interface place{
  place:any
}
interface places{
 places:place[]
}


function App() {

  const [places, setPlaces] =useState([])
  const [coordinates, setCordinates] =useState({})
  const [bounds, setBounds] =useState<any>(null)

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
     setCordinates({lat:position.coords.latitude , lng:position.coords.longitude})
  });
},[])//to get user location onload//pass to map az center 


  useEffect(() => {
  //     getPlacesData().then((data)=>{
  //     setPlaces(data)
  //     console.log(data)
  //  })
  }, [coordinates, bounds])


  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{width:'100%' }}>
        <Grid item xs={12} md={4}><List places={places}/></Grid>
        <Grid item xs={12} md={8}><Map setCordinates={setCordinates} setBounds={setBounds} coordinates={coordinates}/></Grid>
      </Grid>

    
    </div>
  );
}

export default App;
// const [places, setPlaces] =useState<AxiosResponse | null | void>([] as any)