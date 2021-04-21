import React, { useState } from 'react';
import API from './utils/API';


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

const formSubmit = event=>{
  event.preventDefault();
  API.login(loginFormState).then(loginData=>{
    console.log(loginData)
  })
}

  return (
    <div className="App">
     <form onSubmit={formSubmit}>
       <input onChange={inputChange} value={loginFormState.email} type="text" name="email" placeholder="email" />
       <input onChange={inputChange} value={loginFormState.password} type="password" name="password" />
       <input type="submit" value="login" />
     </form>
    </div>
  );
}

export default App;
