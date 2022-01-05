import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

// import { Button } from "bootstrap";
var x = "xo";

const Employee = () => {
  const [employees, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    setUser(result.data);
  };
  
 

  

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Locations</th>
            <th>Action</th>
          </tr>
        </thead>

        {employees.map((emp) => {
          return <Contents key={emp.id} prop={emp}></Contents>;
        })}
      </Table>
    </div>
  );
};

const mylocation = (name) => {
  return <div>{name}</div>;
};




const Contents = (props) => {
  const { id, name,location } = props.prop;
  return (
    // <Table>
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location.name}</td>
        {/* {console.log(props.prop)} */}
        <td>
        {/* <Button variant="outline-primary">Edit</Button> */}
          <a
            // href="./edit?EmployeeID="+{id}
            href={`/edit/${id}/${location.id}`}
            // href="./"
            className="btn btn-outline-primary mx-2"
            role="button">
            Edit
          </a>

        </td>
      </tr>
    </tbody>
    // </Table>
  );
};

export default Employee;
export {x};
