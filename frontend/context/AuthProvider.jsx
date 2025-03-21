import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {  // ✅ props destructuring
  const initialAuthUser = localStorage.getItem("user");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>  
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
