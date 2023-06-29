'use client';
import { useState } from 'react';


export default function Admin() {
  const [ auth, setAuth ] = useState(
    localStorage.getItem('isAuthenticated') || false
    
  );
  return (
    <div>
      {
        auth
        ? 
        <div>
          <h1>Agenda</h1>
        </div>
        :
          window.location.href = '/login'
      } 
    </div>
  )
}