import React, { useState } from "react";

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
                  <p>Created By: {routine.creatorName}</p>
                  <div>
                    {routine.activities.map((y) => {
                      return (
                        <div key={y.routineActivityId}>
                          <h4>{y.name}</h4>
                          <p>Description: {y.description}</p>
                          <p>Duration: {y.duration}</p>
                          <p>Count: {y.count}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Routines;
