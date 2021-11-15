import React, { useState, useEffect } from "react";
import { deleteRoutines, attachActivities } from "../api";
import { getUser } from "../auth";

const DeleteRoutine = (param) => {
  let user = getUser();
  if (user === param.creatorName) {
    return (
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const data = await deleteRoutines(param.id);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <button type="submit">Delete Routine</button>
      </form>
    );
  }
};

export default DeleteRoutine