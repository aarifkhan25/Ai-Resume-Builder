import React, { useState,useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react'
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from 'sonner'
 const Education = ({enabledNext}) => {
  const [loading,setLoading]=useState(false);
  const {resumeInfo,setResumeInfo}=useResumeInfoContext();
const eductionField={
      universityName:'',
      degree:'',
      major:'',
      startDate:'',
      endDate:'',
      description:''
    }
  const [educationalList,setEducationalList]=useState([
    eductionField
  ]);
  useEffect(()=>{
    resumeInfo&&setEducationalList(resumeInfo?.education)
  },[]);

const handleChange=(event,index)=>{
    const newEntries=educationalList.slice();
    const {name,value}=event.target;
    newEntries[index][name]=value;
    setEducationalList(newEntries);
  };
    useEffect(()=>{
          setResumeInfo({
              ...resumeInfo,
              education:educationalList
          })
           enabledNext(false);
        
      },[educationalList]);
const AddNewEducation=()=>{
    setEducationalList([...educationalList,
     eductionField
    ])
  }
  const RemoveEducation=()=>{
    setEducationalList(educationalList=>educationalList.slice(0,-1))

  }
  const onSave=()=>{
    setLoading(true)
      toast.success("Details Updated");
          setTimeout(()=>{setLoading(false);enabledNext(true) },1000)
  }
  return (
    <div className='p-5 shadow-lg rounded-lg border-indigo-600 border-t-4 mt-5'>
    <h2 className='font-bold text-lg'>Education</h2>
    <p>Add Your educational details</p>

   <div>
      {educationalList.map((item,index)=>(
        <div>
          <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
            <div className='col-span-2'>
              <label>University Name</label>
              <Input name="universityName" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.universityName}
              />
            </div>
            <div>
              <label>Degree</label>
              <Input name="degree" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.degree} />
            </div>
            <div>
              <label>Major</label>
              <Input name="major" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.major} />
            </div>
            <div>
              <label>Start Year</label>
              <Input type="number"   min="1900" max="2100" step="1" maxlength="4"  name="startDate" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.startDate} />
            </div>
            <div>
              <label>End Year</label>
              <Input type="number"   min="1900" max="2100" step="1" maxlength="4" name="endDate" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.endDate} />
            </div>
            <div className='col-span-2'>
              <label>Description</label>
              <Textarea name="description" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.description} />
            </div>

          </div>
       
        </div>
      ))}
    </div>
    <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" className="text-primary" onClick={AddNewEducation}> + Add More Education</Button>
            <Button variant="outline"  className="text-primary" onClick={RemoveEducation}> - Remove</Button>

            </div>
           <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
    </div>
  )
};
export default Education;
