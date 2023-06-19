'use client';
import { useEffect, useState } from 'react';

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
          <button
            onClick={() => {
              localStorage.removeItem('isAuthenticated');
              setAuth(false);
              window.location.href = '/login';
            }}
              > Sair
          </button>
              
        </div>
        :
          window.location.href = '/login'
      } 
    </div>
  )
}