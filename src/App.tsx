import React ,{useState,useEffect} from 'react';
import axios, { AxiosResponse } from "axios";
//import Counter from './components/counter/Counter';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import List from './components/List/List';
import { CssBaseline, Grid } from "@mui/material";
import {getPlacesData} from './api/index'



function App() {

  const [places, setPlaces] =useState<AxiosResponse | null | void>([] as any)
  const [coordinates, setCordinates] =useState({})
  const [bounds, setBounds] =useState<any>(coordinates)

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
     setCordinates({lat:position.coords.latitude , lng:position.coords.longitude})
  });
},[])//to get user location onload//pass to map az center 


  useEffect(() => {
    //   getPlacesData().then((data)=>{
    //   setPlaces(data)
    //   console.log(data)
    // })
  }, [bounds,coordinates])


  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{width:'100%' }}>
        <Grid item xs={12} md={4}><List /></Grid>
        <Grid item xs={12} md={8}><Map setCordinates={setCordinates} setBounds={setBounds} coordinates={coordinates}/></Grid>
      </Grid>

    
    </div>
  );
}

export default App;
