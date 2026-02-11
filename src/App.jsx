import React from 'react';


const App = () => {  
      
const postFormData=(event)=>{
  event.preventDefault();
}
  return (
    <div>  
      <form onSubmit={postFormData}>
        <input placeholder="Name"/>
        <button type="submit"> Submit </button>
      </form>

    </div>

  );
};

export default App;