import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './componenets/Card'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)


  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)

    setUserData(response.data);

    console.log(response.data)
    
    
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>LOADING . . . . </h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    
    
    })

  }

      

  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>

      <div className='flex flex-wrap h-[90%] gap-4 p-2 overflow-auto'>
        {printUserData}
      </div>


      <div className='flex justify-center gap-6 items-center p-4'>
        <button
        style={{opacity:index == 1 ? 0.5 : 1}}
        className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={()=>{
          if (index > 1) {
            setIndex(index -1)
            setUserData([])
          }
          
        }}
        >
          Prev
        </button>

        <h1>Page {index}</h1>

        <button
        className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default App
