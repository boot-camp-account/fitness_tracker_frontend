import React from "react";
import { postRoutines } from "../api";

const AddRoutine = ({ myRoutines, setMyRoutines }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const goal = event.target[1].value;

    const result = await postRoutines(name, goal);
    if (result) {
      setMyRoutines([result, ...myRoutines]);
    }

    if (result.error) {
      alert(result.error);
    }
  };
  return (
    <div className="post-div">
      <form onSubmit={handleSubmit}>
        <h3>Create a New Routine:</h3>
        <br></br>
        <label><b>Routine Name:</b></label>
        <input
          type='text'
          id='name'
          required
          placeholder='routine name'
        ></input>
        <br></br>
        <label><b>Routine Goal:</b></label>
        <input
          type='text'
          id='goal'
          required
          placeholder='routine goal'
        ></input>
        <br></br>
        <button type='submit'>
          Create Routine
        </button>
      </form>
    </div>
  );
};

export default AddRoutine;