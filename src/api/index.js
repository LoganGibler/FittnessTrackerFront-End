import axios from "axios";
import { getToken } from "../auth";
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
      user: {
        username: username,
        password: password,
      },
    });
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
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function createActivity(name, description) {
  const myToken = getToken();

  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      activity: {
        name: name,
        description: description,
      },
      headers: {
        "Content-Type": "application/JSON",

        Authorization: `Bearer ${myToken}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

