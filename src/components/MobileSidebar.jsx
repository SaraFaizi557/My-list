import { BadgeCheck, Plus, Search, TextAlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import { tasks } from '../constant'
import { NavLink } from 'react-router-dom'

const MobileSidebar = ({ openMobileMenu, setOpenMobileMenu, setCreateList, lists, randomColor }) => {
    const [activeId, setActiveId] = useState(tasks[0]?.id ?? null)

    return (
        <>
            <div className={["absolute lg:hidden flex flex-col justify-between w-60 p-3 rounded-xl h-full bg-(--Surface) transition-all duration-200 ease-out", openMobileMenu ? "translate-x-0" : "-translate-x-90"].join(" ")}>
                <div className='flex flex-col gap-3.5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <BadgeCheck className='w-7 h-7 fill-[#f3b808] text-(--Background)' />
                            <h1 className='text-(--Text-Primary) [font-family:var(--Luckiest-family)] text-xl font-bold'>My List</h1>
                        </div>
                        <X onClick={() => {
                            setOpenMobileMenu(false)
                        }} strokeWidth={2.1} className='flex w-5 h-5 cursor-pointer text-(--Text-Secondary)' />
                    </div>
                    <div className='flex flex-col gap-0.5 [font-family:var(--TikTok-family)] mt-3'>
                        <h5 className='text-(--Text-Primary)/80 mb-2 text-xs font-semibold uppercase'>Tasks</h5>
                        {tasks.map(({ id, Icon, title, link }) => {
                            const isActive = id === activeId;
                            if (id >= 5) return null;

                            return (
                                <NavLink key={id} to={link}>
                                    <div onClick={() => {
                                        setActiveId(id)
                                        setOpenMobileMenu(false)
                                    }} className={`${isActive ? "bg-(--Border)/70" : ""} flex px-2.5 py-2 cursor-pointer rounded-md hover:bg-(--Border)/70 items-center gap-4 transition-all duration-400`}>
                                        <Icon strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/90' />
                                        <p className={`${isActive ? "font-medium" : "font-normal"} text-(--Text-Primary) text-sm`}>{title}</p>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-0.5 [font-family:var(--TikTok-family)] mt-3'>
                        <h5 className='text-(--Text-Primary)/80 mb-2 text-xs font-semibold uppercase'>Tags</h5>

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
                            <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new tag</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-0.5'>
                    {tasks.map(({ id, Icon, title, link }) => {
                        const isActive = id === activeId;

                        if (id === 5) return (
                            <NavLink key={id} to={link}>
                                <div onClick={() => {
                                    setActiveId(id)
                                    setOpenMobileMenu(false)
                                }} className={`${isActive ? "bg-(--Border)/70" : ""} hover:bg-(--Border)/70 flex px-2.5 py-2 cursor-pointer rounded-md items-center gap-4 transition-all duration-400`}>
                                    <Icon strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/90' />
                                    <p className={`${isActive ? "font-medium" : "font-normal"} text-(--Text-Primary) text-sm`}>{title}</p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MobileSidebar