import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:"https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Our assessment system helps schools understand student learning clearly, enabling better planning and targeted academic support across classrooms.",
      tag:"Sastisfied",
      color:"blue"
    },
      {
      img:"https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"This platform brings together data, insights, and tools so educators make informed decisions that directly improve student outcomes.",
      tag:"Underserved",
      color:"lightseagreen"
    },
    {
      img:"https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"We designed this solution to simplify complex monitoring processes, giving teams real-time visibility into program performance and progress.",
      tag:"Underbanked",
      color:"royalblue"
    },
    {
      img:"https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"With intuitive dashboards and structured data collection, our system empowers organizations to track impact and drive continuous improvement effectively.",
      tag:"Undervalued",
      color:"pink"
    },
  ]
  return (
    <div>

      <Section1 users= {users}/>

      <Section2 />
      
    </div>
  )
}

export default App
