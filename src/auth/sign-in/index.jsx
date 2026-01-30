import React from 'react'
import { SignIn } from '@clerk/clerk-react';
export default function SignInpage() {
  return (
    <div className='flex justify-center my-10 items-center'>
      <SignIn/>
    </div>
  )
}
