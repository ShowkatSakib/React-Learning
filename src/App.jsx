import React, { useRef } from 'react';


const App = () => {  
      
  let APIData = useRef(null);   // initial value null
  let myPara = useRef();

  const fetchData = async () =>{
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");   //await for wait respond
   APIData.current=await response.json();   //store as a json onject 

  }

  const showData = () =>{
   myPara.current.innerText=JSON.stringify(APIData.current)   // convert json into string

  }


  return (
    <div>  
      
      <p ref={myPara}></p>
      <button onClick={fetchData}> Call API</button>   
      <button onClick={showData}> Show API</button> 

    </div>

  );
};

export default App;