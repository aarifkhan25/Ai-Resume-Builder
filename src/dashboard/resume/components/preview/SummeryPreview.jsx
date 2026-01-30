import React from 'react'

export const SummeryPreview = ({resumeInfo}) => {
  const {summery}=resumeInfo;
  return (
     <p className='text-[9px]/3  lg:text-xs'>
        {summery}
    </p>
  )
}
