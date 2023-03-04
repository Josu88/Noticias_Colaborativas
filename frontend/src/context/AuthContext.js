import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
