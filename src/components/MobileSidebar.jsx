import { Plus, Search, TextAlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import { tasks } from '../constant'

const MobileSidebar = ({ openMobileMenu, setOpenMobileMenu, setCreateList, lists, randomColor }) => {
    const [isActive, setIsActive] = useState(false)
    const [activeId, setActiveId] = useState(tasks[0]?.id ?? null)

    return (
        <>
            <div className={["absolute lg:hidden flex flex-col justify-between w-60 p-3 rounded-xl h-full bg-(--Surface) transition-all duration-200 ease-out", openMobileMenu ? "translate-x-0" : "-translate-x-90"].join(" ")}>
                <div className='flex flex-col gap-3.5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <h1 className='text-(--Text-Primary) [font-family:var(--Luckiest-family)] text-lg'>My List</h1>
                        </div>
                        <X onClick={() => {
                            setOpenMobileMenu(false)
                        }} strokeWidth={2.1} className='flex w-5 h-5 cursor-pointer text-(--Text-Secondary)' />
                    </div>
                    <div className={`${isActive ? "bg-(--Border)" : "bg-(--Surface)"} flex w-full items-center p-2 rounded-lg gap-2 hover:bg-(--Border) cursor-pointer [font-family:var(--TikTok-family)] transition-all duration-400`}>
                        <Search strokeWidth={3} className='w-4.5 h-4.5 cursor-pointer shrink-0 text-(--Text-Secondary)' />
                        <input
                            onFocus={() => setIsActive(true)}
                            onBlur={() => setIsActive(false)}
                            className='text-md focus:outline-2 font-medium outline-none text-(--Text-Primary)' type="text" placeholder='Search' />
                    </div>
                    <div className='flex flex-col gap-0.5 [font-family:var(--TikTok-family)] mt-3'>
                        <h5 className='text-(--Text-Primary)/80 mb-2 text-xs font-semibold uppercase'>Tasks</h5>
                        {tasks.map(({ id, Icon, title }) => {
                            const isActive = id === activeId;
                            if (id >= 5) return null;

                            return (
                                <div onClick={() => setActiveId(id)} key={id} className={`${isActive ? "bg-(--Border)/70" : ""} flex px-2.5 py-2 cursor-pointer rounded-md hover:bg-(--Border)/70 items-center gap-4 transition-all duration-400`}>
                                    <Icon strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/90' />
                                    <p className={`${isActive ? "font-medium" : "font-normal"} text-(--Text-Primary) text-sm`}>{title}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-0.5 [font-family:var(--TikTok-family)] mt-3'>
                        <h5 className='text-(--Text-Primary)/80 mb-2 text-xs font-semibold uppercase'>Lists</h5>

                        <div className='max-h-[20vh] overflow-x-auto flex flex-col gap-0.5'>
                            {lists.map((list) => (

                            <div key={list.id} className='max-h-10 flex px-2.5 py-2 cursor-pointer rounded-md hover:bg-(--Border)/70 items-center gap-4 transition-all duration-400'>
                                <div className='w-4 h-4 rounded' style={{ backgroundColor: randomColor(list.name) }}>
                                </div>
                                <p className='text-(--Text-Primary) text-sm capitalize'>{list.name}</p>
                            </div>
                        ))}
                        </div>
                        <div onClick={() => {
                            setCreateList(true)
                        }} className={`group mt-3 flex items-center gap-3 cursor-pointer`}>
                            <Plus strokeWidth={2.5} className={`group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400`} />
                            <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new list</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-0.5'>
                    {tasks.map(({ id, Icon, title }) => {
                        const isActive = id === activeId;

                        if (id === 5 || id === 6) return (
                            <div onClick={() => setActiveId(id)} key={id} className={`${isActive ? "bg-(--Border)/70" : ""} ${id === 6 ? "hover:bg-(--Red)/14" : "hover:bg-(--Border)/70"} flex px-2.5 py-2 cursor-pointer rounded-md items-center gap-4 transition-all duration-400`}>
                                <Icon strokeWidth={2.5} className={`w-4 h-4 ${id === 6 ? "text-(--Red)" : "text-(--Text-Primary)/90"}`} />
                                <p className={`${isActive ? "font-medium" : "font-normal"} ${id === 6 ? "text-(--Red)" : "text-(--Text-Primary)"} text-sm`}>{title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MobileSidebar