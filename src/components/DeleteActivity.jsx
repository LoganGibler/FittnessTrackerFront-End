import React, { useState, useEffect } from "react";
import { deleteActivities } from "../api";
import { getUser } from "../auth";

const DeleteActivity = (param) => {
 
  
    return (
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const data = await deleteActivities(param.routineActivityId);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <button type="submit">DELETE ACTIVITY</button>
      </form>
    );
  
};

export default DeleteActivity