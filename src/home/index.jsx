import Header from '@/Layout/Header'
import { UserButton } from '@clerk/clerk-react'
import React from 'react';

import { FaRegKeyboard, FaLayerGroup, FaTerminal } from 'react-icons/fa6'; // FontAwesome 6
import { BiSolidEdit } from 'react-icons/bi'; // BoxIcons
import { HiOutlineShare, HiSparkles, HiArrowRight, HiBolt } from 'react-icons/hi2'; // Heroicons 2
import { Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
   <div>
      <Header/>
      <div className="min-h-screen bg-white text-slate-900 overflow-hidden relative selection:bg-purple-100 selection:text-purple-900 font-sans">
      
      {/* Custom CSS for simple entrance animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* --- Background Decor (Blobs) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200/40 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-blue-200/40 rounded-full blur-3xl opacity-50" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-12 lg:pt-15 lg:pb-15 px-4 mx-auto max-w-screen-xl text-center">
        
        <div className="flex flex-col items-center animate-fade-in-up">
          {/* Badge */}
       

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Build Your Resume <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
              With AI Intelligence
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg font-normal text-slate-600 lg:text-xl sm:px-16 xl:px-48 max-w-4xl mx-auto">
            Stop struggling with formatting. Effortlessly craft a standout resume that passes ATS systems using our AI-Powered Builder.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <NavLink to={"/dashboard"} className="group inline-flex justify-center items-center py-3 px-8 text-base font-semibold text-center text-white rounded-full bg-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1">
              Get Started
              <HiSparkles className="ml-2 -mr-1 w-4 h-4 group-hover:text-yellow-300 transition-colors" />
            </NavLink>
            <a href="#" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-slate-900 rounded-full border border-slate-200 hover:bg-slate-50 transition-all duration-300 hover:border-slate-300">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-10 bg-slate-50/50 backdrop-blur-sm relative z-20">
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          
          <div className="mb-16 animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <h2 className="font-bold text-4xl text-slate-900 mb-4">How it Works?</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Create your dream job application in just 3 simple, easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
                <StepCard 
                  icon={<FaRegKeyboard className="h-8 w-8 text-purple-600" />}
                  title="Write Prompt"
                  desc="Simply describe your role and experience. Our AI generates the initial structure for you."
                />
            </div>

            {/* Step 2 */}
            <div className="animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
                <StepCard 
                  icon={<BiSolidEdit className="h-8 w-8 text-blue-600" />}
                  title="Edit Your Resume"
                  desc="Use our intuitive editor to refine details, tweak the design, and add your personal touch."
                />
            </div>

            {/* Step 3 */}
            <div className="animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
                <StepCard 
                  icon={<Download className="h-8 w-8 text-pink-600" />}
                  title="Downlaod Rusume"
                  desc="Export to PDF . Start accepting interview calls immediately."
                />
            </div>
          </div>

          {/* <div className="mt-16 animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <NavLink
             to={'/auth/sign-in'}
              className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 hover:opacity-90"
            >
              Get Started Today
            </NavLink>
          </div> */}

        </div>
      </section>
    </div>

 
    </div>
  )
};
const StepCard = ({ icon, title, desc }) => {
  return (
    <a
      href="#"
      className="group relative block h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-200"
    >
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-white group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {desc}
      </p>
      
      {/* Decorative gradient blur on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </a>
  );
};


