import React, {useState, useEffect} from 'react';
import './App.css';
import { Users } from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then((json) => {
        setUsers(json.data);
      }).catch(err => {
        console.warn(err);
        alert('Error users request!');
      }).finally(() => setIsLoading(false));
  }, [])

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
