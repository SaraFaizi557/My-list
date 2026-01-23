import { Plus, TextAlignJustify } from 'lucide-react'

const Notes = ({ setOpenMobileMenu, setOpenCreateNote }) => {
  return (
    <div className='w-full lg:px-3 lg:py-3'>
      <div className='flex items-center gap-5 pb-4 border-b-2 border-(--Border)/15'>
        <TextAlignJustify onClick={() => {
          setOpenMobileMenu((prev) => !prev)
        }} className='flex lg:hidden w-5 h-5 cursor-pointer text-(--Text-Primary)' />
        <h3 className='text-(--Text-Primary) text-xl font-bold'>Notes</h3>
        <div className='bg-(--Surface)/60 rounded px-3 py-0.5 text-xl font-semibold text-(--Text-Primary)'>
          5
        </div>
      </div>
      <div onClick={() => {
        setOpenCreateNote(true)
      }} className='group mt-2 flex items-center gap-3 cursor-pointer border-b-2 border-(--Border)/15 pl-3 pt-2 pb-3'>
        <Plus strokeWidth={2.5} className='group-hover:text-(--Text-Primary)/90 w-4.5 h-4.5 text-(--Text-Primary)/70 transition-all duration-400' />
        <p className='capitalize text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/90 transition-all duration-400 font-medium text-sm'>Add new note</p>
      </div>
      <div id='right' className='flex items-center md:justify-start overflow-x-auto justify-center py-8 gap-4 flex-wrap'>
        <div className='flex w-full md:w-110 hover:-translate-y-2 transition-all duration-400 flex-col gap-3 rounded-lg px-5 py-4 border border-(--Border)/50'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#f3b808] w-2 h-2 rounded-full'></div>
            <h3 className='text-md text-(--Text-Primary) font-medium'>Thi is title</h3>
          </div>
          <p className='ml-3 text-md text-(--Text-Primary)/80 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sit commodi necessitatibus praesentium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quas possimus consectetur voluptate? Ullam quis voluptatibus voluptatum repudiandae dolor velit, voluptatem nam cumque assumenda quia sit ab saepe id corporis!</p>
          <div className='px-2 py-0.5 rounded-sm bg-red-400 w-fit cursor-pointer'>
            <p className='text-xs font-medium text-(--Background) capitalize'>Personal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes