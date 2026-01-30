import React from 'react'

export const EducationalPreview = ({resumeInfo}) => {
  const {themeColor,education}=resumeInfo;

  return (
    <div className='my-3 md:my-6'>
    <h2 className='text-center font-bold text-xs lg:text-sm mb-2'
    style={{
        color:themeColor
    }}
    >Education</h2>
    <hr style={{
        borderColor:themeColor
    }} />

    {Array.isArray(education) && education.map((education,index)=>(
        <div key={index} className='my-2 lg:my-5'>
            <h2 className='text-[10px]/4 lg:text-sm font-bold'
                style={{
                    color:themeColor
                }}
            >{education.universityName}</h2>
            <h2 className='text-[9px] lg:text-xs flex justify-between'>{education?.degree} in {education?.major}
            <span className='text-[7px] lg:text-[9px]'>{education?.startDate} To {education?.endDate}</span>
            </h2>
            <p className='text-[9px]/3 lg:text-xs md:my-2'>
                {education?.description}
            </p>
        </div>
    ))}

    </div>
  )
}
