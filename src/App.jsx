import React from 'react';


const App = () => {  
      
function handleClick(){
  alert('Hello');
}

  return (
    <div>  

      {/*<button onClick={alert('Hello')}> Click me </button>*/}

      <button onClick={()=>{
        alert('Hello')
      }}> Click me </button>


      <button onClick={handleClick}> Click me again </button>

    </div>

  );
};

export default App;