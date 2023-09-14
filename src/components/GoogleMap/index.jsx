'use client';
import React from 'react';
import style from './map.module.scss'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function SimpleMap(){


return (
  <div className={style.map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.237462925248!2d-43.19231575234254!3d-22.975648667303485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd54579a5956b%3A0xa102deeaffcb3e3!2sPraia%20de%20Copacabana!5e0!3m2!1spt-BR!2sbr!4v1686664520217!5m2!1spt-BR!2sbr"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
)
}


// 'use client';
// import React from 'react';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// export default function SimpleMap(){
//  const API_KEY = 'AIzaSyD1EWRx9q-vedDLUjY6TdsVYfDCjrmDu0M'

//  const { isLoaded } = useJsApiLoader({
//   id: 'google-map-script',
//   googleMapsApiKey: API_KEY
// })

// const directions = {
//   lat: -23.682160,
//   lng: -46.875490
// }

// return (
//   isLoaded && 
//    <GoogleMap
//       mapContainerStyle={{ width: '100%', height: '100%' }}
//      center={ directions }
//      zoom={15}
//    >
//     <Marker
//       position={directions}
//     />
//    </GoogleMap>
// )
// }
