import React, { useState } from "react";
// As any user on the Routines tab, I want to:

// see a list of all public routines showing:
// The routine name, goal, and creator's username
// A list of activities for the routine, including their name, description, and duration and/or count


const Routines = ({ allRoutines }) => {

  return (
    <div>
      <ul className="activities-main-container">
        {allRoutines.length
          ? allRoutines.map((routine) => {
              return (
                <div key={routine.id}>
                  <h1>{routine.name}</h1>
                  <p>{routine.goal}</p>
                  <p>{routine.creatorName}</p>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
};




export default Routines;