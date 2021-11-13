import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = ()=>{

  let history = useHistory();

  return (
    <div>
      <h1 className="text-center">Welcome to FitnessTracker!</h1>
      <div className="row">
        <div className="col-12 text-center">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              history.push("/Activities")
            }}
          >
           View All Activities
          </Button>
        </div>
      </div>
    </div>
  );
}


export default Home;