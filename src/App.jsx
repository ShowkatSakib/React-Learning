import React, { useEffect, useState } from 'react';


const App = () => { 

    let [data, setDta]= useState();

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')   //api call or request using fetch to come response
      .then(response => response.json())   //respose convert to json
      .then(json => setDta(json))     //json data set into setData
    },[])      

  

  return (  
    <div >
      {JSON.stringify(data)}
    </div>  
    

    

  );
};

export default App;