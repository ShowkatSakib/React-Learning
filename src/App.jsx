import React from 'react';


const App = () => {  
      
  const city = ['Dhaka','Kolkata','Delhi'];
  return (
    <div>  
      <ol>
      {
        city.map((item, i)=>{

            return <li key={i.toString}> {item} </li>
        })
      }
      
      </ol>
    </div>
  );
};

export default App;