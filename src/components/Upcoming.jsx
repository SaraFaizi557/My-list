import { ChevronRight, Plus, TextAlignJustify } from 'lucide-react'
import React from 'react'

const Upcoming = ({ setOpenMobileMenu, setAddList }) => {
  return (
    <>
      <div className='w-full lg:px-3 lg:py-3'>
        <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
        <TextAlignJustify onClick={() => {
                  setOpenMobileMenu((prev) => !prev)
                }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
          <h3 className='text-(--Text-Primary) text-2xl font-bold'>Upcoming</h3>
          <div className='bg-(--Surface)/60 rounded px-3 py-0.5 text-2xl font-semibold text-(--Text-Primary)'>
            5
          </div>
        </div>
        <div onClick={() => setAddList(true)} className='group mt-2 flex items-center gap-3 cursor-pointer border-b-2 border-(--Border)/15 pl-3 pt-2 pb-3'>
          <Plus strokeWidth={2.5} className='group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400' />
          <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new list</p>
        </div>
        <div className=''>
          <div className='flex items-center gap-3 py-2 border-b-2 border-(--Border)/15'>
            <div className='ml-3 w-4 h-4 border border-(--Border) rounded'>
            </div>
            <p className='text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new list</p>
            <ChevronRight />
          </div>
        </div>
      </div>
      <div className='hidden lg:flex bg-(--Surface) w-[50vw] rounded-lg px-5 py-4'>
        <h3 className='text-(--Text-Primary)/70 text-xl font-bold'>Task:</h3>
      </div>
    </>
  )
}

export default Upcoming