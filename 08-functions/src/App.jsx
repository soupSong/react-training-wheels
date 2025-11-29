import React from 'react'

const App = () => {

  function inputChanging(val){
    console.log(val);
    
  }

  let last = Date.now();
  const pageScroll = (e)=>{
    const speed = Math.abs(e.deltaY) / (Date.now() - last); 
    last = Date.now();
    console.log(speed);   // scroll speed
    
  }
  



  return (
    <div onWheel={(elem)=>{
      pageScroll(elem)
      
    }}>
      {/* <input onChange={function(elem){
        inputChanging(elem.target.value);
        
      }} type='text' placeholder='Enter Name'></input> */}

      {/* <div onMouseMove={(elem) => {
        console.log([elem.clientX, elem.clientY]);
        
      }} 
      className="box">

      </div> */}

      <div className="page1">
        
      </div>
      <div className="page2">
        
      </div>
      <div className="page3">
        
      </div>
    </div>
  );
}

export default App



