import React ,{useState,useEffect} from 'react';
import axios, { AxiosResponse } from "axios";
//import Counter from './components/counter/Counter';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import List from './components/List/List';
import { CssBaseline, Grid } from "@mui/material";
import {getPlacesData} from './api/index'





function App() {

  const [places, setPlaces] =useState([])
  const [fillteredPlaces, setFilterPlaces] =useState([])
  const [coordinates, setCordinates] =useState( { })
  const [bounds, setBounds] =useState<any>(null)
  const [type, setType] =useState<string>('restaurants')
  const [rate, setRate] =useState<string>('')
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
     setCordinates({lat:position.coords.latitude , lng:position.coords.longitude})
  });
},[])//to get user location onload//pass to map az center 


useEffect(() => {
const f=places.filter((p:any)=>{
  return p.rating> rate
})
setFilterPlaces(f)
}, [rate])

//console.log(fillteredPlaces)

  useEffect(() => {
      // getPlacesData(type).then((data)=>{
      // setPlaces(data)
      // setFilterPlaces([])
      // console.log(data)
  // })
  }, [type, coordinates, bounds])


  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{width:'100%' }}>
        <Grid item xs={12} md={4}><List 
        places={fillteredPlaces.length ? fillteredPlaces :places} type={type} setType={setType} rate={rate} setRate={setRate}/></Grid>
        <Grid item xs={12} md={8}><Map setCordinates={setCordinates} setBounds={setBounds} coordinates={coordinates} 
        places={fillteredPlaces.length ? fillteredPlaces :places}/></Grid>
      </Grid>

    
    </div>
  );
}

export default App;
// const [places, setPlaces] =useState<AxiosResponse | null | void>([] as any)