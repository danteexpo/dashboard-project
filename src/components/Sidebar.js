import React, { useState } from 'react';

const Sidebar = ({ darkMode, setDarkMode }) => {

  const [audience, setAudience] = useState(false)

  const handleAudience = () => {
    setAudience(!audience)
  }

  const [income, setIncome] = useState(false)

  const handleIncome = () => {
    setIncome(!income)
  }

  const [promote, setPromote] = useState(false)

  const handlePromote = () => {
    setPromote(!promote)
  }

  return (
    <div className='h-screen antialiased flex justify-between w-full'>
      <div className='h-screen bg-gray-900 w-full flex flex-col'>
        <div className='px-4 py-4 flex justify-between items-center'>
          <h1 className='text-white font-bold'>LOGO</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className='px-4 space-y-2'>

          {/* HOME */}
          <div 
            className='relative flex items-center text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h2>Dashboard</h2>
          </div>

          {/* AUDIENCE */}
          <div 
            className='relative'
          >
            <div onClick={handleAudience} className='flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 items-center space-x-2 rounded-md p-2 cursor-pointer'>
              <div className='relative flex space-x-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2>Audience</h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {
              audience && 
              <div className='text-gray-400 space-y-3'>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 1</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 2</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 3</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 4</h2>
              </div>
            }
          </div>

          {/* POSTS */}
          <div
            className='relative flex justify-between items-center text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer'
          >
            <div className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h2>Posts</h2>
            </div>
            <h2 className='w-5 h-5 p-1 bg-green-400 rounded-sm text-sm leading-3 text-center text-gray-900'>8</h2>
          </div>

          {/* SCHEDULES */}
          <div
            className='relative flex justify-between items-center text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer'
          >
            <div className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h20M5 21h24a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2>Schedules</h2>
            </div>
            <div className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className='w-5 h-5 p-1 bg-pink-400 rounded-sm text-sm leading-3 text-center text-gray-900'>8</h2>
            </div>
          </div>

          {/* INCOME */}
          <div 
            className='relative'
          >
            <div onClick={handleIncome} className='flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 items-center space-x-2 rounded-md p-2 cursor-pointer'>
              <div className='relative flex space-x-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2>Income</h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {
              income && 
              <div className='text-gray-400 space-y-3'>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 1</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 2</h2>
                <div className='relative w-full'>
                  <div className='flex items-center justify-between cursor-pointer hover:text-gray-200 hover:bg-gray-800 rounded-md py-1 px-1'>
                    <h2 className='hover:text-gray-200 cursor-pointer'>Item 3</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className='flex flex-col gap-2 pt-2'>
                    <h2 className='hover:text-gray-200 cursor-pointer'>Sub Item 1</h2>
                    <h2 className='hover:text-gray-200 cursor-pointer'>Sub Item 1</h2>
                    <h2 className='hover:text-gray-200 cursor-pointer'>Sub Item 1</h2>
                  </div>
                </div>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 4</h2>
              </div>
            }
          </div>

          {/* PROMOTE */}
          <div 
            className='relative'
          >
            <div onClick={handlePromote} className='flex justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 items-center space-x-2 rounded-md p-2 cursor-pointer'>
              <div className='relative flex space-x-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <h2>Promote</h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {
              promote &&
              <div className='text-gray-400 space-y-3'>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 1</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 2</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 3</h2>
                <h2 className='hover:text-gray-200 cursor-pointer px-1'>Item 4</h2>
              </div>
            }
          </div>

          {/* MODE */}
          <div 
            onClick={() => {setDarkMode(!darkMode)}}
            className='relative flex items-center text-gray-400 hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 stroke-white dark:stroke-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2>Mode</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
