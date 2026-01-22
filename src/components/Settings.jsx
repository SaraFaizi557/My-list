import { TextAlignJustify } from 'lucide-react'
import { useState } from 'react'

const Settings = ({ setOpenMobileMenu, theme, setTheme }) => {
  return (
    <div className='w-full lg:px-3 lg:py-3'>
      <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
        <TextAlignJustify onClick={() => {
          setOpenMobileMenu((prev) => !prev)
        }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
        <h3 className='text-(--Text-Primary) text-xl font-bold'>Settings</h3>
      </div>
      <div className='flex flex-col pl-7 py-8'>
        <div className='flex flex-col border-b border-(--Border)/15'>
          <p className='text-(--Text-Primary)/70 text-lg font-bold'>Theme</p>
          <p className='text-(--Text-Primary)/60 text-sm ml-1 font-medium'>Choose how the app looks on your device.</p>
        </div>
        <div className='flex flex-wrap items-center gap-3 sm:pl-5 py-5'>
          <img onClick={() => {
            setTheme("system")
          }} src="/assets/system.png" alt="system mode" className={`${theme === "system" ? "border-[#f3b808]" : "border-(--Border)"} w-40 h-25 rounded-md cursor-pointer border-4`} />
          <img onClick={() => {
            setTheme("light")
          }} src="/assets/light.png" alt="light mode" className={`${theme === "light" ? "border-[#f3b808]" : "border-(--Border)"} w-40 h-25 rounded cursor-pointer border-3`} />
          <img onClick={() => {
            setTheme("dark")
          }} src="/assets/dark.png" alt="dark mode" className={`${theme === "dark" ? "border-[#f3b808]" : "border-(--Border)"} w-40 h-25 rounded-md cursor-pointer border-3`} />
        </div>
      </div>
    </div>
  )
}

export default Settings