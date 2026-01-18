import React, { useState } from 'react'
import { CreateList, MobileSidebar, Sidebar, Upcoming } from './components'
import { palette } from './constant'

const App = () => {
  const [createList, setCreateList] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [lists, setLists] = useState([])

  const randomColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash >> 5) - hash);
    }
    return palette[Math.abs(hash) % palette.length]
  }

  return (
    <main className='dark w-screen flex h-screen bg-(--Background) p-3'>
      <div className='w-fit relative'>
        <Sidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} />
        <MobileSidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} />
      </div>
      <CreateList createList={createList} setCreateList={setCreateList} inputValue={inputValue} setInputValue={setInputValue} lists={lists} setLists={setLists} />
      <div className='w-full h-full ml-12 lg:ml-6'>
        <Upcoming />
      </div>
    </main>
  )
}

export default App