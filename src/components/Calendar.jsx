import { Plus, TextAlignJustify } from 'lucide-react'
import React from 'react'

const Calendar = ({ setOpenMobileMenu }) => {
  return (
    <div className='w-full lg:px-3 lg:py-3'>
      <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
        <TextAlignJustify onClick={() => {
          setOpenMobileMenu((prev) => !prev)
        }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
        <h3 className='text-(--Text-Primary) text-2xl font-bold'>Calendar</h3>
        <div className='bg-(--Surface)/60 rounded px-3 py-0.5 text-2xl font-semibold text-(--Text-Primary)'>
          5
        </div>
      </div>
      <div className='group mt-2 flex items-center gap-3 cursor-pointer border-b-2 border-(--Border)/15 pl-3 pt-2 pb-3'>
        <Plus strokeWidth={2.5} className='group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400' />
        <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new list</p>
      </div>
    </div>
  )
}

export default Calendar