import { useState } from 'react';
import './App.css'
import { Button } from './components/ui/button'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
  import SignInpage from "./auth/sign-in/index.jsx";
import {Home} from './home/index.jsx';
import {Dashboard} from "./dashboard/index.jsx"
import {EditResume} from "./dashboard/resume/[resumeId]/edit/index.jsx";
import {ViewResume} from "./my-resume/[resumeId]/view/index.jsx"
import Layout  from './Layout/Layout.jsx';


function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    element:<Layout/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      },
    ]
  },
 ,
  {
    path:'/auth/sign-in',
    element:<SignInpage/>
  },
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  }
])

  return (
     <RouterProvider router={router}/>
  )
}

export default App
