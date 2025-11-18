import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card user='Shadab Siddiqui' age={31} img='https://images.unsplash.com/photo-1762170905134-e9e3b5692286?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160'/>

      <Card user='Aarzoo Aarzoo' age={26} img='https://plus.unsplash.com/premium_photo-1761334228337-438a180ba277?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=830'/>
      
    </div>
  )
}

export default App
