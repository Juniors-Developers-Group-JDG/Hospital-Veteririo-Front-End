'use client';
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function SimpleMap(){
 const API_KEY = 'AIzaSyD1EWRx9q-vedDLUjY6TdsVYfDCjrmDu0M'

 const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: API_KEY
})

const directions = {
  lat: -23.682160,
  lng: -46.875490
}

return (
  isLoaded && 
   <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
     center={ directions }
     zoom={15}
   >
    <Marker
      position={directions}
    />
   </GoogleMap>
)
}