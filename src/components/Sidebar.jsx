import { BadgeCheck, EllipsisVertical, PanelLeft, Plus } from 'lucide-react'
import { useState } from 'react'
import { tasks } from '../constant'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ setCreateList, lists, setLists, randomColor }) => {
    const [openMenu, setOpenMenu] = useState(true)
    const [dropDown, setDropDown] = useState(null)

    return (
        <div onClick={() => {
            setDropDown(null)
        }} className={`${openMenu === false ? "w-fit" : "w-60"} select-none hidden lg:flex flex-col justify-between left-3 p-3 rounded-xl h-full bg-(--Surface)`}>
            <div className='flex flex-col gap-3.5'>
                <div className={`flex items-center ${openMenu ? "justify-between" : "justify-center"}`}>
                    {openMenu && <div className='flex items-center gap-2 cursor-pointer'>
                        <BadgeCheck className='w-7 h-7 fill-[#f3b808] text-(--Background)' />
                        <h1 className='text-(--Text-Primary) [font-family:var(--Luckiest-family)] text-xl font-bold'>My List</h1>
                    </div>}
                    <PanelLeft onClick={() => {
                        setOpenMenu((prev) => !prev)
                    }} strokeWidth={2.1} className='flex w-5 h-5 cursor-pointer text-(--Text-Secondary)' />
                </div>
                <div className='flex flex-col gap-0.5 [font-family:var(--TikTok-family)] mt-3'>
                    <h5 className='text-(--Text-Primary)/80 mb-2 text-xs font-semibold uppercase'>Tasks</h5>
                    {tasks.map(({ id, Icon, title, link }) => {
                        if (id >= 4) return null;

                        return (
                            <NavLink key={id} to={link}>
                                {({ isActive }) => (
                                <div className={`${isActive ? "bg-(--Border)/70" : ""} flex px-2.5 py-2 cursor-pointer rounded-md hover:bg-(--Border)/70 items-center gap-4 transition-all duration-400`}>
                                    <Icon strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/90' />
                                    {openMenu && <p className={`${isActive ? "font-medium" : "font-normal"} text-(--Text-Primary) text-sm`}>{title}</p>}
                                </div>
                                )}
                            </NavLink>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-0.5 [font-family:var(--TikTok-family)] mt-3'>
                    <h5 className='text-(--Text-Primary)/80 mb-2 text-xs font-semibold uppercase'>Tags</h5>

                    <div id="right" className='max-h-[20vh] overflow-x-auto flex flex-col gap-0.5'>
                        {lists.map((list) => (

                            <div key={list.id} className="flex justify-between px-2.5 py-2 cursor-pointer rounded-md hover:bg-(--Border)/70 items-center gap-4 transition-all duration-400">
                                <div className='flex items-center gap-4'>
                                    <div className='w-4 h-4 rounded' style={{ background: randomColor(list.name) }}>
                                    </div>
                                    {openMenu && <p className='text-(--Text-Primary) text-sm capitalize'>{list.name}</p>}
                                </div>
                                {openMenu && <EllipsisVertical onClick={(e) => {
                                    e.stopPropagation()
                                    setDropDown((prev) => (prev === list.id ? null : list.id))
                                }} strokeWidth={2.5} className='w-4 h-4 shrink-0 text-(--Text-Primary)/60 cursor-pointer' />}
                                {dropDown === list.id && <div className='absolute right-8 mt-15 bg-(--Background) p-1 rounded-md shadow'>
                                    <div onClick={(e) => {
                                        e.stopPropagation()
                                        setLists(prev => prev.filter(t => t.id !== list.id))
                                    }} className='cursor-pointer px-2 py-1 rounded text-sm font-medium text-(--Red) hover:bg-(--Red)/10'>
                                        Deleat Tag
                                    </div>
                                </div>}
                            </div>
                        ))}
                    </div>
                    <div onClick={() => {
                        setCreateList(true)
                    }} className={`group mt-3 flex items-center  ${!openMenu ? "justify-center" : ""} gap-3 cursor-pointer`}>
                        <Plus strokeWidth={2.5} className={`group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 ${!openMenu ? "mr-1" : ""} text-(--Text-Primary)/70 transition-all duration-400`} />
                        {openMenu && <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90  font-medium text-sm transition-all duration-400'>Add new tag</p>}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-0.5'>
                {tasks.map(({ id, Icon, title, link }) => {

                    if (id === 4) return (
                        <NavLink key={id} to={link}>
                            {({ isActive }) => (
                            <div className={`${isActive ? "bg-(--Border)/70" : ""} hover:bg-(--Border)/70 flex px-2.5 py-2 cursor-pointer rounded-md items-center gap-4 transition-all duration-400`}>
                                <Icon strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/90' />
                                {openMenu && <p className={`${isActive ? "font-medium" : "font-normal"} text-(--Text-Primary) text-sm`}>{title}</p>}
                            </div>
                            )}
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar