import { CalendarFold, Check, EllipsisVertical, Plus, TextAlignJustify } from 'lucide-react'
import { useEffect, useState } from 'react'

const Upcoming = ({ setOpenMobileMenu, setAddList, addTask, taskNum, randomColor, lists, setSelectedTaskId }) => {
  const [dropDown, setDropDown] = useState(null)
  const [complete, setComplete] = useState(() => {
    return JSON.parse(localStorage.getItem("complete") || "{}")
  })

  useEffect(() => {
    localStorage.setItem("complete", JSON.stringify(complete))
  }, [complete])

  return (
    <>
      <div onClick={() => {
        setDropDown(false)
      }} className='w-full lg:px-3 lg:py-3'>
        <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
          <TextAlignJustify onClick={() => {
            setOpenMobileMenu((prev) => !prev)
          }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
          <h3 className='text-(--Text-Primary) text-xl font-bold'>Upcoming</h3>
          <div className='bg-(--Surface)/60 rounded px-3 py-0.5 text-xl font-semibold text-(--Text-Primary)'>
            {taskNum}
          </div>
        </div>
        <div onClick={() => setAddList(true)} className='group mt-2 flex items-center gap-3 cursor-pointer border-b-2 border-(--Border)/15 pl-3 pt-2 pb-3'>
          <Plus strokeWidth={2.5} className='group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400' />
          <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add New Task</p>
        </div>
        <div id='right' className='flex flex-col max-h-[85vh] overflow-x-hidden'>
          {addTask.map((task) => {
            const isComplete = !!complete[task.id]
            const list = lists.find((l) => l.id === task.listId)
            const color = list ? randomColor(list.name) : "transparent";

            return (
              <div key={task.id} onClick={() => {
                setSelectedTaskId(task.id)
              }} className='flex flex-col gap-3 py-2 pr-2 border-b-2 border-(--Border)/15 hover:bg-(--Border)/60 transition-all duration-400 rounded'>
                <div className='flex items-center justify-between'>
                  <div onClick={(e) => {
                    e.stopPropagation()
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
                  <EllipsisVertical onClick={(e) => {
                    e.stopPropagation()
                    setDropDown((prev) => (prev === task.id ? null : task.id))
                  }} strokeWidth={2.5} className='w-5 h-5 shrink-0 text-(--Text-Primary)/60 cursor-pointer' />
                  {dropDown === task.id && <div className='absolute right-10 mt-15 bg-(--Background) p-1 rounded-md shadow'>
                    <div className='cursor-pointer px-2 py-1 rounded text-sm font-medium text-(--Red) hover:bg-(--Red)/10'>
                      Deleat Task
                    </div>
                  </div>}
                </div>
                <div className='flex items-center gap-4 sm:gap-8 pl-11'>
                  <div className='flex items-center gap-2'>
                    <CalendarFold className='w-4 h-4 shrink-0 text-(--Text-Primary)/50' />
                    <p className='text-(--Text-Primary)/50 mr-3 text-sm group-hover:text-(--Text-Primary)/90 transition-all duration-300 capitalize'>{task.dueDate}</p>
                  </div>
                  <p className='mr-3 px-2 py-0.5 rounded-sm text-xs font-medium text-(--Background) transition-all duration-300 capitalize' style={{ backgroundColor: color }}>{task.listName}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Upcoming