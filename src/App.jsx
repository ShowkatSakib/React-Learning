import React, { useState } from 'react';


const App = () => {  
      
  const[number, setNumber]= useState(0);

  const change=()=>{
    setNumber(number+1);
  }

  return (
    <div>  
      
      <h1> Number:{number}</h1>
      <button onClick={change}> Click</button> 

    </div>

  );
};

export default App;