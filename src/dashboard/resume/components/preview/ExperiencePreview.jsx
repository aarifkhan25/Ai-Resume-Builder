import React from 'react'

export const ExperiencePreview = ({resumeInfo}) => {
  const {firstName,lastName,jobTitle,address,phone,email,themeColor,summery,experience,education,skills}=resumeInfo;
  console.log(resumeInfo)
  return (
     <div className='my-3  lg:my-6'>
        <h2 className='text-center font-bold text-xs  lg:text-sm mb-2'
        style={{
            color:themeColor
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor:themeColor
        }} />

        {experience?.map((experience,index)=>{
         return   <div key={index} className='my-2 md:my-1 lg:my-5'>
                <h2 className='text-[11px] lg:text-sm font-bold'
                 style={{
                    color:themeColor
                }}>{experience?.title}</h2>
                <h2 className=' text-[9px] lg:text-xs flex justify-between'>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span className='text-[7px] lg:text-[9px]'>{experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
                <div className='text-[9px]/3  lg:text-xs  lg:my-2' dangerouslySetInnerHTML={{__html:experience?.workSummery}} />
            </div>
})}
    </div>
  )
}
