import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import './App.css'

export default function App2(){

  const [ users, setUsers ] = useState([]);
  const [ recuperado, setRecuperado ] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => { return resp.json() })
      .then((users) => {
       setTimeout(() => {
        setUsers(users)
        setRecuperado(true)
       }, 2000)
    })
  }, []);

  function mostrarTabla(){
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

  if(recuperado){
    return mostrarTabla()
  } else {
    return (<div>Recuperando datos...</div>)
  }
}