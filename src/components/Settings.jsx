import { TextAlignJustify } from 'lucide-react'
import React from 'react'

const Settings = ({ setOpenMobileMenu }) => {
  return (
    <div className='w-full lg:px-3 lg:py-3'>
      <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
        <TextAlignJustify onClick={() => {
          setOpenMobileMenu((prev) => !prev)
        }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
        <h3 className='text-(--Text-Primary) text-2xl font-bold'>Settings</h3>
      </div>
    </div>
  )
}

export default Settings