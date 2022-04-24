import users from "../apis/carbon";

import { SIGN_IN, SIGN_OUT, ADD_ENTRY } from "./types";

export const signIn = async (dispatch) => {
  const response = await users.post("/register");

  dispatch({ type: SIGN_IN, payload: response.data });
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addEntry = (formValues) => async (dispatch) => {
  users.post("/users", formValues);
  // dispatch({ type: ADD_ENTRY, payload: response.data });
};
