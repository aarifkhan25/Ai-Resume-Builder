import React from 'react'

export const PersonalDetailPreview = ({resumeInfo}) => {
const {firstName,lastName,jobTitle,address,phone,email,themeColor,summery,experience,education,skills}=resumeInfo;
  return (
    <div>
        <h2 className='font-bold text-[16px] md:text-xs md:text-[18px] lg:text-xl text-center'
        style={{
            color:themeColor
        }}
        >
            {firstName} {lastName}</h2>
        <h2 className='text-center text-[11px] md:text-[11px] lg:text-sm font-medium capitalize'
       >{jobTitle}</h2>
       <h2 className='text-center font-normal text-[8px] md:text-[8px] lg:text-xs uppercase'
        style={{
            color:themeColor
        }}>{address}</h2>

        <div className='flex justify-between'>
            <h2 className='font-normal text-[8px] md:text-[7px] lg:text-xs'
             style={{
                color:themeColor
            }}>{resumeInfo?.phone}</h2>
            <h2 className='font-normal text-[8px] md:text-[7px] lg:text-xs'
             style={{
                color:themeColor
            }}>{resumeInfo?.email}</h2>

        </div>
        <hr className='border-[1.5px] my-2'
        style={{
            borderColor:themeColor
        }}
        />
    </div>
  )
}
