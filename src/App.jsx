import React from 'react';


const App = () => {  
  
  const marks=90;    
  return (
    <div>
      {
        marks > 80?
        <h1> Brilliant Result </h1>
        :
        <h1> Average Result </h1>
      }



      {
       (
        ()=>{
              if(marks>=80 && marks <100){
                return <h1> A+ </h1>}
              else if(marks>=70 && marks <80){
                return <h1> A </h1>}
              else{ 
                return <h1> F </h1>}
        }
       ) ()
      }
    </div>
  );
};

export default App;