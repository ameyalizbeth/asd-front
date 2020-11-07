import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Admin from './components/admin';

function App() {
  function login(e){
    let request = {
      username:document.getElementById('username').value,
      password:document.getElementById('password').value

    }
    e.preventDefault();
    
    axios.post('http://localhost:3000/login',request).then(r=>{
      if(r.status === 200)
      {
        console.log("hi");
        return <Admin />;
      }

    }).catch(e=>console.log(e));
  }
  return (
    <div className="App">
      <form onSubmit={(e)=>login(e)
        }>
      <input type="text" name="username" id="username"/>
      <input type="password" name="password" id="password"/>
      <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
