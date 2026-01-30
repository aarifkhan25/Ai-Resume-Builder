import {createContext, useContext, useEffect, useState} from 'react'
import dummy from '@/data/dummy';
const ResumeInfoContext=createContext();
export const ResumeInfoProvider = ({children}) => {
  const [data,setData]=useState([]);
  const [resumeInfo,setResumeInfo]=useState([]);
  useEffect(()=>{
    console.log(dummy)
setResumeInfo(dummy)
console.log(resumeInfo)
  },[])
  return (
    <ResumeInfoContext.Provider value={{data,setData,resumeInfo,setResumeInfo}}>{children}</ResumeInfoContext.Provider>
  )
}
//custom hook 
export const useResumeInfoContext=()=>{
  const context=useContext(ResumeInfoContext);
  if(context===undefined){
    throw Error ("Component must be wrapped with ResumeInfoProvider");
  }
  return context;
}
