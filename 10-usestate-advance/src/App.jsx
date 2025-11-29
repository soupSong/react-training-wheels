import {useState} from 'react'

const App = () => {

  const [num, setNum] = useState({user: "Shadab", age: 31})

  const [num2, setNum2] = useState([10,20,30,40])

  // const handleClick = ()=>{
  //   const newNum = {...num}
  //   newNum.user = "Aarzoo"
  //   newNum.age = 25

  //   setNum(newNum)
  // }

  const handleClick = ()=>{
    setNum(prevNum=>({
      ...prevNum, age: prevNum.age - 1}))
  }

  const handleClick2 = ()=>{
    const newNum2 = [...num2]
    newNum2.push(50)

    setNum2(newNum2)
  }

  return (
    <div className='container'>


      <div className='section'>
        <h1>
          {num.user}, {num.age}
        </h1>
        <button onClick={handleClick}>click</button>
      </div>

      <div className='section'>
        <h1>
          {
            num2.map((n, index)=>(
              <span key={index}>{n} </span>
            ))
          }
        </h1>
        <button onClick={handleClick2}>click</button>
      </div>


    </div>
  );
}

export default App
