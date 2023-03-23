import { useEffect, useState } from "react";
import Card from './Card';
import Input from './Input';
import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if(searchTerm === ''){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    } else {
      setUsers(users.filter(
        (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    }
  }, [searchTerm])

  const onInputChange = (value) => {
    setSearchTerm(value)
  }


  return (
    <div className="container">
      <Input searchTerm={searchTerm} onInputChange={onInputChange} />
      <div className="card-container">
        {users?.map((user) => (
           <Card key={user.id} user={user} />
        ))}
        </div>
    </div>
  );
}

export default App;
