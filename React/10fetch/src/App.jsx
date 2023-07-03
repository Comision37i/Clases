import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import './App.css'

export default function App(){

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => { return resp.json() })
      .then((users) => {setUsers(users)})
  }, []);

  return(
    <div>
      <NavbarComponent/>
      <div className="tableContainer">
        <h1>Usuarios</h1>
        <Table className="table" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre y Apellido</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}