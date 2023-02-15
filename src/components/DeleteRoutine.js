import React from "react";
import { getRoutines, deleteRoutine } from "../api";

const DeleteRoutine = () => {


    const handleDelete = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        deleteRoutine(token, event.target.id)
      }
    return ( 
        <div>
            <button onClick={handleDelete} type="button"> delete </button>
        </div>
     );
}
 
export default DeleteRoutine;