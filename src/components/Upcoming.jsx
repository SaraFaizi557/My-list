import { Plus } from 'lucide-react'
import React from 'react'

const Upcoming = () => {
  return (
    <div className='lg:px-3 lg:py-3'>
      <div className='flex items-center gap-5 pb-4 border-b border-(--Border)/60'>
        <h3 className='text-(--Text-Primary) text-2xl font-bold'>Upcoming</h3>
        <div className='bg-(--Surface)/60 rounded px-3 py-0.5 text-2xl font-semibold text-(--Text-Primary)'>
          5
        </div>
      </div>
      <div className='group mt-3 flex items-center gap-3 cursor-pointer border-b border-(--Border)/60 pl-3 pt-2 pb-4'>
        <Plus strokeWidth={2.5} className='group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400' />
        <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new list</p>
      </div>
    </div>
  )
}

export default Upcoming