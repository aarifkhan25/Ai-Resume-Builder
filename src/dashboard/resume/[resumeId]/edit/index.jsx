import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FormSection } from '../../components/FormSection';
import { ResumePreview } from '../../components/ResumePreview';

export const EditResume = () => {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 p-5 lg:p-10 gap-10 md:gap-5 lg:gap-10'>
        {/* Form Section  */}
          <FormSection/>
        {/* Preview Section  */}
         <ResumePreview/>
    </div>
  )
}
