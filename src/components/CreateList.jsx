import { useState } from 'react'

const CreateList = ({ createList, setCreateList, inputValue, setInputValue, setLists, lists, inputRef }) => {
    if (!createList) return null

    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)

    const addItem = () => {
        const name = inputValue.trim();
        if (!name) {
            setError(true)
            return;
        }
        if (name.length === 15) {
            setError3(true)
            return;
        }

        const alreadyExist = lists.some(
            (l) => l.name.toLowerCase() === name.toLowerCase()
        );
        if (alreadyExist) {
            setError2(true)
            return;
        }

        setLists((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                name,
            },
        ]);
        setInputValue("");
        setCreateList(false);
    }

    return (
        <div onClick={() => {
            setCreateList(false)
        }} className='absolute left-0 top-0 w-full h-full px-5 py-3 flex items-center justify-center bg-(--Border)/55 backdrop-blur-xs'>
            <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-100 h-fit p-3 flex flex-col gap-4 rounded-xl bg-(--Border) border border-(--Border)/90 shadow inset-0 transition-all duration-200 ease-out">
                <h5 className='font-medium text-(--Text-Primary) text-md'>Create tag</h5>
                <div className='flex flex-col gap-2.5'>
                    <p className='text-(--Text-Primary)/80 text-sm'>Enter a name for your tag</p>
                    <div className='flex flex-col'>
                        <input ref={inputRef} onKeyDown={(e) => e.key === "Enter" && addItem()} onChange={(e) => {
                            setInputValue(e.target.value)
                            setError(false)
                            setError3(false)
                            if (e.target.value === "") {
                                setError2(false)
                            }
                            if (e.target.value.length >= 15) {
                                setError3(true)
                            }
                        }} type="text" value={inputValue} placeholder='List name' className={`${error || error2 || error3 ? "border border-(--Red)/80" : ""} bg-(--Surface)/15 outline-none rounded-lg px-2.5 py-1.5 text-(--Text-Primary)/90`} />
                        {error && <p className='text-(--Red)/85 text-sm ml-1'>Tag name is required</p>}
                        {error2 && <p className='text-(--Red)/85 text-sm ml-1'>This name already exists</p>}
                        {error3 && <p className='text-(--Red)/85 text-sm ml-1'>Name must not exceed 15 characters</p>}
                    </div>
                </div>
                <div className='flex items-end justify-end gap-1.5'>
                    <button onClick={() => {
                        setCreateList(false)
                        setInputValue("")
                    }} className='px-3 py-1 rounded-xl text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Cancel</button>
                    <button onClick={() => addItem()} className='px-3 py-1 rounded-2xl bg-(--Text-Primary)/8 hover:bg-(--Text-Primary)/11 border border-(--Text-Primary)/3 text-(--Text-Primary)/80 hover:text-(--Text-Primary)/90 cursor-pointer transition-all duration-400'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateList