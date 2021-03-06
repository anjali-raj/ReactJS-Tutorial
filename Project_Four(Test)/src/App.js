import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {
        id: Math.random.toString(),
        name: uName,
        age: uAge
      }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
