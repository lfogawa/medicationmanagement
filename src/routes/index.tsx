import { PrivateRoutes } from "./privateRoutes";
import { useAuth } from "../hooks/useAuth";
import { PublicRoutes } from "./publicRoutes";
import { LoadingScreen } from "../components/LoadingScreen";
import { useState, useEffect } from 'react';

function RoutesApp() {
  const { user } = useAuth();
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(!!(user.email && user.password));
      setIsVerificationComplete(true);
    }, 1000);
  }, [user]);

  if (!isVerificationComplete) {
    return <LoadingScreen />;
  } else if (isAuthenticated) {
    return <PrivateRoutes />;
  } else {
    return <PublicRoutes />;
  }
}

export { RoutesApp };