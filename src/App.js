import "./App.css";
import { useState } from "react";

function App() {
  // const [userName, setUserName] =useState('')
  // const [password, setPassword] = useState('')

  // if there is a lot of text boxes initial value will be an object >>>> useState({})
  const [user, setUser] = useState({});

  // const handleUserNameChanged =(e)=>{
  //   setPassword(e.target.value)
  // }

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    setUser({
      ...user,[e.target.name]: e.target.value
    });
  };

  // const handlePasswordChanged =(e)=>{
  //   setPassword(e.target.value)
  // }

  // if there is a lot of text boxes initial value will be an object >>>> useState({})

  return (
    <div className='login'>
      User Name:
      <input type='text' onChange={handleChange} name='username' />
      Password:
      <input type='password' onChange={handleChange} name='password' />
      <button>Login</button>
    </div>
  );
}

export default App;
