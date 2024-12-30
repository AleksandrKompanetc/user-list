import React, {useState} from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  
  return (
    <div className="App">
      <Users />
      <Success />
    </div>
  );
}

export default App;
