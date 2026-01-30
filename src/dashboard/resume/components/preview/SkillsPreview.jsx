import React from 'react'

export const SkillsPreview = ({resumeInfo}) => {
  const {themeColor,skills}=resumeInfo;
  return (
   <div className='lg:my-6'>
    <h2 className='text-center font-bold text-xs lg:text-sm mb-2'
    style={{
        color:themeColor
    }}
    >Skills</h2>
    <hr style={{
        borderColor:themeColor
    }} />

    <div className='grid grid-cols-2 gap-1 lg:gap-3 my-2 lg:my-4'>
 {Array.isArray(skills) &&skills.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-[9px]/3  lg:text-xs'>{skill.name}</h2>
                <div className=' h-1 lg:h-2 bg-gray-200 w-[80px] lg:w-[120px]'>
                    <div className='h-1.5 lg:h-2'
                        style={{
                            backgroundColor:themeColor,
                            width:skill?.rating*20+'%'
                        }}
                    >
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
