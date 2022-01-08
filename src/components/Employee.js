import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import './bonus.css';
import {db} from './firebase-config';
import {collection, getDocs} from "firebase/firestore";

// Returns Employee List Component
const Employee = () => {

  // Following code consists of hooks and functions reading the 
  // fake database from localhost:3001/employees
  const [employees, setUser] = useState([]);
  const users = collection(db,"employees")
  useEffect(() => {
    loadUsers();
  }, []);
  // loads the database and assigns to employees variable
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    setUser(result.data);
  };

  // const loadUsers = async () => {
  //   const result = await axios.getDocs(users);
  //   setUser(result.docs.map((doc) => ({...doc.data(),id: doc.id })));
  // };

  return (
    <div>
      {/* Heading and Add Employee Button */}
      <div className="container">
        <div className="row">
          <div className="col">
          <h1>Employees</h1>
          </div>
          <div className="col">
          <a href="/addEmp"  className="btn btn-outline-dark mx-2"> Add Employee</a>
          </div>
        </div>
      </div>

      {/* Employee List table*/}
      <div className="scoreSlab">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Locations</th>
            <th>Action</th>
          </tr>
        </thead>

        {/*Mapping and iterating over each element of employees*/}
        {/*while displaying their details,each return calls <Contents> components */}
        {employees.map((emp) => {
          return <Contents key={emp.id} prop={emp}></Contents>;
        })}
      </Table>
      </div>
    </div>
  );
};

// Function called to iterate over each location if multiple locations present 
const mylocation = (name) => {
  return <div>{name}</div>;
};

// Component which displays each employees details 
// Called in the main Employees.js return 
const Contents = (props) => {
  const { id, name,location } = props.prop;
  // const {id,name,}
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location.name}</td>
        <td>
          <a
            href={`/edit/${id}/${location.id}`}
            className="btn btn-outline-primary mx-2"
            role="button">
            Edit Slab
          </a>
          <button
            type="button"
            className="btn btn-outline-danger mx-2"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Employee;

