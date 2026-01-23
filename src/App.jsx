import { useEffect, useMemo, useRef, useState } from 'react'
import { AddList, CreateList, CreateTodayTask, MobileSidebar, Notes, Settings, Sidebar, Today, Upcoming } from './components'
import { dueDate, palette } from './constant'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [createList, setCreateList] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [taskValue, setTaskValue] = useState("")
  const [todayTaskValue, setTodayTaskValue] = useState("")
  const [dateMenu, setDateMenu] = useState(false)
  const [openlists, setOpenlists] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "system")
  const [lists, setLists] = useState(() => {
    return JSON.parse(localStorage.getItem("lists") || "[]");
  });
  const [addTask, setAddTask] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]")
  })
  const [addTodayTask, setAddTodayTask] = useState(() => {
    return JSON.parse(localStorage.getItem("todayTasks") || "[]")
  })
  const firstName = useMemo(() => (lists.length ? lists[0] : null), [lists])
  const [selectedName, setSelectedName] = useState(firstName)
  const [date, setDate] = useState(dueDate[0])
  const [addList, setAddList] = useState(false)
  const [todayTask, setTodayTask] = useState(false)
  const [taskSetting, setTaskSetting] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const selectedTask = addTask.find(t => t.id === selectedTaskId) || null
  const [draft, setDraft] = useState({
    task: "",
    listId: "",
    dueDate: "",
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
    if (!selectedTask) return;

    setDraft({
      task: selectedTask.task,
      listId: selectedTask.listId,
      dueDate: selectedTask.dueDate,
    })

  }, [selectedTaskId])

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(addTask))
  }, [addTask])

  useEffect(() => {
    localStorage.setItem("todayTasks", JSON.stringify(addTodayTask))
  }, [addTodayTask])

  useEffect(() => {
    localStorage.setItem("theme", theme)

    const effective = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme
    document.documentElement.classList.toggle("dark", effective === "dark")

  }, [theme])

  return (
    <main className='w-screen flex h-screen bg-(--Background) p-3'>
      <div className='w-fit relative'>
        <Sidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} setLists={setLists} />
        <MobileSidebar createList={createList} setCreateList={setCreateList} lists={lists} randomColor={randomColor} openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} setLists={setLists} />
      </div>
      <CreateList createList={createList} setCreateList={setCreateList} inputValue={inputValue} setInputValue={setInputValue} lists={lists} setLists={setLists} inputRef={inputRef} />
      {addList && <AddList lists={lists} setAddList={setAddList} randomColor={randomColor} taskValue={taskValue} setTaskValue={setTaskValue} addTask={addTask} setAddTask={setAddTask} date={date} setDate={setDate} secInputRef={secInputRef} dateMenu={dateMenu} setDateMenu={setDateMenu} openlists={openlists} setOpenlists={setOpenlists} selectedName={selectedName} setSelectedName={setSelectedName} />}
      {todayTask && <CreateTodayTask lists={lists} randomColor={randomColor} selectedName={selectedName} addTodayTask={addTodayTask} setAddTodayTask={setAddTodayTask} todayTaskValue={todayTaskValue} setTodayTaskValue={setTodayTaskValue} openlists={openlists} setOpenlists={setOpenlists} setTodayTask={setTodayTask} setSelectedName={setSelectedName} />}
      <div className='w-full h-full flex justify-between lg:ml-6'>
        <Routes>
          <Route path='/'
            element={<Upcoming setOpenMobileMenu={setOpenMobileMenu} setAddList={setAddList} addTask={addTask} lists={lists} randomColor={randomColor} dateMenu={dateMenu} setDateMenu={setDateMenu} openlists={openlists} setOpenlists={setOpenlists} setDate={setDate} date={date} selectedName={selectedName} setSelectedName={setSelectedName} setSelectedTaskId={setSelectedTaskId} setTaskSetting={setTaskSetting} setAddTask={setAddTask} />}
          />
          <Route path='/today' element={<Today setOpenMobileMenu={setOpenMobileMenu} setTodayTask={setTodayTask} addTodayTask={addTodayTask} lists={lists} setAddTodayTask={setAddTodayTask} randomColor={randomColor} addTask={addTask} todayTask={todayTask} setSelectedTaskId={setSelectedTaskId} />} />
          <Route path='/notes' element={<Notes setOpenMobileMenu={setOpenMobileMenu} />} />
          <Route path='/settings' element={<Settings setOpenMobileMenu={setOpenMobileMenu} theme={theme} setTheme={setTheme} />} />
        </Routes>
      </div>
    </main>
  )
}

export default App