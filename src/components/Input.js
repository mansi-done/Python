import React from "react";

// destructure props in the arrow function prop in line
const Input = ({prop, edit}) => {
    const {score, point} = prop;
    return (
        <tbody>
        <tr>
            <td>NPS</td>
            <td>≥</td>
            <td>{score}</td>
            <td> {point}</td>
            <td>
            <button
                type="button"
                className="btn btn-outline-primary mx-2"
                onClick={(event) => edit(event, prop)}
                >
                Edit
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
export default Input;
