import {createSlice} from "@reduxjs/toolkit";

const usersSlice=createSlice({
  name:"username",
  initialState:{
    username:localStorage.getItem("username")
  },
  reducers:{
    addUser(state,action){
      state.username=action.payload.username;
    }
  }
})


export const userActions=usersSlice.actions;
export default usersSlice;
