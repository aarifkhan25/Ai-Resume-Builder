import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-react'
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import {RichTextEditor} from '../RichTextEditor.jsx';
import { toast } from 'sonner';
const Experience = ({enabledNext}) => {
const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',

}

  const [experinceList,setExperinceList]=useState([formField]);
    const {resumeInfo,setResumeInfo}=useResumeInfoContext();
    const [loading,setLoading]=useState(false);


     const handleChange=(index,event)=>{
        
       const newEntries=experinceList.slice();
       console.log(newEntries);
       const {name,value}=event.target;
       newEntries[index][name]=value;
       console.log(newEntries)
       setExperinceList(newEntries)

    };
  useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            experience:experinceList
        });
         enabledNext(false
        )
      
    },[experinceList]);
    const handleSubmit=()=>{
setLoading(true)
 toast.success("Details Updated");
 setTimeout(()=>{setLoading(false);enabledNext(true) },1000);
    }
    const AddNewExprience=()=>{
setExperinceList([...experinceList,formField])
    }
    const RemoveNewExprience=()=>{
setExperinceList(experinceList=>experinceList.slice(0,-1));
    }

 

    const handleRichTextEditor=(e,name,index)=>{
const newEntries=experinceList.slice();
       newEntries[index][name]=e.target.value;
       console.log(newEntries)
       setExperinceList(newEntries)
    }
       useEffect(()=>{
           resumeInfo&&setExperinceList(resumeInfo?.experience)
         },[]);
  return (
    <div>
        <div className='p-5 md:p-2 lg:p-5 shadow-lg rounded-lg border-indigo-600 border-t-4 mt-5'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
            {experinceList?.map((item,index)=>(
                <div key={index}>
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <label className='text-xs'>Position Title</label>
                            <Input name="title" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.title}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Company Name</label>
                            <Input name="companyName" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.companyName} />
                        </div>
                        <div>
                            <label className='text-xs'>City</label>
                            <Input name="city" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.city}/>
                        </div>
                        <div>
                            <label className='text-xs'>State</label>
                            <Input name="state" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.state}
                             />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input type="date"  
                            name="startDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.startDate}/>
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input type="date" name="endDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.endDate}
                            />
                        </div>
                        <div className='col-span-2'>
        
                           <RichTextEditor
                            index={index}
                           defaultValue={item?.workSummery}
                           onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}
                             />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-between md:justify-around lg:justify-between'>
            <div className='flex gap-2 md:gap-1 lg:gap-2'>
            <Button variant="outline"   className="text-primary" onClick={AddNewExprience}> + Add More Experience</Button>
            <Button variant="outline"  className="text-primary" onClick={RemoveNewExprience}> - Remove</Button>

            </div>
            <Button disabled={loading} onClick={()=>handleSubmit()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
        </div>
    </div>
  )
};
export default Experience;