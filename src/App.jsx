import React, { useRef } from 'react';


const App = () => {  
      
  let firstName = useRef();
  let lastName = useRef();

  const change = () =>{
    let fname = firstName.current.value;   //to pick input value
    let lname = lastName.current.value;

    alert(fname+" "+lname);
  }


  return (
    <div>  
      <input ref={firstName} placeholder='First Name'/><br/>
      <input ref={lastName} placeholder='Last Name'/><br/>
      <button onClick={change}> Click me</button>

    </div>

  );
};

export default App;