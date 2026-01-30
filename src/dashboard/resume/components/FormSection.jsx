
import React, { useState,lazy, Suspense } from 'react'
import {PersonalDetail} from '../components/forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid, LoaderCircle } from 'lucide-react'
const Summery=lazy(()=>import('../components/forms/Summery'));
const Experience=lazy(()=>import('../components/forms/Experience'));
const Education=lazy(()=>import('../components/forms/Education'));
const Skills=lazy(()=>import('../components/forms/Skills'));
import { NavLink, Navigate, useParams } from 'react-router-dom';
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import ThemeColor from './ThemeColor';
export const FormSection = () => {
   const {resumeInfo,setResumeInfo}=useResumeInfoContext()
  const {firstName,lastName,jobTitle,address,phone,email,themeColor,summery,experience,education,skills}=resumeInfo;
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const[enableNext,setEnableNext]=useState(false);
  const {resumeId}=useParams()
  return (
    
    <>
    <div>
      <div className="flex justify-between items-center">
        <div className='flex gap-5'>
            <NavLink to={"/dashboard"}>
          <Button><Home/></Button>
          </NavLink>
          <ThemeColor/>
         
          </div>
        <div className="flex  items-center gap-2">
          {activeFormIndex>1 &&  <Button className={`flex gap-2  `} size='sm'onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/>Prev</Button> }
         <Button className={`flex gap-2 `} size='sm'  disabled={!enableNext} onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/></Button>
        </div>
      </div>
      {/* Personal details */}
      {activeFormIndex==1?  
        <PersonalDetail enabledNext={setEnableNext} />
        :activeFormIndex==2?
        <Suspense fallback={<FormSkeketen/>}><Summery  enabledNext={setEnableNext} /></Suspense>
        :activeFormIndex==3?<Suspense fallback={<FormSkeketen/>}><Experience  enabledNext={setEnableNext} /></Suspense> 
        :activeFormIndex==4?
        <Suspense fallback={<FormSkeketen/>}><Education  enabledNext={setEnableNext} /></Suspense>
        :activeFormIndex==5?
        <Suspense fallback={<FormSkeketen/>}><Skills  enabledNext={setEnableNext} /></Suspense> :activeFormIndex==6?
        <Navigate to={`/my-resume/${resumeId}/view`} />:null}
      
        {/* summery */}
      {/* Exprience */}
      {/* Educational details */}
      {/* skills details */}
    </div>
    </>
  
  )
};

const FormSkeketen = () => {
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-gray-200 mt-5 animate-pulse'>
            {/* Header Skeleton */}
            <div className="space-y-2 mb-6">
                <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>

            {/* Form Fields Skeleton */}
            <div className='grid grid-cols-2 mt-5 gap-3'>
                {/* First Name */}
                <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                {/* Last Name */}
                <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                {/* Job Title */}
                <div className='col-span-2'>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                {/* Address */}
                <div className='col-span-2'>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                {/* Phone */}
                <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                {/* Email */}
                <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Button Skeleton */}
            <div className='mt-3 flex justify-end'>
                 <div className="h-10 w-20 bg-gray-200 rounded"></div>
            </div>
        </div>
  )
};
