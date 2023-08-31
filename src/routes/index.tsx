import { PrivateRoutes } from "./privateRoutes";
import { useAuth } from "../hooks/useAuth";
import { PublicRoutes } from "./publicRoutes";
import { LoadingScreen } from "../components/LoadingScreen";
import { useState, useEffect } from 'react';

function RoutesApp() {
  const { user } = useAuth();
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);

  // Check if there's a "user" on localstorage
  useEffect(() => {
    const checkUserInLocalStorage = async () => {
      await localStorage.getItem('user');
      setIsVerificationComplete(true);
    };
    checkUserInLocalStorage();
  }, [user]);

  if (!isVerificationComplete) {
    return <LoadingScreen />;
  } else if (user.email && user.password) {
    return <PrivateRoutes />;
  } else {
    return <PublicRoutes />;
  }
}

export { RoutesApp };