import React,{useState, useRef, MutableRefObject} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper , Typography , Rating} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';




interface Place{
  latitude?:number,
  longitude?:number,
  lat:number,
  name:string,
  rating:string,
  photo:string
}
interface Places{
 places:Place[]
}
const containerStyle = {
  width: '1800px',
  height: '80vh'
};
function Map({coordinates, setCordinates, setBounds, }:any, {places}:Places) {
const mapRef= useRef<any>();
function handleLoad(map:any) {
    mapRef.current = map
  }
const handelcenter =() =>{
  if (!mapRef.current) return;
  const lat1 = mapRef.current.center.lat();
  const lng1 = mapRef.current.center.lng();
  //setCordinates({lat:lat1, lng:lng1})
  
}

 return ( 
  <div>
    <LoadScript     googleMapsApiKey="AIzaSyC9JxefVeuvmoE5bU1Wn1Vlg0gokKlMxxo"  >
<GoogleMap center={coordinates} zoom={15} mapContainerStyle={containerStyle}
        onLoad={handleLoad}
       onCenterChanged	={handelcenter}
     >
 </GoogleMap>
 </LoadScript>
 </div>
)
}

export default Map


// {places?.length && places.map((place:Place, i:number) => (
//   <div
//   key={i}
//   >
//    {!matches
//       ? <LocationOnIcon color="primary" fontSize="large" />
//       : (
//         <Paper elevation={3} >
//           <Typography  variant="subtitle2" gutterBottom> {place.name}</Typography>
//           <img src={place.photo} alt={place.name}/>
//           <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
//         </Paper>
//       )} 
//   </div>
// ))}


// const { isLoaded } = useJsApiLoader({
//   id: 'google-map-script',
//   googleMapsApiKey: "AIzaSyC9JxefVeuvmoE5bU1Wn1Vlg0gokKlMxxo"
// })
// if (!isLoaded){
//   return <h1>loading....</h1>
// }