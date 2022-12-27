import './App.css';
import {useState} from 'react'

function App() {

const [userName, setUserName] =useState('')
const [password, setPassword] = useState('')



const handleUserNameChanged =(e)=>{
setUserName(e.target.value)
}

const handlePasswordChanged =(e)=>{
  setPassword(e.target.value)
}

// if there is a lot of text boxes initial value will be an object >>>> useState({})


  return (
    <div className="login">
      User Name:
      <input type='text' onChange={handleUserNameChanged}/>
      Password:
      <input type = 'password' onChange={handlePasswordChanged}/>

      <button>Login</button>
    </div>
  );
}

export default App;
