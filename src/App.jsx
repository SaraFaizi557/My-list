import React, { useEffect, useRef, useState } from 'react'
import { AddList, CreateList, MobileSidebar, Sidebar, Today, Upcoming } from './components'
import { dueDate, palette } from './constant'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [createList, setCreateList] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [taskValue, setTaskValue] = useState("")
  const [lists, setLists] = useState(() => {
    return JSON.parse(localStorage.getItem("lists") || "[]");
  });
  const [addTask, setAddTask] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]")
  })
  const [date, setDate] = useState(dueDate[0])
  const [addList, setAddList] = useState(false)
  const [taskNum, setTaskNum] = useState(() => {
    return JSON.parse(localStorage.getItem("taskNum") || null)
  })
  const inputRef = useRef(null)
  const secInputRef = useRef(null)

  const randomColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash >> 5) - hash);
    }
    return palette[Math.abs(hash) % palette.length]
  }

  useEffect(() => {
    if (createList) inputRef.current?.focus()
    if (addList) secInputRef.current?.focus()
  })

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(addTask))
  }, [addTask])

  useEffect(() => {
    localStorage.setItem("taskNum", JSON.stringify(taskNum))
  }, [taskNum])

  return (
    <main className='dark w-screen flex h-screen bg-(--Background) p-3'>
      <div className='w-fit relative'>
        <Sidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} />
        <MobileSidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
      </div>
      <CreateList createList={createList} setCreateList={setCreateList} inputValue={inputValue} setInputValue={setInputValue} lists={lists} setLists={setLists} inputRef={inputRef} />
      {addList && <AddList lists={lists} setAddList={setAddList} randomColor={randomColor} taskValue={taskValue} setTaskValue={setTaskValue} addTask={addTask} setAddTask={setAddTask} setTaskNum={setTaskNum} date={date} setDate={setDate} secInputRef={secInputRef} />}
      <div className='w-full h-full flex justify-between lg:ml-6'>
        <Routes>
          <Route path='/'
            element={<Upcoming setOpenMobileMenu={setOpenMobileMenu} setAddList={setAddList} addTask={addTask} taskNum={taskNum} setTaskNum={setTaskNum} lists={lists} randomColor={randomColor} />}
          />
          <Route path='/today' element={<Today />} />
        </Routes>
      </div>
    </main>
  )
}

export default App