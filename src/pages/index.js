import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''} flex`}>
      <div className='w-64'>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <h1>Hello</h1>
    </div>
  )
}
