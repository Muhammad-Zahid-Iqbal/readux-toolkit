import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {changeName, changeAge,changeStatus,fetchUserName } from '../reducers/UserReducer';

const Profile = () => {
    const {name, age, status} = useSelector(state=>state.counter);
    const dispatch =useDispatch();

    const updateName =()=>{
        dispatch(fetchUserName());
    }
    const updateAge = (age)=>{
        dispatch(changeAge(age));
    }
    const updateStatus = (status)=>{
        dispatch(changeStatus(status));
    }
  return (
    <div>
        <h2>I am Muhammad {name}</h2>
        <h2>My age is {age}</h2>
        <h2>My status is {status}</h2>
        <button type='button' onClick={()=>updateName()}>Update Name</button>
        <button type='button' onClick={()=>updateAge(40)}>Update Age</button>
        <button type='button' onClick={()=>updateStatus("single")}>Update Status</button>
    </div>
  )
}

export default Profile