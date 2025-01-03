import React, {useState, useEffect} from 'react';
import './App.css';
import { Users } from './components/Users/Users';
import { Success } from './components/Success';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  return (
    <div className="App">
      {success ? <Success /> : <Users 
        onChangeSearchValue={onChangeSearchValue} 
        searchValue={searchValue} 
        items={users} 
        isLoading={isLoading} 
        invites={invites}
        onClickInvite={onClickInvite}
      />}
    </div>
  );
}

export default App;
