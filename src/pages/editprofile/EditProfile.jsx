import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditProfile = () => {
    // let[editUser,setEditUser]=useState();

    // let {editid}=useParams();

    // useEffect(()=>{
    //     axios.get("")
    // },[])
  return (
    <div>
      <h1>Edit Profile</h1>

      <form action="">

        <label>UserName:</label>
        <input type="text" />
        <br />
        <label >Email:</label>
        <input type="text" />
        <br />
        <label >password</label>
        <input type="text" />
      </form>
    </div>
  )
}

export default EditProfile
