import { ArrowLeft } from "lucide-react"

const TaskSetting = ({ draft, setDraft, setTaskSetting }) => {
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 h-full lg:relative flex flex-col justify-between bg-(--Surface) lg:w-[40vw] rounded-lg px-5 py-4'>
            <div className='flex flex-col gap-7'>
                <div className="flex items-center gap-2">
                    <ArrowLeft onClick={() => {
                        setTaskSetting(false)
                    }} className="w-5 h-5 lg:hidden text-(--Text-Primary)/50 cursor-pointer" />
                    <h3 className='text-(--Text-Primary)/70 text-xl font-bold'>Task:</h3>
                </div>
                <div className="mx-3 lg:mx-0">
                    <input value={draft.task} onChange={(e) => setDraft(d => ({ ...d, task: e.target.value }))} type="text" className='w-full px-3 py-1.5 text-(--Text-Primary)/70 font-medium text-md bg-(--Border)/20 rounded-md outline-none' />
                </div>
            </div>
            <div className='flex items-center gap-4 justify-between'>
                <button className='border border-(--Text-Secondary)/20 rounded-md py-2 w-full text-md font-medium text-(--Text-Primary) hover:text-(--Red) hover:border-(--Red)/40 cursor-pointer transition-all duration-300 active:scale-96'>Delete Task</button>
                <button onClick={() => {
                }} className='rounded-md py-2 w-full text-md font-medium text-(--Text-Primary) bg-[#EAB308] hover:bg-[#EAB308]/95 cursor-pointer transition-all duration-400 active:scale-96'>Save Changes</button>
            </div>
        </div>
    )
}

export default TaskSetting