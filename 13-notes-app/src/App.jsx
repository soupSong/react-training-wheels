import {useState} from 'react'

const App = () => {

  const [heading, setHeading] = useState("")
  const [details, setDetails] = useState("")

  const [tasks, setTask2] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...tasks]

    copyTask.push({heading, details})

    setTask2(copyTask)

    setHeading("")
    setDetails("")
    
  }


  const deleteNote = (idx)=>{
    const copyTask = [...tasks]
    
    
    copyTask.splice(idx, 1)

    setTask2(copyTask)
    
    
  }

  return (
    <div>
      <div className="h-screen bg-black text-white lg:flex">

        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col items-start gap-5 w-1/2 p-10 lg:w-1/2">

          <h1 className='text-3xl font-bold'>Add Notes</h1>


        {/* First Input for HEADING */}
          <input
            type="text"
            className="px-5 py-2 border-2 font-medium border-gray-300 rounded-lg w-full"
            placeholder="Enter Task Heading"
            value={heading}
            onChange={(e)=>{
              setHeading(e.target.value)
            }}
          />

        {/* Second Input for DETAILS */}
          <textarea
            type="text"
            className="px-5 py-2 h-50 border-2 font-medium border-gray-300 rounded-lg w-full"
            placeholder="Write details"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />

          <button className="bg-white text-black px-5 py-2 rounded w-full active:bg-gray-300">
            Add Note
          </button>

        </form>

        <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className='text-3xl font-bold'>Your Notes</h1>
          <div className="gap-5 flex flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto no-scrollbar">

            {tasks.map(function(task, idx){

              return <div key={idx} className= "flex justify-between flex-col items-start h-52 w-40 rounded-2xl text-black py-9 px-4 pt-9 pb-2 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{task.heading}</h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-700 max-h-20 overflow-y-auto no-scrollbar'>{task.details}</p>
                </div>

                <button
                onClick={()=>{
                  deleteNote(idx)
                }}
                className='w-full bg-red-500 text-white py-1 text-xs rounded font-bold cursor-pointer active:scale-95'>
                  Delete
                </button>
              </div>
            })}


          </div>
        </div>

      </div>
    </div>
  );
}

export default App
