import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Todos = () => {
    
    const [task, setTask] = useState();
    const [list, setlist] = useState([]);   //empty array 
    


    const getInput = (event) =>{
        console.log(event.target.value);   //get input value
        setTask(event.target.value);     // go value to updated state setTask
    }

    const getData = () =>{
        console.log(task);   // then value comes to initial state called task
        let store = [...list, task]   // store previous list of task and new task
        setlist(store)
        setTask("")  //clear input section after press add button
    }

    const deleteTask = (index) =>{
        console.log(index);
        let filterData= list.filter((curElem, id)=>{     //built in method to flter the data
            return id != index   // show task id and index does not match
        })

        setlist(filterData)

    }

    return (
        <div>
            <h1> Basic TODO UI using React</h1>
            <div className="container">
                <div className="inputTask">
                    <input type="text" placeholder="Enter Your Task" value={task} onChange={getInput}/>
                    <button onClick={getData}> Add </button>
                </div>
            </div>

            {list.map((element, index)=>{    //index wise print like loop 
                return(
                    <div>
                        <div className='taskData'>
                            <p>{element}</p>
                            <i onClick={()=>deleteTask(index)} className="fa-solid fa-trash"></i>
                          
                        </div>
                    </div>

                )
            })}
        </div>
    );
};

export default Todos;