import React from 'react'
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import {PersonalDetailPreview} from '../components/preview/PersonalDetailPreview'
import {EducationalPreview} from '../components/preview/EducationalPreview'
import {ExperiencePreview} from '../components/preview/ExperiencePreview'
import {SkillsPreview} from '../components/preview/SkillsPreview'
import {SummeryPreview} from '../components/preview/SummeryPreview'
export const ResumePreview = () => {
   const {resumeInfo,setResumeInfo}=useResumeInfoContext()
  return (
    <div className='shadow-lg h-full p-5 md:p-4 lg:p-8 border-t-[10px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summery  */}
            <SummeryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience  */}
            <ExperiencePreview resumeInfo={resumeInfo} />
        {/* Educational  */}
       <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skilss  */   }
         <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}
