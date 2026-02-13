import React, { useEffect } from 'react';


const App = () => { 

    useEffect(()=>{
      console.log("Hello")
    },[110,222,33,4])       //any change of value execute useEffect() method

  

  return (  
    <div >
      
    </div>  
    

    

  );
};

export default App;