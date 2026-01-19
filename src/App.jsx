import React, { useEffect, useRef, useState } from 'react'
import { AddList, CreateList, MobileSidebar, Sidebar, Upcoming } from './components'
import { palette } from './constant'
import { TextAlignJustify } from 'lucide-react'

const App = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [createList, setCreateList] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [lists, setLists] = useState([])
  const [addList, setAddList] = useState(false)
  const inputRef = useRef(null)

  const randomColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash >> 5) - hash);
    }
    return palette[Math.abs(hash) % palette.length]
  }

  useEffect(() => {
    if (createList) inputRef.current?.focus()
  })

  return (
    <main className='dark w-screen flex h-screen bg-(--Background) p-3'>
      <div className='w-fit relative'>
        <Sidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} />
        <MobileSidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
      </div>
      <CreateList createList={createList} setCreateList={setCreateList} inputValue={inputValue} setInputValue={setInputValue} lists={lists} setLists={setLists} inputRef={inputRef} />
      {addList && <AddList lists={lists} setAddList={setAddList} randomColor={randomColor} />}
      <div className='w-full h-full flex justify-between lg:ml-6'>
        <Upcoming setOpenMobileMenu={setOpenMobileMenu} setAddList={setAddList} />
      </div>
    </main>
  )
}

export default App