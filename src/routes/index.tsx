import { PrivateRoutes } from "./privateRoutes";
import { useAuth } from "../hooks/useAuth";
import { PublicRoutes } from "./publicRoutes";

function RoutesApp() {

  const { user } = useAuth();

  if (user.email && user.password) {
  return <PrivateRoutes />
  }
  return (<PublicRoutes />)
};

export { RoutesApp };