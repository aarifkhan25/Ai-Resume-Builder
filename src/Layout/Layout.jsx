import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import  Header  from './Header.jsx';
import { useUser } from '@clerk/clerk-react';
import { Toaster } from 'sonner';
export default function Layout () {
  const {user,isLoaded,isSignedIn}=useUser();
  if(!isSignedIn && isLoaded){
    return  <Navigate to="/auth/sign-in"/>
  }
  
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster/>
    </div>
  )
}
