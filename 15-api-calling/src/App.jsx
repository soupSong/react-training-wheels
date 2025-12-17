import {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  // using traditional fetch function that's inbuilt in javascript
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json()

    console.log(response);
    console.log(data)
    
  }


  // using Axios

  const getData2 = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(data);
    
  }

  const getData3 = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data);
    
  }




  return (
    <div>
      <button onClick={getData3}>Get Data</button>

      <div>
        {data.map(function(elem, idx){
          return <h3 key={idx}>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
