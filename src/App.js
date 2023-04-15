import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [getList, setList] = useState([]);
  const addUserHandler = (usrName, usrAge) =>{
    //console.log(usrName, usrAge);
    setList((prevList) =>{
      return [...prevList, {name: usrName, age: usrAge, id: Math.random.toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={getList}/>
    </div>
  );
}

export default App;