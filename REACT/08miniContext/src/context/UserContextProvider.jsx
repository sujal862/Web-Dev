import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return(
        //UserContext.Provider wrap the children and shares the context value ({ user, setUser }) with its child components
        <UserContext.Provider value={{user, setUser}}>
            {children}   {/* here children is the Login and Profile component(see in app.jsx) */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;