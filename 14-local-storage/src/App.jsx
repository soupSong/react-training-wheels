import React, { use } from 'react'

const App = () => {

  // const user = {
  //   'username' : 'Shadab',
  //   'age':18,
  //   'city' : 'Dehradun'
  // }
  
  // localStorage.setItem('user', JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem('user'))

  console.log(user);
  
  
  
  return (
    <div>
      
    </div>
  )
}

export default App
