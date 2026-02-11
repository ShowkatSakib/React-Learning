import React from 'react';

//uisng if else-----------------------------------------------------------
const LoginStatusBtn=(status)=>{    //status parameter
  if(status){    //if status true
    return <button>Logout Btn</button>
  }
  else{
     return <button>Login Btn</button>
  }
}

const App = () => {  
      

  let status2= false;

  return (
    <div>  
        <h1> Login Status</h1>
        {LoginStatusBtn(true)}
       
       <br/>
       <br/>
       
        {(()=>{
          if(status2==true){
            return <button> Logout Btn</button>
          }
          else{
            return <button> Login Btn</button>
          }
        })()

        }
    </div>

  );
};

export default App;