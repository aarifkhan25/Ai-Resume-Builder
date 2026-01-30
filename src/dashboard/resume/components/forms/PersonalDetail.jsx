import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
export const PersonalDetail = ({enabledNext}) => {
   const {resumeInfo,setResumeInfo}=useResumeInfoContext();
       const [loading,setLoading]=useState(false);
  //  const [personalDetails,setPersonalDetails]=useState([{firstName:"",lastName:"",jobTitle:"",address:"",phone:"",email:""}]);

   const handleInputChange=(e)=>{
    enabledNext(false)
    const {name,value}=e.target
    setResumeInfo((prev)=>({...prev,[name]:value}))
   }
   
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(resumeInfo)
      setLoading(true)
    // enabledNext(true)
    toast.success("Details Updated");
     setTimeout(()=>{setLoading(false);enabledNext(true) },1000)
   }
  return (
      <div className='p-5 shadow-lg rounded-lg border-indigo-600 border-t-4 mt-5'>
        <h2 className='font-bold text-lg'>Personal Detail</h2>
        <p>Get Started with the basic information</p>

        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input name="lastName" required onChange={handleInputChange} 
                    defaultValue={resumeInfo?.lastName} />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input name="jobTitle" required 
                    defaultValue={resumeInfo?.jobTitle}
                    onChange={handleInputChange}  />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input name="address" required 
                    defaultValue={resumeInfo?.address}
                    onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input name="phone" required 
                    defaultValue={resumeInfo?.phone}
                    onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input name="email" required 
                    defaultValue={resumeInfo?.email}
                    onChange={handleInputChange}  />
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
               <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
    </div>
  )
};
