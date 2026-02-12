import React, { useRef } from 'react';


const App = () => {  
      
  let myHeadLine = useRef();

  const change = () =>{
    myHeadLine.current.classList.remove('text-success');   //to remove 'text-success' css class
    myHeadLine.current.classList.add('text-danger');  //to add 'text-danger' css class

  }


  return (
    <div>  
      <h1 className='text-success' ref={myHeadLine}> Sakib Learning bootstrap </h1>
      <button onClick={change}> Click me</button>

    </div>

  );
};

export default App;