import React, { useState } from "react";

const Activities = ({ allActivities }) => {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");

  return (
    <div>
      <ul className="activities-main-container">
        {allActivities.length
          ? allActivities.map((activity) => {
              return (
                <div key={activity.id}>
                  <h1>{activity.name}</h1>
                  <p>{activity.description}</p>
                </div>
              );
            })
          : null}
      </ul>
      <form>
        <fieldset className="auth-component-input">
          <label htmlFor="activityName">Create A New Activity :</label>
          <input
            id="activityName"
            type="text"
            placeholder="Enter Activity Name "
            value={activityName}
            onChange={(event) => {
              setActivityName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="password">Description :</label>
          <input
            id="activityDescription"
            type="text"
            placeholder="Description"
            value={activityDescription}
            onChange={(event) => {
              setActivityDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="ui button">Create</button>
      </form>
    </div>
  );
};

export default Activities;
