import React, {useState} from 'react'

const App = () => {

  const[count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  function jumpBy5(){
    setCount(count+5)
  }

  function resetCount(){
    setCount(0)
  }




  return (
    <div>

      <div className='container'>

          <h1>{count}</h1>

          <div className='button_container'>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={jumpBy5}>Add 5</button>

          </div>

          <button onClick={resetCount}>Reset</button>
        


      </div>

      
    </div>
  )
}

export default App
