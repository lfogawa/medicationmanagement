// AuthContext.js
import { createContext, useEffect, useState } from 'react';
import { ContextProps, ReactProps } from "./interface";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext<ContextProps>({} as ContextProps);

function AuthProvider({ children }: ReactProps) {
  // Verifies if there's a user on localstorage and set the value with it's information
  const { value, setValue } = useLocalStorage('user', {})
  const [user, setUser] = useState({})

  useEffect(() => {
    if(value) {
      setUser(value)
    }
  }, [setUser, value])

  const logout = () => {
    setValue({})
  }

  // Passes the information to all pages
  return (
    <AuthContext.Provider value={{ value, setValue, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext }