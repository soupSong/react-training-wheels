import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form Submitted', title);

    setTitle('')
    
  }
  return (
    <div>

      <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input
          type="text"
          placeholder="Username"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
            
          }}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default App
