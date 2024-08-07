// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import './AdminTable.css'

// function AdminTable() {
//     const [user , setUsers] = useState(null)
//     const deleteUser = (id)=>{
//         fetch("http://localhost:3000/user/delete/" + id,{
//             method: "DELETE"
//         })
//         .then(res => res.json())
//         .then((data)=>{
//             console.log(data);
//         })
//     }

//     useEffect(() =>{

//     fetch("http://localhost:3000/user/list")

//     .then(res => res.json())

//     .then((data)=>{
//         setUsers(data)
//         console.log(data)
//     })

//     .catch((err) => console.log(err))

//     }, [])
//   return (
//     <div>
//         <center>
//     <h2>Admin Users Table</h2><br></br>
//     <div className= "container">
//     {
//     user && <Table striped="columns">
       
//       <thead>
//         <tr>
//             <th>Id</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Password</th>
//             <th colSpan={3}>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//       {user.map((e) =>
//             <tr key={e._id}>
//               <td>{e._id}</td>
//               <td> {e.username} </td>
//               <td> {e.email} </td>
//               <td> {e.contact} </td>
//               <td> {e.password} </td>          
//            <td> <Button variant="secondary">Edit</Button></td>
//            <td> <Button style={{backgroundColor:"#fc6486",border:"none"}}>View</Button></td>
//            <td> <Button variant="secondary"  onClick={(event)=>{deleteUser(e._id)}} >Delete</Button></td>
//         </tr>
//      )}
//       </tbody>


//     </Table>
// }
//     </div>
//     </center>
//     </div>
//   )
// }

// export default AdminTable

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './AdminTable.css';

function AdminTable() {
  const [users, setUsers] = useState(null);

  const deleteUser = (id) => {
    fetch("http://localhost:3000/user/delete/" + id, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      // Update the user list after deletion
      setUsers(users.filter(user => user._id !== id));
    });
  }

  useEffect(() => {
    fetch("http://localhost:3000/user/list")
      .then(res => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="admin-table-container">
      <center>
        <h2>Admin Users Table</h2><br />
        <div className="table-responsive">
          {users && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Password</th>
                  <th colSpan={3}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>{user.password}</td>
                    <td><Button variant="secondary">Edit</Button></td>
                    <td><Button style={{ backgroundColor: "#fc6486", border: "none" }}>View</Button></td>
                    <td><Button variant="secondary" onClick={() => deleteUser(user._id)}>Delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </center>
    </div>
  );
}

export default AdminTable;
