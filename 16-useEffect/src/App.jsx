import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const App = () => {

  const[a, setA] = useState(0)
  const[b, setB] = useState(0)

  function aChanging(){
    console.log('A is changed');
    

  }

  function bChanging(){
    console.log('B is changed');
    
  }

  useEffect(function(){
    aChanging()
    console.log('Use effect is mounted ...');
    
  }, [a])

  useEffect(function(){
    bChanging()
    console.log('Use effect is mounted ...');
    
  }, [b])

  return (
    <div>

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>

      <button onClick={()=>{
        setB(b+1)
      }}>Change B</button>
      
    </div>
  )
}




// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('UseEffect is mounted')
//   }, [num])

//   return (
//     <div>

//       <h1>num 1 is {num}</h1>
//       <h1>num 2 is {num2}</h1>

//       <button
//       onMouseEnter={() => {
//         setNum(num + 1)
//       }}
//       onMouseLeave={() => {
//         setNum2(num2 + 10)
//       }}
      
//       >Hover!</button>
      
//     </div>
//   )
// }

export default App
