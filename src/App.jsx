import React from 'react';


const App = () => {      
  return (
    <div>
          <h1> Hello </h1>
          <h1> World </h1>
          <h1> {2+2} </h1>
          <h1> {new Date().getTime()} </h1>
          <br/>
          <p/>
          <h1 className=""> </h1>
          <h1 style={
            {color:'red'}
          }> hi </h1>
          <button onClick={()=> alert("Hello")}> Submit </button>
    </div>
  );
};

export default App;