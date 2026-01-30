import Header from '@/Layout/Header';
import { Button } from '@/components/ui/button';
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import { ResumePreview } from '@/dashboard/resume/components/ResumePreview';
import { Download,ChevronLeft } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ViewResume = () => {
  const {resumeInfo,setResumeInfo}=useResumeInfoContext();
  const navigate=useNavigate()
  const handleDownload=()=>{
window.print();
navigate("/dashboard")
  }
  
  return (
    <><div id="no-print">
      <Header />

      <div className='my-5 mx-5 md:mx-20 lg:mx-36'>
        <h2 className='text-center text-xl  md:text-2xl font-medium'>
          Congrats! Your Ultimate AI generates Resume is ready ! </h2>
        <p className='text-center text-sm md:text-[16px] text-gray-400'>Now you are ready to download your resume and you can share unique
          resume url with your friends and family </p>
        <div className='flex justify-between px-5 md:px-44 my-10'>
           <Button className={"flex gap-1"}s onClick={()=>navigate("/dashboard/resume/:resumeId/edit")}><ChevronLeft/>Back</Button>
          <Button className={"flex gap-1"} onClick={handleDownload}><Download/>Download</Button>
</div>
      </div>

    </div><div className='my-5 mx-5 md:mx-20 lg:mx-36'>
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
      </>
  )
}
