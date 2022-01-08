import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import "./bonus.css";
import Input from "./Input";

const BonusEditor = (props) => {
  const [employees, setUser] = useState([]);
  const [addData, setData] = useState({
    score: "",
    point: "",
  });
  const[editSlabData,saveSlabData] = useState({
    score: "",
    point: "",
  });
  const [editSlabId, setSlabId] = useState(null);

  //
  const handleData = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newForm = { ...addData };
    newForm[fieldName] = fieldValue;
    setData(newForm);
  };

  const handleDataSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: nanoid(),
      score: addData.score,
      point: addData.point,
    };
    const newEmp = [...employees];
    const newSlab = [...newEmp[emp.id - 1].slab, newData];
    newEmp[emp.id - 1].slab = newSlab;

    setUser(newEmp);
  };

  const handleSaveSubmit = (e) =>{
    e.preventDefault();
    const editedSlab = {
      score:editSlabData.score,
      point:editSlabData.point
    }
    const newSlab = [...employees[emp.id]?.slab];

  }

  const handleSaveChange = (e) =>{
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newSlabData = { ...editSlabData };
    newSlabData[fieldName]= fieldValue;
    saveSlabData(newSlabData);

  }

  const handleEditClick = (event, slab) => {
    event.preventDefault();
    setSlabId(slab.score);

    const formValues = {
      score: slab.score,
      point: slab.point,
    }
    saveSlabData(formValues);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    setUser(result.data);
  };

  const emp = useParams();
  // console.log(emp.id);

  return (
    <div className="bonusEditor">
      <div className="container">
        <h1>Bonus Editor</h1>
        <div className="row">
          <div className="col">
            <h3>Name: {employees[emp.id - 1]?.name}</h3>
          </div>
          <div className="col">
            <h5> Location: {employees[emp.id - 1]?.location.name}</h5>
          </div>
        </div>
      </div>
      <div>
        {/* //Add Slab */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Add Slab</h2>
            </div>

            <div className="col-10">
              <form onSubmit={handleDataSubmit}>
                <input
                  type="number"
                  name="score"
                  required="required"
                  placeholder="Enter a score.."
                  onChange={handleData}
                />
                <input
                  type="number"
                  name="point"
                  required="required"
                  placeholder="Enter a point.."
                  onChange={handleData}
                />
                <button type="submit" className="btn btn-outline-secondary">Add</button>
              </form>
            </div>
          </div>
        </div>
        <form className="scoreSlab">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>NPS</th>
                <th></th>
                <th>SCORE</th>
                <th>POINT</th>
                <th>Action</th>
              </tr>
            </thead>

            {employees[emp.id - 1]?.slab.map((s) => {
              {
                console.log(handleEditClick);
              }
              return (
                <Fragment>
                  {editSlabId === s.score ? (
                    <EditSlab editSlabData={editSlabData} handleSaveChange={handleSaveChange}/>
                  ) : (
                    <Input prop={s} edit={handleEditClick} />
                  )}
                </Fragment>
              );
            })}
          </Table>
        </form>
      </div>
    </div>
  );
};

//Read Only Slab
// const Input = (props, handleEditClick) => {
//   const { score, point } = props.prop;
//   return (

//   );
// };

//Editable Slab
const EditSlab = ({editSlabData,handleSaveChange}) => {
  return (
    <tbody>
      <tr>
        <td>NPS</td>
        <td>≥</td>
        <td>
          <input
            type="number"
            required="required"
            name="score"
            value={editSlabData.score}
            placeholder="Enter a score.."
            onChange={handleSaveChange}
          ></input>
        </td>
        <td>
          <input
            type="number"
            required="required"
            name="point"
            value={editSlabData.point}
            placeholder="Enter a point.."
            onChange={handleSaveChange}
          ></input>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-primary mx-2"
          >
            Save
          </button>
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

export default BonusEditor;
