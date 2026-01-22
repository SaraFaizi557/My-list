import { CalendarFold, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { dueDate } from '../constant'

const AddList = ({ lists, randomColor, setAddList, taskValue, setTaskValue, addTask, setAddTask, setTaskNum, date, setDate, secInputRef, dateMenu, setDateMenu, openlists, setOpenlists, selectedName, setSelectedName }) => {
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)

    const addTasks = () => {
        const task = taskValue.trim()
        if (!task) {
            setError(true)
            return;
        }

        const alreadyExist = addTask.some(
            (l) => l.task.toLowerCase() === task.toLowerCase()
        );
        if (alreadyExist) {
            setError2(true)
            return;
        }

        setAddTask((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                task,
                dueDate: date,
                listName: selectedName?.name ?? null,
                listId: selectedName?.id ?? null,
            }
        ])

        setTaskNum(prev => prev + 1)
        setTaskValue("")
        setAddList(false);
    }

    return (
        <div onClick={() => {
            setAddList(false)
        }} className='absolute w-full h-full left-0 top-0 flex items-center justify-center bg-(--Border)/55 backdrop-blur-xs px-5 py-10'>
            <div onClick={(e) => {
                e.stopPropagation()
                setOpenlists(false)
                setDateMenu(false)
            }} className="w-full sm:w-110 h-fit p-3 flex flex-col gap-4 rounded-xl bg-(--Border) border border-(--Border)/90 shadow inset-0 transition-all duration-200 ease-out">
                <h5 className='font-medium text-(--Text-Primary) text-md'>Create Task</h5>
                <div className='flex flex-col'>
                    <input ref={secInputRef} onKeyDown={(e) => e.key === "Enter" && addTasks()} onChange={(e) => {
                        setTaskValue(e.target.value)
                        setError(false)
                        if (e.target.value === "") {
                            setError2(false)
                        }
                    }} type="text" value={taskValue} placeholder='Enter task title' className={`${error || error2 ? "border border-(--Red)/80" : ""} bg-(--Surface)/15 outline-none rounded-lg px-2.5 py-1.5 text-(--Text-Primary)/90`} />
                    {error && <p className='text-(--Red)/85 text-sm ml-1'>Task is required</p>}
                    {error2 && <p className='text-(--Red)/85 text-sm ml-1'>This task already exists</p>}
                </div>
                <div className='flex flex-col gap-4 w-full sm:w-75'>
                    <div className='flex items-center justify-between ml-2'>
                        <p className='text-(--Text-Primary)/80 text-sm font-medium'>Tags</p>
                        <div className='relative gap-3 mr-2'>
                            <div onClick={(e) => {
                                e.stopPropagation()
                                setOpenlists((prev) => !prev)
                                setDateMenu(false)
                            }} className='group flex items-center gap-4 cursor-pointer'>
                                <p className='text-(--Text-Primary)/80 text-sm group-hover:text-(--Text-Primary)/90 transition-all duration-300 capitalize'>{selectedName?.name ?? "No list"}</p>
                                <ChevronDown strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/80 transition-all duration-300' />
                            </div>
                            {openlists && <div onClick={(e) => {
                                e.stopPropagation()
                            }} className='absolute z-50 min-w-full max-w-26 bg-(--Border) shadow mt-1 rounded-md p-2'>
                                <div className='flex flex-col gap-1'>
                                    {lists.map((list) => {
                                        return (
                                            <div onClick={() => {
                                                setOpenlists(false)
                                                setSelectedName(list)
                                            }} key={list.id} className='flex whitespace-nowrap overflow-hidden hover:bg-(--Border)/30 rounded text-ellipsis items-center gap-2 select-none cursor-pointer transition-all duration-400'>
                                                <div className='w-3 h-3 rounded shrink-0' style={{ backgroundColor: randomColor(list.name) }}></div>
                                                <p className='text-(--Text-Primary)/70 text-sm capitalize'>{list.name}</p>
                                            </div>
                                        )

                                    })}
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between ml-2'>
                        <p className='text-(--Text-Primary)/80 text-sm font-medium'>Due Date</p>
                        <div className='relative gap-3'>
                            <div onClick={(e) => {
                                e.stopPropagation()
                                setDateMenu((prev) => !prev)
                                setOpenlists(false)
                            }} className='group flex items-center gap-1 cursor-pointer'>
                                <CalendarFold className='w-4 h-4 shrink-0 fill-(--Text-Primary)/70 text-(--Border)' />
                                <p className='text-(--Text-Primary)/80 mr-3 text-sm group-hover:text-(--Text-Primary)/90 transition-all duration-300 capitalize'>{date}</p>
                                <ChevronDown strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/80 transition-all duration-300' />
                            </div>
                            {dateMenu && <div onClick={() => {
                                e.stopPropagation()
                            }} className='absolute min-w-full max-w-27 bg-(--Border) shadow mt-2 rounded-md p-2 text-black'>
                                <div className='flex flex-col gap-1'>
                                    {dueDate.map((list) => {
                                        return (
                                            <div onClick={() => {
                                                setDate(list)
                                            }} key={list} className='flex whitespace-nowrap overflow-hidden hover:bg-(--Border)/30 rounded text-ellipsis items-center gap-2 select-none cursor-pointer transition-all duration-400 px-1'>
                                                <p className='text-(--Text-Primary)/70 text-sm capitalize'>{list}</p>
                                            </div>
                                        )

                                    })}
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className='flex items-end justify-end gap-1.5 mt-5'>
                    <button onClick={() => {
                        setAddList(false)
                    }} className='px-3 py-1 rounded-xl text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Cancel</button>
                    <button onClick={() => addTasks()} className='px-3 py-1 rounded-2xl bg-(--Text-Primary)/8 hover:bg-(--Text-Primary)/11 border border-(--Text-Primary)/3 text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default AddList