import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
const CreateNotes = ({ setOpenCreateNote, lists, openlists, setOpenlists, randomColor, selectedName, setSelectedName, noteInputValue, setNoteInputValue, addNotes, setAddNotes, description }) => {

  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)

  const addNote = () => {
    const task = noteInputValue.trim()
    if (!task) {
      setError(true)
      return;
    }

    const alreadyExist = addNotes.some(
      (l) => l.task.toLowerCase() === task.toLowerCase()
    );
    if (alreadyExist) {
      setError2(true)
      return;
    }

    setAddNotes((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        task,
        // description,
        listName: selectedName?.name ?? null,
        listId: selectedName?.id ?? null,
      }
    ])

    setNoteInputValue("")
    setOpenCreateNote(false);
  }

  console.log(addNotes)


  return (
    <div onClick={() => {
      setOpenCreateNote(false)
    }} className='absolute w-full h-full left-0 top-0 flex items-center justify-center bg-(--Border)/55 backdrop-blur-xs px-5 py-10'>
      <div onClick={(e) => {
        e.stopPropagation()
        setOpenlists(false)
      }} className="w-full sm:w-120 h-fit p-3 flex flex-col gap-4 rounded-xl bg-(--Border) border border-(--Border)/90 shadow inset-0 transition-all duration-200 ease-out">
        <h5 className='font-medium text-(--Text-Primary) text-md'>Create Note</h5>
        <div className='flex flex-col gap-0.5'>
          <input onChange={(e) => {
            setNoteInputValue(e.target.value)
            setError(false)
            setError2(false)
          }} onKeyDown={(e) => e.key === "Enter" && addNote()} value={noteInputValue} type="text" placeholder='Enter task title' className={`${error || error2 ? "border border-(--Red)/80" : ""} bg-(--Surface)/15 outline-none rounded-lg px-2.5 py-1.5 text-(--Text-Primary)/90`} />
          {error && <p className='text-(--Red)/85 text-sm ml-1'>Note title is required</p>}
          {error2 && <p className='text-(--Red)/85 text-sm ml-1'>This note title already exists</p>}
        </div>
        <h5 className='font-medium text-(--Text-Primary)/90 text-sm ml-1'>Descriptione</h5>
        <textarea className='max-h-50 h-30 bg-(--Surface)/15 outline-none rounded-lg px-2.5 py-1.5 text-(--Text-Primary)/90'></textarea>
        <div className='flex w-40 sm:w-50 items-center justify-between ml-2'>
          <p className='text-(--Text-Primary)/80 text-sm font-medium'>Tags</p>
          <div className='relative gap-3 mr-2'>
            <div onClick={(e) => {
              e.stopPropagation()
              setOpenlists((prev) => !prev)
            }} className='group flex items-center gap-4 cursor-pointer'>
              <p className='text-(--Text-Primary)/80 text-sm group-hover:text-(--Text-Primary)/90 transition-all duration-300 capitalize'>{selectedName?.name ?? "No list"}</p>
              <ChevronDown strokeWidth={2.5} className='w-4 h-4 text-(--Text-Primary)/70 group-hover:text-(--Text-Primary)/80 transition-all duration-300' />
            </div>
            {openlists && <div onClick={(e) => {
            }} className='absolute z-50 min-w-full max-w-26 bg-(--Border) shadow mt-1 rounded-md p-2'>
              <div className='flex flex-col gap-1'>
                {lists.map((list) => {
                  return (
                    <div onClick={() => {
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
        <div className='flex items-end justify-end gap-1.5 mt-5'>
          <button onClick={() => {
            setOpenCreateNote(false)
          }} className='px-3 py-1 rounded-xl text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Cancel</button>
          <button onClick={() => addNote()} className='px-3 py-1 rounded-2xl bg-(--Text-Primary)/8 hover:bg-(--Text-Primary)/11 border border-(--Text-Primary)/3 text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateNotes