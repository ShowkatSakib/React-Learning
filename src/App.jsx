import React, { useState } from 'react';


const App = () => { 
  const [list, setList]= useState([])   // items are add to list
  const [item, setItem]= useState("")   // elements of a list
    

  const AddToList=()=>{
    list.push(item)     //add item in list 
    setList([...list]);   // updated list 
  }

  const RemoveItem=(index)=>{
    list.splice(index,1)    //1 item delete and use splice
    setList([...list]);   // updated list
  }

  return (    /*if list of item > 0 then show item */
    <div>    
      
      <table>
        <tbody>
          {  
            list.length !== 0?(                   
              list.map((element, index)=>{   
                return(
                <tr>
                  <td>{element}</td>
                  <td><button onClick={()=>{RemoveItem(index)}}> Remove </button></td>
                </tr>
                )
              })
              
            ):(<tr></tr>)
          }
        </tbody>
      </table>
      <input onChange={(e)=> setItem(e.target.value)} placeholder='Item'/>   {/*find input item value*/}
      <button onClick={AddToList}> Add</button> 

    </div>

  );
};

export default App;