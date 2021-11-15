import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createActivity, createRoutines, deleteRoutines } from "../api";
import { getUser } from "../auth";
// As a registered user on the My Routines tab, I want to:
// be shown a form to create a new routine
// the form should have text fields for name and goal
// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to update the duration or count of any activity on
// the routine // be able to remove any activity from the routine
const MyRoutines = ({ allRoutines, setAllRoutines }) => {
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");
  const [activityCount, setActivityCount] = useState("");
  const [activityDuration, setActivityDuration] = useState("");


  let userName = getUser();

  
  return (
    <div className="ui container">
      <ul className="activities-main-container">
        {allRoutines.length
          ? allRoutines.map((routine) => {
              if (routine.creatorName === userName) {
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

                    {/*be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration*/}
                    <form
                      className="ui form"
                      id="newPostSubmit"
                      onSubmit={async (event) => {
                        event.preventDefault();
                        console.log("hello");
                        try {
                          const data = await createActivity(
                            activityName,
                            activityDescription
                          );
                          setAllActivities([data, ...allActivities]);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      <fieldset className="auth-component-input">
                        <label htmlFor="addActivity">Count :</label>
                        <input
                          id="activityCount"
                          type="text"
                          placeholder="Enter Count "
                          value={activityCount}
                          onChange={(event) => {
                            setActivityCount(event.target.value);
                          }}
                        ></input>
                      </fieldset>
                      <fieldset className="auth-component-input">
                        <label htmlFor="routineGoal">Duration :</label>
                        <input
                          id="activityDuration"
                          type="text"
                          placeholder="Enter Duration"
                          value={activityDuration}
                          onChange={(event) => {
                            setActivityDuration(event.target.value);
                          }}
                        ></input>
                      </fieldset>
                      <button className="ui button">Add Activity</button>
                    </form>
                    {/* be able to delete the entire routine*/}
                    <form
                      className="ui form"
                      id="newPostSubmit"
                      onSubmit={async (event) => {
                        event.preventDefault();
                        console.log("hello");
                        try {
                          const data = await deleteRoutines(routine.id);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      <button className="ui button">Delete</button>
                    </form>
                  </div>
                );
              }
            })
          : null}
      </ul>
      <form
        className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
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
