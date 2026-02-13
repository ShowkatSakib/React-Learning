import React, { useEffect, useState } from 'react';


const App = () => { 

    let [data, setData]= useState();

    useEffect(()=>{
      (async()=>{

      let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')   //api call or request using fetch to come response
      let json= await response.json()   //respose convert to json
      setData(json)     //json data set into setData

      })()


    },[])      

  

  return (  
    <div >
      {JSON.stringify(data)}
    </div>  
    

    

  );
};

export default App;