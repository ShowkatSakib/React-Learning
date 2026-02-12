import React, { useRef } from 'react';


const App = () => {  
      
  let myHeadLine1 = useRef();
  let myHeadLine2 = useRef();
  let myImg = useRef();

  const change1 = () =>{
    myHeadLine1.current.innerText="Hello UseRef";   //to write text in tag
  }

  const change2 = () =>{
    myHeadLine2.current.innerHTML="<ul><li>A</li><li>B</li></ul>";   //to write html tag
  }

  const change3 = () =>{
    myImg.current.src="https://placehold.co/800?text=Hello+World&font=roboto";   //to change attibute value
    myImg.current.setAttribute('height','200px')
    myImg.current.setAttribute('width','400px')
  }

  return (
    <div>  
      <h1 ref={myHeadLine1}></h1>
      <h1 ref={myHeadLine2}></h1>
      <img ref={myImg} src='https://placehold.co/600x400'/>
      <button onClick={change1}> Click me</button>      {/*when click button but not re-render*/}
      <button onClick={change2}> Click me</button>
      <button onClick={change3}> Click me</button>

    </div>

  );
};

export default App;