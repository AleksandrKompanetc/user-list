import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="App">
      <Users />
      <Success />
    </div>
  );
}

export default App;
