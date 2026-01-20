import { Check, ChevronRight, Plus, TextAlignJustify } from 'lucide-react'
import React, { useState } from 'react'

const Upcoming = ({ setOpenMobileMenu, setAddList, addTask, taskNum }) => {
  const [complete, setComplete] = useState({})

  return (
    <>
      <div className='w-full lg:px-3 lg:py-3'>
        <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
          <TextAlignJustify onClick={() => {
            setOpenMobileMenu((prev) => !prev)
          }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
          <h3 className='text-(--Text-Primary) text-2xl font-bold'>Upcoming</h3>
          <div className='bg-(--Surface)/60 rounded px-3 py-0.5 text-2xl font-semibold text-(--Text-Primary)'>
            {taskNum}
          </div>
        </div>
        <div onClick={() => setAddList(true)} className='group mt-2 flex items-center gap-3 cursor-pointer border-b-2 border-(--Border)/15 pl-3 pt-2 pb-3'>
          <Plus strokeWidth={2.5} className='group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400' />
          <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new list</p>
        </div>
        <div className=''>
          {addTask.map((task) => {
            const isComplete = !!complete[task.id]

            return (
              <div className='flex items-center justify-between gap-3 py-2 border-b-2 border-(--Border)/15'>
              <div key={task.id} onClick={() => {
                  setComplete(prev => ({
                    ...prev,
                    [task.id]: !prev[task.id],
                  }))
              }} className='flex items-center cursor-pointer gap-3'>
                <div className={`${isComplete ? "bg-blue-500" : "border-2 border-(--Border)"} shrink-0 ml-3 w-4.5 h-4.5 flex items-center justify-center rounded`}>
                  {isComplete && <Check strokeWidth={4} className='w-3.5 h-3.5 text-(--Background)' />}
                </div>
                <p className={`${isComplete ? "line-through" : ""} text-(--Text-Primary)/70 transition-all duration-400 font-medium text-md`}>{task.task}</p>
              </div>
              <ChevronRight strokeWidth={2.5} className='w-5 h-5 shrink-0 text-(--Text-Primary)/60 cursor-pointer' />
            </div>
            )
})}
        </div>
      </div>
      <div className='hidden lg:flex bg-(--Surface) w-[50vw] rounded-lg px-5 py-4'>
        <h3 className='text-(--Text-Primary)/70 text-xl font-bold'>Task:</h3>
      </div>
    </>
  )
}

export default Upcoming