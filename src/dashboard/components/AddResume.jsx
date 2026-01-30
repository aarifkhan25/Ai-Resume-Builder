import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
// import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useResumeInfoContext } from '@/context/ResumeInfoContext'
export const AddResume = () => {
    const [openDialog,setOpenDialog]=useState(false);
    const [resumeTitle,setResumeTitle]=useState();
const [loading,setLoading]=useState(false)
    const  {user}=useUser();
    const navigation=useNavigate()
const {data,setData}=useResumeInfoContext();

const onCreate=()=>{
        setLoading(true)
const uuid=uuidv4();
setData([...data,{title:resumeTitle,resumeId:data.length+1,userEmail:user?.primaryEmailAddress?.emailAddress,
    userName:user?.fullName
}]);
console.log(data)
setTimeout(()=>{
navigation(`/dashboard/resume/${data.length+1}/edit`)
},1000)
    }
  return (
   <div >
        <div className='p-14 py-24 border 
        items-center flex 
        justify-center 
        rounded-lg h-[280px] w-[220px] bg-slate-200 animate-pulse
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}
         title="Create Resume"
        >
            <PlusSquare />
        </div>

        <Dialog open={openDialog}>
       
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add a title for your new resume</p>
                <Input className="my-2" 
                placeholder="Ex.Full Stack resume"
               onChange={(e)=>setResumeTitle(e.target.value)}
                />
            </DialogDescription>
            <div className='flex justify-end gap-5 cursor-pointer'>
                <Button onClick={onCreate} disable={!resumeTitle ||loading}>{loading? <Loader2 className='animate-spin'/>:"Create"}</Button>
                <Button  variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
              
            </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}
