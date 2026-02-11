import React from 'react';
import DataPass from './components/DataPass';
import ObjectPass from './components/ObjectPass';
import FuctionPass from './components/FuctionPass';



const App = () => {  
      

  const itemObj={
    name:'sakib',
    age:23,
    city:'dhaka'
  }

  const BtnClick=()=>{
    alert("Say Hello!");
  }

  return (
    <div>  

        <DataPass title="Learn React" des="In detailsd Props"/>
        <ObjectPass item={itemObj}/>
        <FuctionPass childBtnClick={BtnClick}/>

    </div>

  );
};

export default App;