import { useContext } from "react";
import { AuthContext } from "../context";

function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("The App must be used within a AuthProvider")
  }

  return context;
}

export { useAuth }