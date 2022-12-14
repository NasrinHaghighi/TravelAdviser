import React,{useState, useRef, useCallback} from 'react'
import GoogleMapReact from 'google-map-react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { current } from '@reduxjs/toolkit';

const containerStyle = {
  width: '1800px',
  height: '80vh'
};

function Map({coordinates, setCordinates, setBounds}:any) {


  const [mapref, setMapRef] = React.useState(null);


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC9JxefVeuvmoE5bU1Wn1Vlg0gokKlMxxo"
  })
  if (!isLoaded){
    return <h1>loading....</h1>
  }

  function handleLoad(map:any) {
    //setMapRef(map);
  }
const handelcenter =() =>{

}

 return ( 
  <div>
    <GoogleMap center={coordinates} zoom={15} mapContainerStyle={containerStyle}
        onLoad={handleLoad}
        onCenterChanged	={handelcenter}
     
    >

    </GoogleMap>
      
 </div>
)
}

export default Map