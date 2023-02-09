import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    name: "Zahid",
    age:26,
    status: "coder"
}

export const fetchUserName = createAsyncThunk(
    'fetchuser',
    async () => {
      const res= await fetch("https://jsonplaceholder.typicode.com/users");
      const res2=await res.json();
      return res2[Math.floor(Math.random()*10)].name
    }
  )

const UserReducer = createSlice({

    name:"person",
    initialState,
    reducers:{
        changeName(state, action){
            state.name =action.payload
        },

        changeAge(state, action){
            state.age =action.payload
        },

        changeStatus(state, action){
            state.status =action.payload
        },
        },
        extraReducers:{
            [fetchUserName.fulfilled]:(state,action)=>{
                state.name=action.payload;
            },
            [fetchUserName.pending]:(state,action)=>{
                state.name="loading";
            },
            [fetchUserName.rejected]:(state,action)=>{
                state.name="try again";
            },
        }
    })
export const {changeName,changeAge,changeStatus} = UserReducer.actions;
export default UserReducer.reducer