import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form Submitted');
    
  }
  return (
    <div>

      <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input type="text" placeholder="Username" />
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default App
