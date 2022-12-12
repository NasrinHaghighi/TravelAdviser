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
  useEffect(() => {
    // getPlacesData().then((data)=>{
    //   setPlaces(data)
    //   console.log(data)
    // })
  }, [])
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{width:'100%' }}>
        <Grid item xs={12} md={4}><List /></Grid>
        <Grid item xs={12} md={8}><Map /></Grid>
      </Grid>

    
    </div>
  );
}

export default App;
