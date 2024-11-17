import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);  // accessing the user data from the UserContextProvider

    if(!user) return <div>Please Login</div> 
    
    return  <div>Welcome {user.username}</div>
}

export default Profile;