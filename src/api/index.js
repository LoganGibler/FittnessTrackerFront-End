import axios from "axios";
import { getToken, storeToken, storeUser } from "../auth";
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

// this is an example for an api call with axios

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password,
    });
    storeToken(data.token);
    storeUser(data.user.username);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });
    console.log(data);
    storeToken(data.token);
    storeUser(data.user.username);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// GET /api/activities
export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function createActivity(name, description) {
  const myToken = getToken();
  console.log(myToken, "hey token");
  try {
    const { data } = await axios.post(
      `${BASE}/activities`,
      {
        name: name,
        description: description,
      },
      {
        headers: {
          "Content-Type": "application/JSON",

          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutines(name, goal, isPublic) {
  try {
    const { data } = await axios.post(`${BASE}/routines`, {
      name: name,
      goal: goal,
      isPublic: isPublic,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
