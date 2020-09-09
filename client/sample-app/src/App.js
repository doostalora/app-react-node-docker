import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users,setUsers]=React.useState([]);

  React.useEffect(()=>{
          fetch("http://localhost:3000/users")
          .then(res => res.json())
          .then(response=>{
            console.log(response)
            setUsers(response)
          })
  },[])
  return (
    <React.Fragment>
      <header>
      <h1>Sample App</h1>
      </header>
      <main>
        <table>
        <tbody>
          <tr>
          <th>Name</th>
          <th>Email</th>
          </tr>
         
          {
                  users.map((user,ndex)=>(
                    <tr key={`user-${ndex}`}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))
          }
          </tbody>
        </table>
           
      </main>
      </React.Fragment>
  );
}

export default App;
