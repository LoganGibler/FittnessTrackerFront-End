import {
  attachActivities,
  deleteRoutines,
  getActivities,
  createRoutines,
  getRoutines,
} from "../api";
import React, { useState, useEffect } from "react";

const MyRoutinesForm = ({ param }) => {
    console.log(param)
  const [activityCount, setActivityCount] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [allActivities, setAllActivities] = useState([]);
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");
  const [allRoutines, setAllRoutines] = useState([]);
  const [activityId, setActivityId] = useState("");

  useEffect(async () => {
    const data = await getRoutines();
    setAllRoutines(data);
  }, []);

  useEffect(async () => {
    const data = await getActivities();
    setAllActivities(data);
  }, []);

  return (
    <div>
      <form
        className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("hello");
          try {
            const data = attachActivities(
              param.id,
              activityId,
              activityCount,
              activityDuration
            );
           
            // setAllActivities([data, ...allActivities]);
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
        <fieldset className="auth-component-input">
          <label htmlFor="routineGoal">Activity :</label>
          <input
            id="activityDuration"
            type="text"
            placeholder="Activity Id"
            value={activityId}
            onChange={(event) => {
              setActivityId(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="ui button">Add Activity</button>
      </form>
    </div>
  );
};

export default MyRoutinesForm;
