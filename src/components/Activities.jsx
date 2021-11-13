import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createActivity } from "../api";

const Activities = ({ allActivities, setAllActivities }) => {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");

  return (
    <div className="ui container">
      <ul className="activities-main-container">
        {allActivities.length
          ? allActivities.map((activity) => {
            // console.log(activity,"undefined???")
              return (
                <div key={`activity: ${activity.id}`}>

                  <Link
                    to={`/Activities/${activity.id}`}
                    key={activity.id}
                    className="link-tag"
                  >
                    <h1>{activity.name}</h1>
                  </Link>
                  <p>{activity.description}</p>
                </div>
              );
            })
          : null}
      </ul>

      <form className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          console.log("hello")
          try {
            const data = await createActivity(activityName, activityDescription)
            setAllActivities([data, ...allActivities])
            console.log(data, "are we getting in")

          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="activityName">Create A New Activity :</label>
          <input
            id="activityName"
            type="text"
            placeholder="Enter Activity Name"
            value={activityName}
            onChange={(event) => {
              console.log(event.target.value);
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
        <button type="submit" className="ui button">Create</button>
      </form>
    </div>
  );
};

export default Activities;
