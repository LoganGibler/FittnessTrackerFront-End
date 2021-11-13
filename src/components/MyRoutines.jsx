import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createRoutines } from "../api";
// As a registered user on the My Routines tab, I want to:

// be shown a form to create a new routine

// the form should have text fields for name and goal
// for each routine which is owned by me I should

// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine

const MyRoutines = ({ allRoutines, setAllRoutines }) => {
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");

  return (
    <div className="ui container">
      <ul className="activities-main-container">
        {allRoutines.length
          ? allRoutines.map((routine) => {
              return (
                <div key={`routine: ${routine.id}`}>
                  <Link
                    to={`/Routines/${routine.id}`}
                    key={routine.id}
                    className="link-tag"
                  >
                    <h1>{routine.name}</h1>
                  </Link>
                  <p>{routine.goal}</p>
                </div>
              );
            })
          : null}
      </ul>

      <form
        className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("hello");
          try {
            const data = await createRoutines(routineName, routineGoal);
            setAllRoutines([data, ...allRoutines]);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="routineName">Create A New Routine :</label>
          <input
            id="routineName"
            type="text"
            placeholder="Enter Routine Name "
            value={routineName}
            onChange={(event) => {
              setRoutineName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="routineGoal">Goal :</label>
          <input
            id="routineGoal"
            type="text"
            placeholder="Enter Goal"
            value={routineGoal}
            onChange={(event) => {
              setRoutineGoal(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="ui button">Create</button>
      </form>
    </div>
  );
};

export default MyRoutines;
