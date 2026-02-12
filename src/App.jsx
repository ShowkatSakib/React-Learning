import React, { useRef } from 'react';


const App = () => {  
      
  let number = useRef(0);   // initial value 0

  const change = () =>{
   number.current++;
   console.log(number.current);

  }


  return (
    <div>  
      
      <button onClick={change}> Click me</button>   {/* no reference in return body so no DOM manupilation*/}

    </div>

  );
};

export default App;