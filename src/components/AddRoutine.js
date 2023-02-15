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
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Create a Routine.</h3>
        <label>Routine Name</label>
        <input
          type='text'
          id='name'
          required
          placeholder='routine name'
        ></input>
        <label>goal</label>
        <input
          type='text'
          id='goal'
          required
          placeholder='routine goal'
        ></input>
        <button type='submit'>
          ENTER
        </button>
      </form>
    </div>
  );
};

export default AddRoutine;