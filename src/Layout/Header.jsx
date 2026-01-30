import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton,useUser } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom';
export default function Header () {
  const {user,isSignedIn}=useUser();
  return (
       <div className=' px-10 h-[90px] flex justify-between items-center shadow-md'>
             <NavLink to={'/dashboard'}>
            <img src='/logo.png' className='cursor-pointer flex mix-blend-multiply w-30 md:w-35 lg:w-45 lg:h-15'  />
            </NavLink>
            {isSignedIn ?
                <div className='flex gap-2 items-center cursor-pointer'>
                    <NavLink to={'/dashboard'}>
                        <Button variant="outline" >Dashboard</Button>
                    </NavLink>
                    <UserButton />
                </div> :
                <NavLink className={"cursor-pointer"} to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </NavLink>
            }

        </div>
  )
}
