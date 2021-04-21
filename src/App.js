import React, { useState } from 'react';


function App() {
  const [loginFormState, setLoginFormState] = useState({
    email:"",
    password:"",
  })

  const inputChange = event=>{
    const {name, value}=event.target;
    setLoginFormState({
      ...loginFormState,
      [name]:value
    })
  }

  return (
    <div className="App">
     <form>
       <input onChange={inputChange} value={loginFormState.email} type="text" name="email" placeholder="email" />
       <input onChange={inputChange} value={loginFormState.password} type="password" name="password" />
       <input type="submit" value="login" />
     </form>
    </div>
  );
}

export default App;
