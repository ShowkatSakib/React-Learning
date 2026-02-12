import React, { useState } from 'react';


const App = () => { 

  let [formObj, setFormObj]=useState({     //create an form object
    fName:"",
    lName:"",
    city:"",
    gender:"Male"
  })

  const inputOnChange=(property, value)=>{
    setFormObj(prevObj => ({
      ...prevObj,
      [property]:value
    }))

  }


  const formSubmit=(e)=>{
    e.preventDefault();     //do not page reload
    alert(JSON.stringify(formObj))    // already form object created when input data
  }

  return (  
    <div className='container'>
      <form onSubmit={formSubmit}>
        <input onChange={(e)=>{inputOnChange("fName",e.target.value)}} value={formObj.fName} placeholder='First Name'/><br/>
        <input onChange={(e)=>{inputOnChange("lName",e.target.value)}} value={formObj.lName} placeholder='Last Name'/><br/>
        <select onChange={(e)=>{inputOnChange("city",e.target.value)}} value={formObj.city}>
          <option value=""> Choose City</option>
          <option value="Dhaka"> Dhaka</option>
          <option value="Rangpur"> Rangpur</option>
        </select><br/>

        <input onChange={()=>{inputOnChange("gender","Male")}} checked={formObj.gender==="Male"} type='radio' name='gender'/>Male
        <input onChange={()=>{inputOnChange("gender","Female")}} checked={formObj.gender==="Female"} type='radio' name='gender'/>Female
        <br/>
        <button type='submit'> Submit </button>
      </form>



    </div>  
    

    

  );
};

export default App;