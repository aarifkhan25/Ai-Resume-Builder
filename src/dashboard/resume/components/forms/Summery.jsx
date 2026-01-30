import React, { useEffect, useState } from 'react'
import { Brain, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner';
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
// import { main } from '../../../../service/AiModel';
import { GoogleGenAI } from "@google/genai";
const Prompt=`
Role: Act as a professional Resume Writer and Career Consultant.
Task: Generate professional resume summaries for the Job Title:{job Title} .
Requirements:
Create summaries for three distinct experience levels: Fresher, Mid-Level, and Experienced.
Each summary must be exactly 4 to 5 lines long.
Tone & Content:
Fresher: Focus on foundational skills, academic projects, passion for learning, and core certifications.
Mid-Level: Focus on 3-5 years of experience, specific tools/frameworks, measurable achievements, and team collaboration.
Experienced: Focus on 8+ years of experience, leadership, architectural strategy, mentoring, and high-level business impact/ROI.
Output Format: Provide the response strictly in a JSON array of objects with the following keys:
experience_level: (e.g., "Fresher", "Mid-Level", "Experienced"),
summary: (The generated text)`;
const Summery = ({enabledNext}) => {
    const [summery,setSummery]=useState();
    const [loading,setLoading]=useState(false);
   const {resumeInfo,setResumeInfo}=useResumeInfoContext();
   const [response,setResponse]=useState();
   const [skeleten,setSkeleten]=useState(false);
   const [generating,setGenerating]=useState(false)
   useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        });
        enabledNext(false
        )
    },[summery]);
    const handleSubmit=(e)=>{
e.preventDefault();
 setLoading(true);
 toast.success("Summery Updated");
 setTimeout(()=>{setLoading(false);enabledNext(true) },1000)
    }

    const GenerateSummaryFormAI=async()=>{
        setGenerating(true);
        setSkeleten(true);
try {
    const PROMPT=Prompt.replace('{job Title}',resumeInfo?.jobTitle);
const ai = new GoogleGenAI({"Content-Type": "application/json",apiKey:import.meta.env.VITE_GOOGLE_AI_API_KEY});
const res = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: PROMPT,
  });
  console.log("res",res);
const obj=res.candidates[0].content.parts[0].text;
 console.log("obj",obj);
// const newobj=obj.replace("```","").replace("json","").replace(`${"full_stack_developer_summaries:"}`,"");
// const arr=[newobj]
const data=JSON.parse(obj);
 console.log( "data",data);
// console.log(sum);
setResponse(data);
      setSkeleten(false);
  setGenerating(false);
// console.log(res.candidates[0].content.parts[0].text);
} catch (error) {
    alert(error);
    console.log("error",error);
          setSkeleten(false);
    setGenerating(false);
}

}
const handleSave=()=>{
    setLoading(true)
     toast.success("Details Updated");
     setTimeout(()=>{setLoading(false);enabledNext(true) },1000);
}


    
  return (
    <div> <div className='p-5 shadow-lg rounded-lg border-indigo-600 border-t-4 mt-5'>
        <h2 className='font-bold text-lg'>Summery</h2>
        <p>Add Summery for your job title</p>

        <form className='mt-7' onSubmit={handleSubmit} >
            <div className='flex justify-between items-end'>
                <label>Add Summery</label>
                  <Button variant="outline" size="sm" onClick={GenerateSummaryFormAI}
                       
                        disabled={generating}
                        className="flex gap-2  text-indigo-600">
                          {generating?
                          <LoaderCircle className='animate-spin'></LoaderCircle>:  
                          <>
                           <Brain className='h-4 w-4'/> Generate from AI 
                           </>
                        }
                         </Button>
            </div>
            <Textarea className="mt-5" required
            value={summery}
                defaultValue={summery?summery:resumeInfo?.summery}
            onChange={(e)=>setSummery(e.target.value)}
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit" onClick={handleSave}
                disabled={loading}>
                     {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
        </div>{
          
        }
        {skeleten ?<div className='my-5'>
    {/* Heading Skeleton */}
    <div className='h-7 w-32 bg-slate-200 rounded mb-4 animate-pulse'></div>

    <div className='grid  gap-4'>
        {/* Render 3 Skeleton Cards */}
        {[1, 2, 3].map((item) => (
            <div 
                key={item} 
                className='p-5 shadow-lg rounded-lg border border-gray-100 animate-pulse'
            >
                {/* Title Placeholder */}
                <div className='h-6 w-24 bg-slate-300 rounded mb-3'></div>
                
                {/* Summary Placeholder (2 lines for realism) */}
                <div className='h-4 w-full bg-slate-200 rounded mb-2'></div>
                <div className='h-4 w-3/4 bg-slate-200 rounded'></div>
            </div>
        ))}
    </div>
</div>: <div className='my-5'>
          {response &&  <h2 className='font-bold text-lg'>Suggestions</h2>}
            {response?.map((item,index)=>(
                <div key={index} 
                onClick={()=>setSummery(item?.summary)}
                className='p-3 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-[16px]'>Level: {item?.experience_level}</h2>
                    <p className='text-sm'>{item?.summary}</p>
                </div>
            ))}
        </div>}
        </div>
  )
}
export default  Summery;