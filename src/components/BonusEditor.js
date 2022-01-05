import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {nanoid} from 'nanoid';
import axios from "axios";
import Table from "react-bootstrap/Table";
// import Button from 'react-bootstrap/Button';
// import styled from 'styled-components'
// import Modal from './Modal';
import { useParams } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import './bonus.css';



const BonusEditor = () => {
  const [employees, setUser] = useState([]);
  const [addData,setData] = useState({
    score:'',
    point:''
  })
  const handleData = (e)=>{
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;
    const newForm = {...addData};
    newForm[fieldName] = fieldValue;
    setData(newForm);
  }


  const handleDataSubmit = (event) =>{
    event.preventDefault();
    
    const newData = {
      id:nanoid(),
      score : addData.score,
      point : addData.point
    }
    console.log(addData.score);
    const newEmp = [...employees];
    const newSlab = [...newEmp[emp.id-1].slab,newData];
    newEmp[emp.id-1].slab = newSlab;
    
    setUser(newEmp);

  }

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    setUser(result.data);
  };

  const emp = useParams();
  console.log(emp.id);

  return (
    <div className="bonusEditor">
      <div className="container">
      <h1>Bonus Editor</h1>
      <div className="row">
      <div className="col"><h3>Name: {employees[(emp.id-1)]?.name}</h3></div>
      <div className="col"><h5> Location: {employees[(emp.id-1)]?.location.name}</h5></div>
      </div>
      </div>
    <div className="scoreSlab">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NPS</th>
            <th></th>
            <th>SCORE</th>
            <th>POINT</th>
          </tr>
        </thead>

      
        {employees[(emp.id-1)]?.slab.map((s)=>{
          return <Input prop = {s}/>
        })}
      </Table>
      </div>

      <div className="container">
        <h2>Add Slab</h2>
        <form onSubmit={handleDataSubmit}>
          <input type="number" name="score" required="required" placeholder="97" onChange={handleData}/>
          <input type="number" name="point" required="required" placeholder="200" onChange={handleData}/>
          <button type="submit" >Add</button>
        </form>
      </div>
    </div>
  );
};

const Input = (props) =>{
  const {score,point} = props.prop;
  return (<tbody>
    <tr>
      <td>NPS</td>
      <td>≥</td>
      <td>{score}</td>
      <td> {point}</td>
     </tr>
    </tbody>)
}

// const mylocation = (name) => {
//   return <div>{name.name}</div>;
// };

// const Contents = (props) => {
//   const { id, name } = props.prop;
//   const [showModal,modelfunc] = useState(false);
//   const open=()=>{
//       modelfunc(prev => !prev)
//   }
//   return (
//     // <Table>
//     <tbody>
//       <tr>
//         <td>{id}</td>
//         <td>{name}</td>
//         {/* <td>{props.prop.location.map(mylocation)}</td> */}
//         {/* {console.log(props.prop)} */}
//         <td>
//         <Button variant="outline-primary" onClick={open}>Edit</Button></td>
//         <td><Modal showModal={showModal} modelfunc={modelfunc} prop = {props}/>
//         </td>
//       </tr>
//     </tbody>
//     // </Table>
//   );
// }

export default BonusEditor;
