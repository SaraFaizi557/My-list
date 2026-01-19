import { CalendarFold, CalendarX, ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import { dueDate } from '../constant'

const AddList = ({ lists, randomColor, setAddList }) => {
    const [openlists, setOpenlists] = useState(false)
    const [dateMenu, setDateMenu] = useState(false)
    const firstName = useMemo(() => (lists.length ? lists[0] : null), [lists])
    const [selectedName, setSelectedName] = useState(firstName)
    const [date, setDate] = useState(dueDate[0])

    return (
        <div onClick={() => {
            setAddList(false)
        }} className='absolute w-full h-full left-0 top-0 flex items-center justify-center bg-(--Border)/55 backdrop-blur-xs px-5 py-10'>
            <div onClick={(e) => {
                e.stopPropagation()
                setOpenlists(false)
                setDateMenu(false)
            }} className="w-full sm:w-110 h-fit p-3 flex flex-col gap-4 rounded-xl bg-(--Border) border border-(--Border)/90 shadow inset-0 transition-all duration-200 ease-out">
                <h5 className='font-medium text-(--Text-Primary) text-md'>Task:</h5>
                <input type="text" placeholder='Enter task' className={` "border border-(--Red)/80 bg-(--Surface)/15 outline-none rounded-lg px-2.5 py-1.5 text-(--Text-Primary)/90`} />
                <div className='flex flex-col gap-4 w-full sm:w-75'>
                    <div className='flex items-center justify-between ml-2'>
                        <p className='text-(--Text-Primary)/80 text-sm font-medium'>List</p>
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
                            }} className='absolute min-w-full max-w-27 bg-(--Border) shadow mt-1 rounded-md p-2 text-black'>
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
                    <button className='px-3 py-1 rounded-2xl bg-(--Text-Primary)/8 hover:bg-(--Text-Primary)/11 border border-(--Text-Primary)/3 text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default AddList