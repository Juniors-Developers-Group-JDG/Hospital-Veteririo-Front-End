'use client';

import { getCookie } from "@/app/actions";
import { useEffect, useMemo, useState } from "react";

const { createContext } = require("react");

export const userContext = createContext({});

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState('');

  const [token, setToken] = useState('');

  const selectedUser = useMemo(() => selectedUserName ? users.find(user => user.name === selectedUserName) : undefined , [users, selectedUserName])

  useEffect(() => {
    getCookie('token').then(cookie => setToken(cookie));
  }, [])

  useEffect(() => {
    if(token) {
      fetch('https://jdg-site-vet.onrender.com/user', { 
        method: 'GET', 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
    }
  }, [token])
  
  return (
    <userContext.Provider value={{users, selectUserByName: setSelectedUserName, selectedUser}}>
      {children}
    </userContext.Provider>
  )
}