// AuthContext.js
import { createContext, useEffect, useState } from 'react';
import { ContextProps, ReactProps } from "./interface";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext<ContextProps>({} as ContextProps);

function AuthProvider({ children }: ReactProps) {
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

  return (
    <AuthContext.Provider value={{ value, setValue, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext }