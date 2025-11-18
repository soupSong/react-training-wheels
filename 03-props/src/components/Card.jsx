import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, deleniti! Sint reprehenderit repellendus fugit reiciendis veritatis vel similique labore saepe quidem aliquid maxime beatae aperiam, laudantium non maiores, culpa velit.</p>
        <button>View Profile</button>
      </div>
      
    </div>
  )
}

export default Card
