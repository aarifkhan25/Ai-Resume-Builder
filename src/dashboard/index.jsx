import {useEffect} from 'react'
import {AddResume} from './components/AddResume.jsx'
import { useUser } from '@clerk/clerk-react'
import { useResumeInfoContext } from '@/context/ResumeInfoContext.jsx';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Home } from 'lucide-react';
export const Dashboard = () => {
const {user}=useUser();
const {data,setData}=useResumeInfoContext();


  return (
    <div>
      <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid justify-center items-center  gap-5
      mt-10
      '>
        <AddResume/>
        {/* <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div> */}
      </div>
    </div>
    <div className="flex justify-center cursor-pointer">
      <NavLink to={"/"}>
         <button className="group relative inline-block h-[3.5em] w-[10em] cursor-pointer rounded-[7px] bg-indigo-600 p-[1em] text-center text-[13px] text-white shadow-[0px_14px_56px_-11px_#1875FF] transition-all duration-[400ms] align-middle hover:bg-[#1565DC]">
  <span className="relative inline-block cursor-pointer transition-all duration-[400ms] after:absolute after:right-[-20px] after:top-0 after:content-['Home'] after:opacity-0 after:transition-all after:duration-[700ms] group-hover:pr-[3.55em] group-hover:after:right-0 group-hover:after:opacity-100">
    Go  To ⮞
  </span>
</button>
          </NavLink>
    </div>
    </div>
  )
}
