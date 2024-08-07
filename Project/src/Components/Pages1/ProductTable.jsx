import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ProductTable() {
    const [user , setUsers] = useState(null)
    const deleteUser = (id)=>{
        fetch("http://localhost:3000/product/delete/" + id,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
        })
    }

    useEffect(() =>{

    fetch("http://localhost:3000/product/list")

    .then(res => res.json())

    .then((data)=>{
        setUsers(data)
        console.log(data)
    })

    .catch((err) => console.log(err))

    }, [])
  return (
    <div>
       <center>
    <h2>Admin product Table</h2><br></br>
    <div className= "container">
    {
    user && <Table striped="columns">
       
      <thead>
        <tr>
            <th>Id</th>
            <th>productname</th>
            <th>Price</th>
            <th>Image</th>
            <th colSpan={3}>Action</th>
        </tr>
      </thead>
      <tbody>
      {user.map((e) =>
            <tr key={e._id}>
              <td>{e._id}</td>
              <td> {e.name} </td>
              <td> {e.price} </td>
              <td> {e.image} </td>          
           <td> <Button variant="secondary">Edit</Button></td>
           <td> <Button style={{backgroundColor:"#fc6486",border:"none"}}>View</Button></td>
           <td> <Button variant="secondary"  onClick={(event)=>{deleteUser(e._id)}} >Delete</Button></td>
        </tr>
     )}
      </tbody>


    </Table>
}
    </div>
    </center>
    </div>
  )
}

export default ProductTable
