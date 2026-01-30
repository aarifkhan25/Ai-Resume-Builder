import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { Button } from '@/components/ui/button';
import { useResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { GoogleGenAI } from '@google/genai';
export const RichTextEditor = ({onRichTextEditorChange,index,defaultValue}) => {
  const [value,setValue] = useState(defaultValue);
  const [loading,setLoading]=useState(false);
  const {resumeInfo,setResumeInfo}=useResumeInfoContext();
const PROMPT='position titile: {positionTitle} , Depends on position title give me 2-3 lines  for my experience in resume (Please do not add experince level,options and No JSON array only 2-3 lines) .'

      const GenerateSummeryFromAI=async()=>{
     
     try {
       if(!resumeInfo?.experience[index]?.title)
      {
        toast.info('Please Add Position Title');
        return ;
      }
      setLoading(true)
      const prompt=PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title);
      
      const ai = new GoogleGenAI({"Content-Type": "application/json",apiKey:import.meta.env.VITE_GOOGLE_AI_API_KEY});
      const res = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: prompt,
        });
        console.log(res)
      const obj=res.candidates[0].content.parts[0].text;
      // const po=obj.replace("<ul>","[").replace("<li>","{").replace("</li>","},").replace("</ul>","]")
      console.log(obj);
      setValue(obj);
        setLoading(false);
     } catch (error) {
      setLoading(false)
      alert(error);
      console.log("error",error);
       
     }
    }
  return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button variant="outline" size="sm" onClick={GenerateSummeryFromAI}
       
        disabled={loading}
        className="flex gap-2  text-indigo-600">
          {loading?
          <LoaderCircle className='animate-spin'/>:  
          <>
           <Brain className='h-4 w-4'/> Generate from AI 
           </>
        }
         </Button>
      </div>
      <EditorProvider>
        <Editor value={value} onChange={(e)=>{setValue(e.target.value);
          onRichTextEditorChange(e)}}>
          <Toolbar>
            <BtnBold/>
            <BtnItalic/>
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  )
}
